import * as PIXI from 'pixi.js'
import { App } from './App'
import signal from '../signal'
import { Layer, TilemapSprites, Tool, TilePoint, Point, RealmData, Room, TileMode } from './types'
import { SheetName, sprites } from './spritesheet/spritesheet'

export class EditorApp extends App {
    private gridLines: PIXI.TilingSprite = new PIXI.TilingSprite()
    private toolMode: Tool = 'None'
    private tileMode: TileMode = 'Single'
    private dragging: boolean = false
    private initialDragPosition: PIXI.Point = new PIXI.Point()
    private scale: number = 1
    private selectedPalette: SheetName = 'city'
    private selectedTile: string = ''   
    private tilemapSprites: TilemapSprites = {}
    private needsToSave: boolean = false
    private currentCoordinates: Point = { x: 0, y: 0 }
    private lastErasedCoordinates: Point = { x: 0, y: 0 }
    private canErase: boolean = true

    private previewTiles: PIXI.Sprite[] = []
    private hiddenTiles: PIXI.Sprite[] = []

    public async init() {
        await super.init()

        await this.loadAssets()
        this.drawGridLines()

        this.setUpSignalListeners()
        this.setUpBeforeUnload()
        this.setUpInteraction()
    }

    override async loadRoomSprites(index: number) {
        await super.loadRoomSprites(index)

        this.setUpInitialTilemapDataAndPointerEvents('floor')
        this.setUpInitialTilemapDataAndPointerEvents('transition')
        this.setUpInitialTilemapDataAndPointerEvents('object')
    }

    private setUpInitialTilemapDataAndPointerEvents = (layer: Layer) => {
        for (const tile of this.layers[layer].children) {
            const convertedPosition = this.convertScreenToTileCoordinates(tile.x, tile.y)

            const key: TilePoint = `${convertedPosition.x}, ${convertedPosition.y}`
            this.tilemapSprites[key] = { ...this.tilemapSprites[key], [layer]: tile as PIXI.Sprite }

            this.setUpEraserTool(tile as PIXI.Sprite, convertedPosition.x, convertedPosition.y, layer)
        }
    }

    private loadAssets = async () => {
        await PIXI.Assets.load('/sprites/tile-outline.png')
    }

    private drawGridLines = () => {
        this.gridLines = new PIXI.TilingSprite({
            texture: PIXI.Texture.from('/sprites/tile-outline.png'),
            width: this.app.screen.width,
            height: this.app.screen.height,
            alpha: 0.1,
        })

        this.gridLines.eventMode = 'none'
        this.app.stage.addChild(this.gridLines)
        this.app.renderer.on('resize', this.resizeEvent)
    }

    private resizeEvent = () => {
        this.resizeGridLines()
        this.matchHitAreaToGridLines()
    }

    private resizeGridLines = () => {
        this.gridLines.width = this.app.screen.width * (1 / this.scale)
        this.gridLines.height = this.app.screen.height * (1 / this.scale)
    }

    private matchHitAreaToGridLines = () => {
        this.app.stage.hitArea = new PIXI.Rectangle(this.gridLines.position.x, this.gridLines.position.y, this.gridLines.width, this.gridLines.height)
    }

    private setUpSignalListeners = () => {
        signal.on('selectTool', this.onSelectTool)
        signal.on('tileSelected', this.onSelectTile)
        signal.on('beginSave', this.onBeginSave)
        signal.on('saved', this.onSaved)
        signal.on('createRoom', this.onCreateRoom)
        signal.on('changeRoom', this.changeRoom)
        signal.on('deleteRoom', this.onDeleteRoom)
        signal.on('changeRoomName', this.onChangeRoomName)
        signal.on('selectTileMode', this.onSelectTileMode)
    }

    private onSelectTile = (tile: string) => {
        this.selectedTile = tile
        this.toolMode = 'Tile'
    }

    private onSelectTool = (tool: Tool) => {
        this.toolMode = tool
    }

    private onSelectTileMode = (mode: TileMode) => {
        this.tileMode = mode
    }

    private setUpInteraction = () => {
        this.app.stage.eventMode = 'static'
        this.app.stage.hitArea = this.app.screen
        this.handTool()
        this.zoomInTool()
        this.zoomOutTool()
        this.tileTool()
        this.updateCoordinates()
    }

    private placeTileOnMousePosition = (e: PIXI.FederatedPointerEvent) => {
        const position = e.getLocalPosition(this.app.stage)
        const tileCoordinates = this.convertScreenToTileCoordinates(position.x, position.y)

        this.placeTileAtPosition(tileCoordinates.x, tileCoordinates.y)
    }

