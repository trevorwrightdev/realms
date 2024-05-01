import * as PIXI from 'pixi.js'
import { App } from './App'
import signal from '../signal'
import { Layer, TilemapSprites, Tool, TilePoint } from './types'
import { SheetName, sprites } from './spritesheet/spritesheet'

export class EditorApp extends App {
    private gridLineContainer: PIXI.Container = new PIXI.Container()
    private gridLines: PIXI.TilingSprite = new PIXI.TilingSprite()
    private toolMode: Tool = 'None'
    private dragging: boolean = false
    private initialDragPosition: PIXI.Point = new PIXI.Point()
    private scale: number = 1
    protected isMouseInScreen: boolean = false

    private layers: { [key in Layer]: PIXI.Container } = {
        floor: new PIXI.Container(),
        transition: new PIXI.Container(),
        object: new PIXI.Container(),
    }

    private selectedPalette: SheetName = 'city'
    private selectedTile: string = ''   
    private tilemapSprites: TilemapSprites = {}

    public async init() {
        await super.init()
        this.app.stage.addChild(this.layers.floor)
        this.app.stage.addChild(this.layers.transition)
        this.app.stage.addChild(this.layers.object)

        this.app.stage.addChild(this.gridLineContainer)

        await this.loadAssets()
        this.drawGridLines()

        this.setUpUIListeners()
        this.setUpMouseListener()

        this.setUpInteraction()
    }

    private loadAssets = async () => {
        await PIXI.Assets.load('/sprites/tile-outline.png')
        await PIXI.Assets.load('/sprites/test-tile.png')
        await PIXI.Assets.load('/sprites/city/FDR_City.png')

        await sprites.load('city')
    }

    private drawGridLines = () => {
        this.gridLines = new PIXI.TilingSprite({
            texture: PIXI.Texture.from('/sprites/tile-outline.png'),
            width: this.app.screen.width,
            height: this.app.screen.height,
            alpha: 0.1,
        })

        this.gridLineContainer.addChild(this.gridLines)
        this.app.renderer.on('resize', this.resizeGridLines)
    }

    private resizeGridLines = () => {
        this.gridLines.width = this.app.screen.width * (1 / this.scale)
        this.gridLines.height = this.app.screen.height * (1 / this.scale)
    }

    private setUpUIListeners = () => {
        signal.on('selectTool', this.onSelectTool)

        signal.on('tileSelected', this.onSelectTile)
    }

    private onSelectTile = (tile: string) => {
        this.selectedTile = tile
        this.toolMode = 'Tile'
    }

    private onSelectTool = (tool: Tool) => {
        this.toolMode = tool
    }

    private setUpInteraction = () => {
        this.app.stage.interactive = true
        this.handTool()
        this.zoomInTool()
        this.zoomOutTool()
        this.tileTool()
        this.sendCoordinates()
    }

    private placeTile = (e: PIXI.FederatedPointerEvent) => {
        const position = e.getLocalPosition(this.app.stage)
        const convertedPosition = this.convertToTileCoordinates(position.x, position.y)
        
        const tile = PIXI.Sprite.from(sprites.getSprite(this.selectedPalette, this.selectedTile))
        tile.x = convertedPosition.x * 32
        tile.y = convertedPosition.y * 32

        const layer = sprites.getSpriteLayer(this.selectedPalette, this.selectedTile) as Layer

        this.setTileAtPosition(convertedPosition.x, convertedPosition.y, layer, tile)
    }

    private getTileAtPosition = (x: number, y: number, layer: Layer) => {
        const key = `${x}, ${y}` as TilePoint
        return this.tilemapSprites[key]?.[layer]
    }

    private setTileAtPosition = (x: number, y: number, layer: Layer, tile: PIXI.Sprite) => {
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

        this.tilemapJSON[key] = {
            ...this.tilemapJSON[key],
            [layer]: this.selectedPalette + '-' + this.selectedTile
        }
    }

    private tileTool = () => {
        this.app.stage.on('pointerup', (e: PIXI.FederatedPointerEvent) => {
            if (this.toolMode === 'Tile') {
                this.app.stage.off('pointermove', this.placeTile)
            }
        })

        this.app.stage.on('pointerupoutside', (e: PIXI.FederatedPointerEvent) => {
            if (this.toolMode === 'Tile') {
                this.app.stage.off('pointermove', this.placeTile)
            }
        })

        this.app.stage.on('pointerdown', (e: PIXI.FederatedPointerEvent) => {
            if (this.toolMode === 'Tile') {
                this.placeTile(e)
                this.app.stage.on('pointermove', this.placeTile)
            }
        })
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
        this.resizeGridLines()
    }

    private matchGridLinesToStage = () => {
        this.gridLineContainer.position.x = -this.app.stage.position.x * (1 / this.scale)
        this.gridLineContainer.position.y = -this.app.stage.position.y * (1 / this.scale)
        this.gridLines.tilePosition.x = this.app.stage.position.x * (1 / this.scale)
        this.gridLines.tilePosition.y = this.app.stage.position.y * (1 / this.scale)
    }

    private handTool = () => {
        this.app.stage.on('pointerup', (e: PIXI.FederatedPointerEvent) => {
            if (this.toolMode === 'Hand') {
                this.onDragEnd(e)
            }
        })

        this.app.stage.on('pointerupoutside', (e: PIXI.FederatedPointerEvent) => {
            if (this.toolMode === 'Hand') {
                this.onDragEnd(e)
            }
        })

        this.app.stage.on('pointerdown', (e: PIXI.FederatedPointerEvent) => {
            if (this.toolMode === 'Hand') {
                this.onDragStart(e)
            }
        })
    }

    private onDragMove = (e: PIXI.FederatedPointerEvent) => {
        const diffX = e.getLocalPosition(this.app.stage).x - this.initialDragPosition.x
        const diffY = e.getLocalPosition(this.app.stage).y - this.initialDragPosition.y
        this.app.stage.position.x += diffX 
        this.app.stage.position.y += diffY 

        this.matchGridLinesToStage()
    }

    private onDragStart = (e: PIXI.FederatedPointerEvent) => {
        this.dragging = true
        this.initialDragPosition.set(e.getLocalPosition(this.app.stage).x, e.getLocalPosition(this.app.stage).y)
        this.app.stage.on('pointermove', this.onDragMove)
    }

    private onDragEnd = (e: PIXI.FederatedPointerEvent) => {
        if (this.dragging) {
            this.app.stage.off('pointermove', this.onDragMove)
            this.dragging = false
        }
    }

    private sendCoordinates = () => {
        this.app.stage.on('pointermove', (e: PIXI.FederatedPointerEvent) => {
            if (this.isMouseInScreen === false) return

            const position = e.getLocalPosition(this.app.stage)
            const convertedPosition = this.convertToTileCoordinates(position.x, position.y)
            signal.emit('coordinates', convertedPosition)
        })
    }

    private onMouseOver = (isOver: boolean) => {
        this.isMouseInScreen = isOver
    }

    private setUpMouseListener = () => {
        signal.on('mouseOver', this.onMouseOver)
    }

    public destroy() {
        signal.off('selectTool', this.onSelectTool)
        signal.off('mouseOver', this.onMouseOver)
        signal.off('tileSelected', this.onSelectTile)

        super.destroy()
    }
}