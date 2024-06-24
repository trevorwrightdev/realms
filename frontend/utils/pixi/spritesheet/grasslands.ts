import { SpriteSheetTile } from './spritesheet'
import { SpriteSheetData } from './SpriteSheetData'

const width = 1024
const height = 1024
const url = '/sprites/spritesheets/grasslands.png'
const sprites: SpriteSheetTile[] = [
    { name: 'iight_green_flower_1', x: 384, y: 0, width: 32, height: 32, layer: 'above_floor' },
    { name: 'iight_green_flower_2', x: 384, y: 32, width: 32, height: 32, layer: 'above_floor' },
    { name: 'iight_green_flower_3', x: 384, y: 64, width: 32, height: 32, layer: 'above_floor' },
    { name: 'iight_green_flower_4', x: 384, y: 96, width: 32, height: 32, layer: 'above_floor' },
    { name: 'iight_green_flower_5', x: 384, y: 128, width: 32, height: 32, layer: 'above_floor' },
    { name: 'iight_green_flower_6', x: 384, y: 160, width: 32, height: 32, layer: 'above_floor' },

    { name: 'dark_green_flower_1', x: 416, y: 0, width: 32, height: 32, layer: 'above_floor' },
    { name: 'dark_green_flower_2', x: 448, y: 0, width: 32, height: 32, layer: 'above_floor' },
    { name: 'dark_green_flower_3', x: 480, y: 0, width: 32, height: 32, layer: 'above_floor' },
    { name: 'dark_green_flower_4', x: 480, y: 32, width: 32, height: 32, layer: 'above_floor' },
    { name: 'dark_green_flower_5', x: 448, y: 32, width: 32, height: 32, layer: 'above_floor' },
    { name: 'dark_green_flower_6', x: 416, y: 32, width: 32, height: 32, layer: 'above_floor' },

    { name: 'vibrant_green_flower_1', x: 416, y: 64, width: 32, height: 32, layer: 'above_floor' },
    { name: 'vibrant_green_flower_2', x: 448, y: 64, width: 32, height: 32, layer: 'above_floor' },
    { name: 'vibrant_green_flower_3', x: 480, y: 64, width: 32, height: 32, layer: 'above_floor' },
    { name: 'vibrant_green_flower_4', x: 480, y: 96, width: 32, height: 32, layer: 'above_floor' },
    { name: 'vibrant_green_flower_5', x: 448, y: 96, width: 32, height: 32, layer: 'above_floor' },
    { name: 'vibrant_green_flower_6', x: 416, y: 96, width: 32, height: 32, layer: 'above_floor' },

    { name: 'blue_flower_1', x: 416, y: 128, width: 32, height: 32, layer: 'above_floor' },
    { name: 'blue_flower_2', x: 448, y: 128, width: 32, height: 32, layer: 'above_floor' },
    { name: 'blue_flower_3', x: 480, y: 128, width: 32, height: 32, layer: 'above_floor' },
    { name: 'blue_flower_4', x: 480, y: 160, width: 32, height: 32, layer: 'above_floor' },
    { name: 'blue_flower_5', x: 448, y: 160, width: 32, height: 32, layer: 'above_floor' },
    { name: 'blue_flower_6', x: 416, y: 160, width: 32, height: 32, layer: 'above_floor' },

    { name: 'foliage_1', x: 0, y: 32, width: 32, height: 32, layer: 'above_floor' },
    { name: 'foliage_2', x: 32, y: 32, width: 32, height: 32, layer: 'above_floor' },
    { name: 'foliage_3', x: 64, y: 32, width: 32, height: 32, layer: 'above_floor' },
    { name: 'foliage_4', x: 96, y: 32, width: 32, height: 32, layer: 'above_floor' },
    { name: 'foliage_5', x: 128, y: 32, width: 32, height: 32, layer: 'above_floor' },
    { name: 'foliage_6', x: 160, y: 32, width: 32, height: 32, layer: 'above_floor' },
    { name: 'foliage_7', x: 192, y: 32, width: 32, height: 32, layer: 'above_floor' },
    { name: 'foliage_8', x: 224, y: 32, width: 32, height: 32, layer: 'above_floor' },
    { name: 'foliage_9', x: 256, y: 32, width: 32, height: 32, layer: 'above_floor' },
    { name: 'foliage_10', x: 288, y: 32, width: 32, height: 32, layer: 'above_floor' },
    { name: 'foliage_11', x: 320, y: 32, width: 32, height: 32, layer: 'above_floor' },
    { name: 'foliage_12', x: 352, y: 32, width: 32, height: 32, layer: 'above_floor' },

    { name: 'foliage_13', x: 0, y: 64, width: 32, height: 32, layer: 'above_floor' },
    { name: 'foliage_14', x: 32, y: 64, width: 32, height: 32, layer: 'above_floor' },
    { name: 'foliage_15', x: 64, y: 64, width: 32, height: 32, layer: 'above_floor' },
    { name: 'foliage_16', x: 96, y: 64, width: 32, height: 32, layer: 'above_floor' },
    { name: 'foliage_17', x: 128, y: 64, width: 32, height: 32, layer: 'above_floor' },
    { name: 'foliage_18', x: 160, y: 64, width: 32, height: 32, layer: 'above_floor' },
    { name: 'foliage_19', x: 192, y: 64, width: 32, height: 32, layer: 'above_floor' },
    { name: 'foliage_20', x: 224, y: 64, width: 32, height: 32, layer: 'above_floor' },
    { name: 'foliage_21', x: 256, y: 64, width: 32, height: 32, layer: 'above_floor' },
    { name: 'foliage_22', x: 288, y: 64, width: 32, height: 32, layer: 'above_floor' },
    { name: 'foliage_23', x: 320, y: 64, width: 32, height: 32, layer: 'above_floor' },
    { name: 'foliage_24', x: 352, y: 64, width: 32, height: 32, layer: 'above_floor' },

    { name: 'foliage_25', x: 0, y: 96, width: 32, height: 32, layer: 'above_floor' },
    { name: 'foliage_26', x: 32, y: 96, width: 32, height: 32, layer: 'above_floor' },
    { name: 'foliage_27', x: 64, y: 96, width: 32, height: 32, layer: 'above_floor' },
    { name: 'foliage_28', x: 96, y: 96, width: 32, height: 32, layer: 'above_floor' },
    { name: 'foliage_29', x: 128, y: 96, width: 32, height: 32, layer: 'above_floor' },
    { name: 'foliage_30', x: 160, y: 96, width: 32, height: 32, layer: 'above_floor' },
    { name: 'foliage_31', x: 192, y: 96, width: 32, height: 32, layer: 'above_floor' },
    { name: 'foliage_32', x: 224, y: 96, width: 32, height: 32, layer: 'above_floor' },
    { name: 'foliage_33', x: 256, y: 96, width: 32, height: 32, layer: 'above_floor' },
    { name: 'foliage_34', x: 288, y: 96, width: 32, height: 32, layer: 'above_floor' },
    { name: 'foliage_35', x: 320, y: 96, width: 32, height: 32, layer: 'above_floor' },
    { name: 'foliage_36', x: 352, y: 96, width: 32, height: 32, layer: 'above_floor' },

    { name: 'foliage_37', x: 0, y: 128, width: 32, height: 32, layer: 'above_floor' },
    { name: 'foliage_38', x: 32, y: 128, width: 32, height: 32, layer: 'above_floor' },
    { name: 'foliage_39', x: 64, y: 128, width: 32, height: 32, layer: 'above_floor' },
    { name: 'foliage_40', x: 96, y: 128, width: 32, height: 32, layer: 'above_floor' },
    { name: 'foliage_41', x: 128, y: 128, width: 32, height: 32, layer: 'above_floor' },
    { name: 'foliage_42', x: 160, y: 128, width: 32, height: 32, layer: 'above_floor' },
    { name: 'foliage_43', x: 192, y: 128, width: 32, height: 32, layer: 'above_floor' },
    { name: 'foliage_44', x: 224, y: 128, width: 32, height: 32, layer: 'above_floor' },
    { name: 'foliage_45', x: 256, y: 128, width: 32, height: 32, layer: 'above_floor' },
    { name: 'foliage_46', x: 288, y: 128, width: 32, height: 32, layer: 'above_floor' },
    { name: 'foliage_47', x: 320, y: 128, width: 32, height: 32, layer: 'above_floor' },
    { name: 'foliage_48', x: 352, y: 128, width: 32, height: 32, layer: 'above_floor' },
]

const grasslandsSpriteSheetData = new SpriteSheetData(width, height, url, sprites)

export { grasslandsSpriteSheetData }