    private placeTileAtPosition = (x: number, y: number) => {
        const tile = sprites.getSprite(this.selectedPalette, this.selectedTile)
        tile.x = x * 32
        tile.y = y * 32

        const layer = sprites.getSpriteLayer(this.selectedPalette, this.selectedTile) as Layer

        this.setUpEraserTool(tile, x, y, layer)

        const existingTile = this.getTileAtPosition(x, y, layer)
        if (existingTile) {
            this.layers[layer].removeChild(existingTile)
        }

        this.layers[layer].addChild(tile)

        const key = `${x}, ${y}` as TilePoint
        this.tilemapSprites[key] = {
            ...this.tilemapSprites[key],
            [layer]: tile
        }

        // sort the children by y position
        this.sortObjectsByY()

        // For database purposes
        this.addTileToRealmData(x, y, layer, this.selectedPalette + '-' + this.selectedTile)
    }

    private setUpEraserTool = (tile: PIXI.Sprite, x: number, y: number, layer: Layer) => {

        const erase = () => {
            this.layers[layer].removeChild(tile)
            delete this.tilemapSprites[`${x}, ${y}`][layer]
            this.removeTileFromRealmData(x, y, layer)
            this.lastErasedCoordinates = this.currentCoordinates
            this.canErase = false
        }

        tile.eventMode = 'static'
        tile.on('pointermove', (e: PIXI.FederatedPointerEvent) => {
            // if mouse is clicked
            if (this.toolMode === 'Eraser') {
                tile.tint = 0xababab
                const holdingClick = e.buttons === 1
                if (holdingClick && this.canErase) {
                    erase()
                }
            }
        })

        tile.on('pointerleave', () => {
            if (this.toolMode === 'Eraser') {
                tile.tint = 0xFFFFFF
            }
        })

        tile.on('pointerdown', (e: PIXI.FederatedPointerEvent) => {
            if (this.toolMode === 'Eraser') {
                erase()
            }
        })
    }

    private getTileAtPosition = (x: number, y: number, layer: Layer) => {
        const key = `${x}, ${y}` as TilePoint
        return this.tilemapSprites[key]?.[layer]
    }

    private addTileToRealmData = (x: number, y: number, layer: Layer, tile: string) => {
        const key = `${x}, ${y}` as TilePoint
        const newRealmData = this.realmData
        newRealmData[this.currentRoomIndex] = {
            ...newRealmData[this.currentRoomIndex],
            tilemap: {
                ...newRealmData[this.currentRoomIndex].tilemap,
                [key]: {
                    ...newRealmData[this.currentRoomIndex].tilemap[key],
                    [layer]: tile
                }
            }
        }
        this.updateRealmData(newRealmData)
    }

    private removeTileFromRealmData = (x: number, y: number, layer: Layer) => {
        const key = `${x}, ${y}` as TilePoint
        const newRealmData = this.realmData
        delete newRealmData[this.currentRoomIndex].tilemap[key][layer]
        this.updateRealmData(newRealmData)
    }

    private updateRealmData = (newRealmData: RealmData) => {
        this.realmData = newRealmData
        this.needsToSave = true
    }

    private placePreviewTileAtMouse = (e: PIXI.FederatedPointerEvent) => {
        const position = e.getLocalPosition(this.app.stage)
        const tileCoordinates = this.convertScreenToTileCoordinates(position.x, position.y)

        this.placePreviewTileAtPosition(tileCoordinates.x, tileCoordinates.y)
    }

    private placePreviewTileAtPosition = (x: number, y: number) => {
        const previewSprite = sprites.getSprite(this.selectedPalette, this.selectedTile)
        const layer = sprites.getSpriteLayer(this.selectedPalette, this.selectedTile) as Layer
        const existingTile = this.getTileAtPosition(x, y, layer)

        // hide tiles it covers
        if (existingTile) {
            existingTile.visible = false
            this.hiddenTiles.push(existingTile)
        }

        previewSprite.x = x * 32
        previewSprite.y = y * 32
        this.layers[layer].addChild(previewSprite)
        this.previewTiles.push(previewSprite)
        this.sortObjectsByY()
    }

    private removePreviewTiles = () => {  
        for (const previewTile of this.previewTiles) {
            if (previewTile.parent) {
                previewTile.parent.removeChild(previewTile)
            }
        }
        this.previewTiles = []

        for (const hiddenTile of this.hiddenTiles) {
            hiddenTile.visible = true
        }
        this.hiddenTiles = []
    }

