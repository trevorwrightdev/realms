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

    { name: 'pebbles_1', x: 0, y: 160, width: 32, height: 32, layer: 'above_floor' },
    { name: 'pebbles_2', x: 32, y: 160, width: 32, height: 32, layer: 'above_floor' },
    { name: 'pebbles_3', x: 64, y: 160, width: 32, height: 32, layer: 'above_floor' },
    { name: 'pebbles_4', x: 96, y: 160, width: 32, height: 32, layer: 'above_floor' },
    { name: 'pebbles_5', x: 128, y: 160, width: 32, height: 32, layer: 'above_floor' },
    { name: 'pebbles_6', x: 160, y: 160, width: 32, height: 32, layer: 'above_floor' },
    { name: 'pebbles_7', x: 192, y: 160, width: 32, height: 32, layer: 'above_floor' },
    { name: 'pebbles_8', x: 224, y: 160, width: 32, height: 32, layer: 'above_floor' },
    { name: 'pebbles_9', x: 256, y: 160, width: 32, height: 32, layer: 'above_floor' },
    { name: 'pebbles_10', x: 288, y: 160, width: 32, height: 32, layer: 'above_floor' },
    { name: 'pebbles_11', x: 320, y: 160, width: 32, height: 32, layer: 'above_floor' },
    { name: 'pebbles_12', x: 352, y: 160, width: 32, height: 32, layer: 'above_floor' },

    { name: 'stone_1', x: 0, y: 192, width: 32, height: 32, layer: 'above_floor', colliders: [{ x: 0, y: 0 }] },
    { name: 'stone_2', x: 32, y: 192, width: 32, height: 32, layer: 'above_floor', colliders: [{ x: 0, y: 0 }] },
    { name: 'stone_3', x: 64, y: 192, width: 32, height: 32, layer: 'above_floor', colliders: [{ x: 0, y: 0 }] },
    { name: 'stone_4', x: 0, y: 224, width: 32, height: 32, layer: 'above_floor', colliders: [{ x: 0, y: 0 }] },
    { name: 'stone_5', x: 32, y: 224, width: 32, height: 32, layer: 'above_floor', colliders: [{ x: 0, y: 0 }] },
    { name: 'stone_6', x: 64, y: 224, width: 32, height: 32, layer: 'above_floor', colliders: [{ x: 0, y: 0 }] },

    { name: 'stone_inverted_1', x: 160, y: 192, width: 32, height: 32, layer: 'above_floor', colliders: [{ x: 0, y: 0 }] },
    { name: 'stone_inverted_2', x: 192, y: 192, width: 32, height: 32, layer: 'above_floor', colliders: [{ x: 0, y: 0 }] },
    { name: 'stone_inverted_3', x: 224, y: 192, width: 32, height: 32, layer: 'above_floor', colliders: [{ x: 0, y: 0 }] },
    { name: 'stone_inverted_4', x: 160, y: 224, width: 32, height: 32, layer: 'above_floor', colliders: [{ x: 0, y: 0 }] },
    { name: 'stone_inverted_5', x: 192, y: 224, width: 32, height: 32, layer: 'above_floor', colliders: [{ x: 0, y: 0 }] },
    { name: 'stone_inverted_6', x: 224, y: 224, width: 32, height: 32, layer: 'above_floor', colliders: [{ x: 0, y: 0 }] },

    { name: 'big_wood_table', x: 64, y: 448, width: 64, height: 64, layer: 'above_floor', colliders: [{ x: 0, y: 1 }, { x: 1, y: 1}, { x: 0, y: 0 }, { x: 1, y: 0 }] },
    { name: 'big_wood_stool', x: 0, y: 480, width: 32, height: 32, layer: 'above_floor' },
    { name: 'small_wood_stool', x: 32, y: 480, width: 32, height: 32, layer: 'above_floor' },
    { name: 'long_wood_table', x: 128, y: 448, width: 32, height: 64, layer: 'above_floor', colliders: [{ x: 0, y: 0 }, { x: 0, y: 1 }] },
    { name: 'small_wood_table', x: 128, y: 416, width: 32, height: 32, layer: 'above_floor' },

    { name: 'stone_wall_tl', x: 416, y: 192, width: 32, height: 32, layer: 'object', colliders: [{ x: 0, y: 0 }] },
    { name: 'stone_wall_top', x: 448, y: 192, width: 32, height: 32, layer: 'object', colliders: [{ x: 0, y: 0 }]  },
    { name: 'stone_wall_tr', x: 480, y: 192, width: 32, height: 32, layer: 'object', colliders: [{ x: 0, y: 0 }]  },
    { name: 'stone_wall_left', x: 416, y: 224, width: 32, height: 32, layer: 'object', colliders: [{ x: 0, y: 0 }]  },
    { name: 'empty', x: 0, y: 0, width: 0, height: 0, layer: 'object' },
    { name: 'stone_wall_right', x: 480, y: 224, width: 32, height: 32, layer: 'object', colliders: [{ x: 0, y: 0 }]  },
    { name: 'stone_wall_bl', x: 416, y: 256, width: 32, height: 32, layer: 'object', colliders: [{ x: 0, y: 0 }]  },
    { name: 'stone_wall_bottom', x: 448, y: 256, width: 32, height: 32, layer: 'object', colliders: [{ x: 0, y: 0 }]  },
    { name: 'stone_wall_br', x: 480, y: 256, width: 32, height: 32, layer: 'object', colliders: [{ x: 0, y: 0 }]  },

    { name: 'stone_wall_end_right', x: 352, y: 192, width: 32, height: 32, layer: 'object', colliders: [{ x: 0, y: 0 }] },
    { name: 'stone_wall_end_bottom', x: 384, y: 192, width: 32, height: 32, layer: 'object', colliders: [{ x: 0, y: 0 }] },
    { name: 'empty', x: 0, y: 0, width: 0, height: 0, layer: 'object' },
    { name: 'stone_wall_end_left', x: 352, y: 224, width: 32, height: 32, layer: 'object', colliders: [{ x: 0, y: 0 }] },
    { name: 'stone_wall_end_top', x: 384, y: 224, width: 32, height: 32, layer: 'object', colliders: [{ x: 0, y: 0 }] },
    { name: 'empty', x: 0, y: 0, width: 0, height: 0, layer: 'object' },

    { name: 'stone_tall_1', x: 96, y: 192, width: 32, height: 64, layer: 'object', colliders: [{ x: 0, y: 1 }] },
    { name: 'stone_tall_2', x: 128, y: 192, width: 32, height: 64, layer: 'object', colliders: [{ x: 0, y: 1 }] },
    { name: 'empty', x: 0, y: 0, width: 0, height: 0, layer: 'object' },

    { name: 'stone_tall_inverted_1', x: 256, y: 192, width: 32, height: 64, layer: 'object', colliders: [{ x: 0, y: 1 }] },
    { name: 'stone_tall_inverted_2', x: 288, y: 192, width: 32, height: 64, layer: 'object', colliders: [{ x: 0, y: 1 }] },
    { name: 'empty', x: 0, y: 0, width: 0, height: 0, layer: 'object' },

    { name: 'big_rock_1', x: 0, y: 256, width: 64, height: 64, layer: 'object', colliders: [{ x: 0, y: 1 }, { x: 1, y: 1}] },
    { name: 'big_rock_2', x: 64, y: 256, width: 64, height: 64, layer: 'object', colliders: [{ x: 0, y: 1 }, { x: 1, y: 1}] },
    { name: 'big_rock_3', x: 128, y: 256, width: 64, height: 64, layer: 'object', colliders: [{ x: 0, y: 1 }, { x: 1, y: 1}] },
    { name: 'big_rock_4', x: 192, y: 256, width: 64, height: 64, layer: 'object', colliders: [{ x: 0, y: 1 }, { x: 1, y: 1}] },
    { name: 'big_rock_5', x: 256, y: 256, width: 64, height: 64, layer: 'object', colliders: [{ x: 0, y: 1 }, { x: 1, y: 1}, { x: 0, y: 0 }, { x: 1, y: 0 }] },
    { name: 'big_rock_6', x: 320, y: 256, width: 64, height: 64, layer: 'object', colliders: [{ x: 0, y: 1 }, { x: 1, y: 1}, { x: 0, y: 0 }, { x: 1, y: 0 }] },

    { name: 'fence_tl', x: 0, y: 320, width: 32, height: 32, layer: 'object', colliders: [{ x: 0, y: 0 }] },
    { name: 'fence_top', x: 32, y: 320, width: 32, height: 32, layer: 'object', colliders: [{ x: 0, y: 0 }] },
    { name: 'fence_tr', x: 64, y: 320, width: 32, height: 32, layer: 'object', colliders: [{ x: 0, y: 0 }] },
    { name: 'fence_left', x: 0, y: 352, width: 32, height: 32, layer: 'object', colliders: [{ x: 0, y: 0 }] },
    { name: 'empty', x: 0, y: 0, width: 0, height: 0, layer: 'object' },
    { name: 'fence_right', x: 64, y: 352, width: 32, height: 32, layer: 'object', colliders: [{ x: 0, y: 0 }] },
    { name: 'fence_bl', x: 0, y: 384, width: 32, height: 32, layer: 'object', colliders: [{ x: 0, y: 0 }] },
    { name: 'fence_bottom', x: 32, y: 384, width: 32, height: 32, layer: 'object', colliders: [{ x: 0, y: 0 }] },
    { name: 'fence_br', x: 64, y: 384, width: 32, height: 32, layer: 'object', colliders: [{ x: 0, y: 0 }] },
    { name: 'fence_end_right', x: 96, y: 320, width: 32, height: 32, layer: 'object', colliders: [{ x: 0, y: 0 }] },
    { name: 'fence_end_bottom', x: 128, y: 320, width: 32, height: 32, layer: 'object', colliders: [{ x: 0, y: 0 }] },
    { name: 'empty', x: 0, y: 0, width: 0, height: 0, layer: 'object' },
    { name: 'fence_end_left', x: 96, y: 352, width: 32, height: 32, layer: 'object', colliders: [{ x: 0, y: 0 }] },
    { name: 'fence_end_top', x: 128, y: 352, width: 32, height: 32, layer: 'object', colliders: [{ x: 0, y: 0 }] },
    { name: 'empty', x: 0, y: 0, width: 0, height: 0, layer: 'object' },

    { name: 'fence_open_right', x: 160, y: 320, width: 64, height: 32, layer: 'object', colliders: [{ x: 0, y: 0 }, { x: 1, y: 0 }] },
    { name: 'fence_open_left', x: 224, y: 320, width: 64, height: 32, layer: 'object', colliders: [{ x: 0, y: 0 }, { x: 1, y: 0 }] },
    { name: 'empty', x: 0, y: 0, width: 0, height: 0, layer: 'object' },

    { name: 'sign_1', x: 0, y: 416, width: 32, height: 32, layer: 'object', colliders: [{ x: 0, y: 0 }] },
    { name: 'sign_2', x: 32, y: 416, width: 32, height: 32, layer: 'object', colliders: [{ x: 0, y: 0 }] },
    { name: 'sign_3', x: 64, y: 416, width: 32, height: 32, layer: 'object', colliders: [{ x: 0, y: 0 }] },

    { name: 'arrow_sign_right', x: 0, y: 448, width: 32, height: 32, layer: 'object', colliders: [{ x: 0, y: 0 }] },
    { name: 'arrow_sign_left', x: 32, y: 448, width: 32, height: 32, layer: 'object', colliders: [{ x: 0, y: 0 }] },

    { name: 'basic_tree', x: 0, y: 928, width: 96, height: 96, layer: 'object', colliders: [{ x: 1, y: 2 }] },
    { name: 'basic_tree_bundle', x: 0, y: 512, width: 160, height: 160, layer: 'object', colliders: [
        { x: 1, y: 3 }, 
        { x: 2, y: 3 }, 
        { x: 3, y: 3 }, 
        { x: 2, y: 4 },
        { x: 1, y: 2 }, 
        { x: 2, y: 2 }, 
        { x: 3, y: 2 },
        { x: 2, y: 1 },
    ]},

    { name: 'light_basic_tree', x: 80, y: 928, width: 96, height: 96, layer: 'object', colliders: [{ x: 1, y: 2 }] },
    { name: 'light_basic_tree_bundle', x: 240, y: 512, width: 160, height: 160, layer: 'object', colliders: [
        { x: 1, y: 3 }, 
        { x: 2, y: 3 }, 
        { x: 3, y: 3 }, 
        { x: 2, y: 4 },
        { x: 1, y: 2 }, 
        { x: 2, y: 2 }, 
        { x: 3, y: 2 },
        { x: 2, y: 1 },
    ]},

    { name: 'short_basic_tree', x: 176, y: 912, width: 96, height: 96, layer: 'object', colliders: [{ x: 1, y: 2 }] },
    { name: 'short_basic_tree_bundle', x: 48, y: 720, width: 160, height: 160, layer: 'object', colliders: [
        { x: 1, y: 3 }, 
        { x: 2, y: 3 }, 
        { x: 3, y: 3 }, 
        { x: 2, y: 4 },
        { x: 1, y: 2 }, 
        { x: 2, y: 2 }, 
        { x: 3, y: 2 },
    ]},
    { name: 'short_light_basic_tree', x: 272, y: 912, width: 96, height: 96, layer: 'object', colliders: [{ x: 1, y: 2 }] },
    { name: 'short_light_basic_tree_bundle', x: 192, y: 720, width: 160, height: 160, layer: 'object', colliders: [
        { x: 1, y: 3 }, 
        { x: 2, y: 3 }, 
        { x: 3, y: 3 }, 
        { x: 2, y: 4 },
        { x: 1, y: 2 }, 
        { x: 2, y: 2 }, 
        { x: 3, y: 2 },
    ]},

]

const grasslandsSpriteSheetData = new SpriteSheetData(width, height, url, sprites)

export { grasslandsSpriteSheetData }