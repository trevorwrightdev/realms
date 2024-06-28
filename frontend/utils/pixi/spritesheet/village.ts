import { SpriteSheetTile } from './spritesheet'
import { SpriteSheetData } from './SpriteSheetData'

const width = 1024
const height = 1024
const url = '/sprites/spritesheets/village.png'
const sprites: SpriteSheetTile[] = [
    { name: 'light_stone_tile_1', x: 0, y: 32, width: 32, height: 32, layer: 'above_floor' },
    { name: 'light_stone_tile_2', x: 32, y: 32, width: 32, height: 32, layer: 'above_floor' },
    { name: 'light_stone_tile_3', x: 64, y: 32, width: 32, height: 32, layer: 'above_floor' },
    { name: 'light_stone_tile_4', x: 96, y: 32, width: 32, height: 32, layer: 'above_floor' },
    { name: 'light_stone_tile_5', x: 128, y: 32, width: 32, height: 32, layer: 'above_floor' },
    { name: 'light_stone_tile_6', x: 160, y: 32, width: 32, height: 32, layer: 'above_floor' },
    { name: 'light_stone_tile_7', x: 192, y: 32, width: 32, height: 32, layer: 'above_floor' },
    { name: 'light_stone_tile_8', x: 224, y: 32, width: 32, height: 32, layer: 'above_floor' },
    { name: 'light_stone_tile_9', x: 256, y: 32, width: 32, height: 32, layer: 'above_floor' },

    { name: 'dark_stone_tile_1', x: 0, y: 64, width: 32, height: 32, layer: 'above_floor' },
    { name: 'dark_stone_tile_2', x: 32, y: 64, width: 32, height: 32, layer: 'above_floor' },
    { name: 'dark_stone_tile_3', x: 64, y: 64, width: 32, height: 32, layer: 'above_floor' },
    { name: 'dark_stone_tile_4', x: 96, y: 64, width: 32, height: 32, layer: 'above_floor' },
    { name: 'dark_stone_tile_5', x: 128, y: 64, width: 32, height: 32, layer: 'above_floor' },
    { name: 'dark_stone_tile_6', x: 160, y: 64, width: 32, height: 32, layer: 'above_floor' },
    { name: 'dark_stone_tile_7', x: 192, y: 64, width: 32, height: 32, layer: 'above_floor' },
    { name: 'dark_stone_tile_8', x: 224, y: 64, width: 32, height: 32, layer: 'above_floor' },
    { name: 'dark_stone_tile_9', x: 256, y: 64, width: 32, height: 32, layer: 'above_floor' },

    { name: 'step_tiles_2', x: 352, y: 0, width: 32, height: 32, layer: 'above_floor' },
    { name: 'step_tiles_3', x: 384, y: 0, width: 32, height: 32, layer: 'above_floor' },
    { name: 'step_tiles_4', x: 416, y: 0, width: 32, height: 32, layer: 'above_floor' },
    { name: 'step_tiles_5', x: 448, y: 0, width: 32, height: 32, layer: 'above_floor' },

    { name: 'step_tiles_7', x: 320, y: 32, width: 32, height: 32, layer: 'above_floor' },
    { name: 'step_tiles_8', x: 352, y: 32, width: 32, height: 32, layer: 'above_floor' },
    { name: 'step_tiles_9', x: 384, y: 32, width: 32, height: 32, layer: 'above_floor' },
    { name: 'step_tiles_10', x: 416, y: 32, width: 32, height: 32, layer: 'above_floor' },
    { name: 'step_tiles_11', x: 448, y: 32, width: 32, height: 32, layer: 'above_floor' },
    { name: 'step_tiles_12', x: 480, y: 32, width: 32, height: 32, layer: 'above_floor' },

    { name: 'step_tiles_13', x: 320, y: 64, width: 32, height: 32, layer: 'above_floor' },
    { name: 'step_tiles_14', x: 352, y: 64, width: 32, height: 32, layer: 'above_floor' },
    { name: 'step_tiles_15', x: 384, y: 64, width: 32, height: 32, layer: 'above_floor' },
    { name: 'step_tiles_16', x: 416, y: 64, width: 32, height: 32, layer: 'above_floor' },
    { name: 'step_tiles_17', x: 448, y: 64, width: 32, height: 32, layer: 'above_floor' },
    { name: 'step_tiles_18', x: 480, y: 64, width: 32, height: 32, layer: 'above_floor' },

    { name: 'step_tiles_20', x: 352, y: 96, width: 32, height: 32, layer: 'above_floor' },
    { name: 'step_tiles_21', x: 384, y: 96, width: 32, height: 32, layer: 'above_floor' },
    { name: 'step_tiles_22', x: 416, y: 96, width: 32, height: 32, layer: 'above_floor' },
    { name: 'step_tiles_23', x: 448, y: 96, width: 32, height: 32, layer: 'above_floor' },
    { name: 'empty', x: 0, y: 0, width: 0, height: 0, layer: 'above_floor' },

    { name: 'empty', x: 0, y: 0, width: 0, height: 0, layer: 'above_floor' },
    { name: 'chair_down', x: 32, y: 96, width: 32, height: 32, layer: 'above_floor' },
    { name: 'empty', x: 0, y: 0, width: 0, height: 0, layer: 'above_floor' },
    { name: 'chair_right', x: 0, y: 128, width: 32, height: 32, layer: 'above_floor'},
    { name: 'table', x: 32, y: 128, width: 32, height: 32, layer: 'above_floor', colliders: [{ x: 0, y: 0 }] },
    { name: 'chair_left', x: 64, y: 128, width: 32, height: 32, layer: 'above_floor' },
    { name: 'empty', x: 0, y: 0, width: 0, height: 0, layer: 'above_floor' },
    { name: 'chair_up', x: 32, y: 160, width: 32, height: 32, layer: 'above_floor' },
    { name: 'empty', x: 0, y: 0, width: 0, height: 0, layer: 'above_floor' },

    { name: 'other_chair_down', x: 96, y: 96, width: 32, height: 32, layer: 'above_floor' },
    { name: 'other_chair_up', x: 96, y: 160, width: 32, height: 32, layer: 'above_floor' },
    { name: 'small_stool', x: 128, y: 128, width: 32, height: 32, layer: 'above_floor' },

    { name: 'bench_right_top', x: 0, y: 192, width: 32, height: 32, layer: 'above_floor' },
    { name: 'bench_left_top', x: 32, y: 192, width: 32, height: 32, layer: 'above_floor' },
    { name: 'empty', x: 0, y: 0, width: 0, height: 0, layer: 'above_floor' },
    { name: 'bench_right_bottom', x: 0, y: 224, width: 32, height: 32, layer: 'above_floor' },
    { name: 'bench_left_bottom', x: 32, y: 224, width: 32, height: 32, layer: 'above_floor' },
    { name: 'empty', x: 0, y: 0, width: 0, height: 0, layer: 'above_floor' },
    { name: 'hole_bench_left', x: 64, y: 192, width: 32, height: 32, layer: 'above_floor' },
    { name: 'hole_bench_right', x: 96, y: 192, width: 32, height: 32, layer: 'above_floor' },
    { name: 'empty', x: 0, y: 0, width: 0, height: 0, layer: 'above_floor' },
    { name: 'hole_bench_left_up', x: 128, y: 192, width: 32, height: 32, layer: 'above_floor' },
    { name: 'hole_bench_right_up', x: 160, y: 192, width: 32, height: 32, layer: 'above_floor' },
    { name: 'empty', x: 0, y: 0, width: 0, height: 0, layer: 'above_floor' },
    { name: 'bench_left', x: 64, y: 224, width: 32, height: 32, layer: 'above_floor' },
    { name: 'bench_right', x: 96, y: 224, width: 32, height: 32, layer: 'above_floor' },
    { name: 'empty', x: 0, y: 0, width: 0, height: 0, layer: 'above_floor' },
    { name: 'bench_left_up', x: 128, y: 224, width: 32, height: 32, layer: 'above_floor' },
    { name: 'bench_right_up', x: 160, y: 224, width: 32, height: 32, layer: 'above_floor' },

    { name: 'sign_1', x: 224, y: 96, width: 32, height: 64, layer: 'object', colliders: [{ x: 0, y: 1 }] },
    { name: 'sign_2', x: 256, y: 96, width: 32, height: 64, layer: 'object', colliders: [{ x: 0, y: 1 }] },
    { name: 'sign_3', x: 288, y: 96, width: 32, height: 64, layer: 'object', colliders: [{ x: 0, y: 1 }] },
    { name: 'sign_4', x: 320, y: 96, width: 32, height: 64, layer: 'object', colliders: [{ x: 0, y: 1 }] },

    { name: 'mailbox', x: 224, y: 160, width: 32, height: 32, layer: 'object', colliders: [{ x: 0, y: 0 }] },
    { name: 'crate', x: 256, y: 160, width: 32, height: 32, layer: 'object', colliders: [{ x: 0, y: 0 }] },
    { name: 'small_crate', x: 256, y: 192, width: 32, height: 32, layer: 'object', colliders: [{ x: 0, y: 0 }] },
    { name: 'box', x: 288, y: 160, width: 32, height: 32, layer: 'object', colliders: [{ x: 0, y: 0 }] },
    { name: 'empty_box', x: 320, y: 160, width: 32, height: 32, layer: 'object', colliders: [{ x: 0, y: 0 }] },
    { name: 'small_empty_box', x: 320, y: 192, width: 32, height: 32, layer: 'object', colliders: [{ x: 0, y: 0 }] },
]

const villageSpriteSheetData = new SpriteSheetData(width, height, url, sprites)

export { villageSpriteSheetData }