    private tileTool = () => {
        this.app.stage.on('pointerup', (e: PIXI.FederatedPointerEvent) => {
            if (this.toolMode === 'Tile') {
                this.app.stage.off('pointermove', this.placeTileOnMousePosition)
                this.onTileDragEnd(e)
            } 
        })

        this.app.stage.on('pointerupoutside', (e: PIXI.FederatedPointerEvent) => {
            if (this.toolMode === 'Tile') {
                this.app.stage.off('pointermove', this.placeTileOnMousePosition)
                this.onTileDragEnd(e)
            } 
        })

        this.app.stage.on('pointerleave', (e: PIXI.FederatedPointerEvent) => {
            if (this.toolMode === 'Tile') {
                this.removePreviewTiles()
            }
        })

        this.app.stage.on('pointerdown', (e: PIXI.FederatedPointerEvent) => {
            if (this.toolMode === 'Tile') {
                if (this.tileMode === 'Single') {
                    // if single mode, do this
                    this.placeTileOnMousePosition(e)
                    this.app.stage.on('pointermove', this.placeTileOnMousePosition)
                } else if (this.tileMode === 'Rectangle') {
                    this.onTileDragStart(e)
                }
            }
        })

        this.app.stage.on('pointermove', (e: PIXI.FederatedPointerEvent) => {
            if (this.toolMode === 'Tile') {
                this.removePreviewTiles()
                this.placePreviewTileAtMouse(e)
            }
        })
    }

    private onTileDragStart = (e: PIXI.FederatedPointerEvent) => {
        this.dragging = true
        this.initialDragPosition.set(e.getLocalPosition(this.app.stage).x, e.getLocalPosition(this.app.stage).y)
        this.app.stage.on('pointermove', this.onTileDragMove)
    }

    private onTileDragMove = (e: PIXI.FederatedPointerEvent) => {
        const dragPosition = e.getLocalPosition(this.app.stage)
        const squares = this.getTileCoordinatesInRectangle(this.initialDragPosition, dragPosition)

        squares.forEach(square => {
            this.placePreviewTileAtPosition(square.x, square.y)
        })
    }

    private onTileDragEnd = (e: PIXI.FederatedPointerEvent) => {
        if (this.dragging) {
            this.app.stage.off('pointermove', this.onTileDragMove)
            this.dragging = false

            // get array of tile coordinates between initial and final position in rectangle
            const dragEndPosition = e.getLocalPosition(this.app.stage)
            const squares = this.getTileCoordinatesInRectangle(this.initialDragPosition, dragEndPosition)
            
            // place the tiles!
            squares.forEach(square => {
                this.placeTileAtPosition(square.x, square.y)
            })
        }
    }

    private getTileCoordinatesInRectangle = (start: Point, end: Point) => {
        const rectangleStart = this.convertScreenToTileCoordinates(start.x, start.y)
        const rectangleEnd = this.convertScreenToTileCoordinates(end.x, end.y)

        const xStart = Math.min(rectangleStart.x, rectangleEnd.x)
        const yStart = Math.min(rectangleStart.y, rectangleEnd.y)
        const xEnd = Math.max(rectangleStart.x, rectangleEnd.x)
        const yEnd = Math.max(rectangleStart.y, rectangleEnd.y)

        const squares: Point[] = [];
        for (let x = xStart; x <= xEnd; x++) {
            for (let y = yStart; y <= yEnd; y++) {
                squares.push({ x,y })
            }
        }

        return squares
    }


    private zoomInTool = () => {
        this.app.stage.on('pointerdown', (e: PIXI.FederatedPointerEvent) => {
            if (this.toolMode === 'ZoomIn') {
                this.zoomTo(this.scale + 0.2, e)
            }
        })
    }

    private zoomOutTool = () => {
        this.app.stage.on('pointerdown', (e: PIXI.FederatedPointerEvent) => {
            if (this.toolMode === 'ZoomOut') {
                this.zoomTo(this.scale - 0.2, e)
            }
        })
    }

    private zoomTo = (newScale: number, e: PIXI.FederatedPointerEvent) => {
        if (newScale < 0.6 || newScale > 3) return;

        const localPosition = e.getLocalPosition(this.app.stage)
        const globalPosition = e.global

        // Calculate new position to center zoom on the mouse pointer
        const newPositionX = globalPosition.x - (localPosition.x * newScale) 
        const newPositionY = globalPosition.y - (localPosition.y * newScale) 

        this.app.stage.position.x = newPositionX
        this.app.stage.position.y = newPositionY

        this.setScale(newScale)
    }

    private setScale(newScale: number) {
        this.scale = newScale
        this.app.stage.scale.set(this.scale)
        this.matchGridLinesToStage()
        this.resizeEvent()
    }

    private matchGridLinesToStage = () => {
        this.gridLines.position.x = -this.app.stage.position.x * (1 / this.scale)
        this.gridLines.position.y = -this.app.stage.position.y * (1 / this.scale)
        this.gridLines.tilePosition.x = this.app.stage.position.x * (1 / this.scale)
        this.gridLines.tilePosition.y = this.app.stage.position.y * (1 / this.scale)
    }

    private handTool = () => {
        this.app.stage.on('pointerup', (e: PIXI.FederatedPointerEvent) => {
            if (this.toolMode === 'Hand') {
                this.onHandDragEnd(e)
            }
        })

        this.app.stage.on('pointerupoutside', (e: PIXI.FederatedPointerEvent) => {
            if (this.toolMode === 'Hand') {
                this.onHandDragEnd(e)
            }
        })

        this.app.stage.on('pointerdown', (e: PIXI.FederatedPointerEvent) => {
            if (this.toolMode === 'Hand') {
                this.onHandDragStart(e)
            }
        })
    }

    private onHandDragMove = (e: PIXI.FederatedPointerEvent) => {
        const diffX = e.getLocalPosition(this.app.stage).x - this.initialDragPosition.x
        const diffY = e.getLocalPosition(this.app.stage).y - this.initialDragPosition.y
        this.app.stage.position.x += diffX 
        this.app.stage.position.y += diffY 

        this.matchGridLinesToStage()
        this.matchHitAreaToGridLines()
    }

    private onHandDragStart = (e: PIXI.FederatedPointerEvent) => {
        this.dragging = true
        this.initialDragPosition.set(e.getLocalPosition(this.app.stage).x, e.getLocalPosition(this.app.stage).y)
        this.app.stage.on('pointermove', this.onHandDragMove)
    }

    private onHandDragEnd = (e: PIXI.FederatedPointerEvent) => {
        if (this.dragging) {
            this.app.stage.off('pointermove', this.onHandDragMove)
            this.dragging = false
        }
    }

    private updateCoordinates = () => {
        this.app.stage.on('pointermove', (e: PIXI.FederatedPointerEvent) => {
            const position = e.getLocalPosition(this.app.stage)
            const convertedPosition = this.convertScreenToTileCoordinates(position.x, position.y)
            this.currentCoordinates = convertedPosition

            if (this.currentCoordinates.x !== this.lastErasedCoordinates.x || this.currentCoordinates.y !== this.lastErasedCoordinates.y) {
                this.canErase = true
            }

            signal.emit('coordinates', this.currentCoordinates)
        })
    }

    private onBeginSave = () => {
        signal.emit('save', this.realmData)
    }

    private onBeforeUnload = (e: BeforeUnloadEvent) => {
        if (this.needsToSave) {
            const message = 'Your changes may not be saved.'
            e.returnValue = message
            return message
        }
    }

    private setUpBeforeUnload = () => {
        window.addEventListener('beforeunload', this.onBeforeUnload)
    }

    private onCreateRoom = () => {
        const newRoom: Room = {
            name: 'Room ' + (this.realmData.length + 1),
            tilemap: {}
        }
        const newRealmData = this.realmData
        newRealmData.push(newRoom)
        this.updateRealmData(newRealmData)
        signal.emit('newRoom', newRoom.name)

        this.changeRoom(this.realmData.length - 1)
    }

    private changeRoom = async (index: number) => {
        signal.emit('loadingRoom')
        this.currentRoomIndex = index
        await this.loadRoomSprites(this.currentRoomIndex)
        this.app.stage.position.set(0, 0)
        this.setScale(1)
        signal.emit('roomChanged', this.currentRoomIndex)
    }

    private onDeleteRoom = async (index: number) => {
        // disable delete if only one room
        if (this.realmData.length === 1) return

        const newRealmData = this.realmData
        newRealmData.splice(index, 1)
        this.updateRealmData(newRealmData)

        if (this.currentRoomIndex === index) {
            await this.changeRoom(0)
        } else if (this.currentRoomIndex > index) {
            this.currentRoomIndex -= 1
        }

        signal.emit('roomDeleted', { deletedIndex: index, newIndex: this.currentRoomIndex })
    }

    private onChangeRoomName = ({ index, newName }: { index: number, newName: string }) => {
        const newRealmData = this.realmData
        newRealmData[index].name = newName
        this.updateRealmData(newRealmData)
        signal.emit('roomNameChanged', { index, newName })
    }
    
    private onSaved = () => {
        this.needsToSave = false
    }

    public destroy() {
        signal.off('selectTool', this.onSelectTool)
        signal.off('tileSelected', this.onSelectTile)
        signal.off('beginSave', this.onBeginSave)
        signal.off('saved', this.onSaved)
        signal.off('createRoom', this.onCreateRoom)
        signal.off('changeRoom', this.changeRoom)
        signal.off('deleteRoom', this.onDeleteRoom)
        signal.off('changeRoomName', this.onChangeRoomName)
        signal.off('selectTileMode', this.onSelectTileMode)
        window.removeEventListener('beforeunload', this.onBeforeUnload)

        super.destroy()
    }
}