import { SpriteSheetTile } from './spritesheet'
import { SpriteSheetData } from './SpriteSheetData'

const width = 768
const height = 384
const url = '/sprites/spritesheets/ground.png'
const sprites: SpriteSheetTile[] = [
    { name: 'light_solid_grass', x: 32, y: 32, width: 32, height: 32 },
    { name: 'detailed_grass', x: 32, y: 96, width: 32, height: 32 },
    { name: 'vibrant_solid_grass', x: 416, y: 32, width: 32, height: 32 },
    { name: 'normal_solid_grass', x: 32, y: 160, width: 32, height: 32 },
    { name: 'normal_detailed_grass', x: 32, y: 208, width: 32, height: 32 },
    { name: 'dark_solid_grass', x: 224, y: 160, width: 32, height: 32 },
    { name: 'solid_dirt', x: 32, y: 286, width: 32, height: 32 },
    { name: 'detailed_dirt', x: 224, y: 286, width: 32, height: 32 },
    { name: 'solid_sand', x: 416, y: 286, width: 32, height: 32 },
    { name: 'detailed_sand', x: 608, y: 286, width: 32, height: 32 },

    { name: 'top_left_outer_light_grass', x: 0, y: 0, width: 32, height: 32, layer: 'above_floor' },
    { name: 'top_outer_light_grass', x: 32, y: 0, width: 32, height: 32, layer: 'above_floor' },
    { name: 'top_right_outer_light_grass', x: 64, y: 0, width: 32, height: 32, layer: 'above_floor' },
    { name: 'left_outer_light_grass', x: 0, y: 32, width: 32, height: 32, layer: 'above_floor' },
    { name: 'empty', x: 0, y: 0, width: 0, height: 0, layer: 'above_floor' },
    { name: 'right_outer_light_grass', x: 64, y: 32, width: 32, height: 32, layer: 'above_floor' },
    { name: 'bottom_left_outer_light_grass', x: 0, y: 64, width: 32, height: 32, layer: 'above_floor' },
    { name: 'bottom_outer_light_grass', x: 32, y: 64, width: 32, height: 32, layer: 'above_floor' },
    { name: 'bottom_right_outer_light_grass', x: 64, y: 64, width: 32, height: 32, layer: 'above_floor' },
    { name: 'top_left_inner_corner_light_grass', x: 96, y: 0, width: 32, height: 32, layer: 'above_floor' },
    { name: 'top_inner_corner_light_grass', x: 128, y: 0, width: 32, height: 32, layer: 'above_floor' },
    { name: 'top_right_inner_corner_light_grass', x: 160, y: 0, width: 32, height: 32, layer: 'above_floor' },
    { name: 'left_inner_corner_light_grass', x: 96, y: 32, width: 32, height: 32, layer: 'above_floor' },
    { name: 'empty', x: 0, y: 0, width: 0, height: 0, layer: 'above_floor' },
    { name: 'right_inner_corner_light_grass', x: 160, y: 32, width: 32, height: 32, layer: 'above_floor' },
    { name: 'bottom_left_inner_corner_light_grass', x: 96, y: 64, width: 32, height: 32, layer: 'above_floor' },
    { name: 'bottom_inner_corner_light_grass', x: 128, y: 64, width: 32, height: 32, layer: 'above_floor' },
    { name: 'bottom_right_inner_corner_light_grass', x: 160, y: 64, width: 32, height: 32, layer: 'above_floor' },

    { name: 'tl_corners_light_grass', x: 352, y: 96, width: 32, height: 32, layer: 'above_floor' },
    { name: 'tr_corners_light_grass', x: 288, y: 96, width: 32, height: 32, layer: 'above_floor' },
    { name: 'empty', x: 0, y: 0, width: 0, height: 0, layer: 'above_floor' },
    { name: 'bl_corners_light_grass', x: 256, y: 96, width: 32, height: 32, layer: 'above_floor' },
    { name: 'br_corners_light_grass', x: 320, y: 96, width: 32, height: 32, layer: 'above_floor' },
    { name: 'empty', x: 0, y: 0, width: 0, height: 0, layer: 'above_floor' },
    { name: 'top_left_corner_light_grass', x: 208, y: 16, width: 32, height: 32, layer: 'above_floor' },
    { name: 'top_right_corner_light_grass', x: 240, y: 16, width: 32, height: 32, layer: 'above_floor' },
    { name: 'empty', x: 0, y: 0, width: 0, height: 0, layer: 'above_floor' },
    { name: 'bottom_left_corner_light_grass', x: 208, y: 48, width: 32, height: 32, layer: 'above_floor' },
    { name: 'bottom_right_corner_light_grass', x: 240, y: 48, width: 32, height: 32, layer: 'above_floor' },
    { name: 'empty', x: 0, y: 0, width: 0, height: 0, layer: 'above_floor' },
    { name: 'top_left_inner_curve_light_grass', x: 288, y: 0, width: 32, height: 32, layer: 'above_floor' },
    { name: 'top_inner_curve_light_grass', x: 320, y: 0, width: 32, height: 32, layer: 'above_floor' },
    { name: 'top_right_inner_curve_light_grass', x: 352, y: 0, width: 32, height: 32, layer: 'above_floor' },
    { name: 'left_inner_curve_light_grass', x: 288, y: 32, width: 32, height: 32, layer: 'above_floor' },
    { name: 'empty', x: 0, y: 0, width: 0, height: 0, layer: 'above_floor' },
    { name: 'right_inner_curve_light_grass', x: 352, y: 32, width: 32, height: 32, layer: 'above_floor' },
    { name: 'bottom_left_inner_curve_light_grass', x: 288, y: 64, width: 32, height: 32, layer: 'above_floor' },
    { name: 'bottom_inner_curve_light_grass', x: 320, y: 64, width: 32, height: 32, layer: 'above_floor' },
    { name: 'bottom_right_inner_curve_light_grass', x: 352, y: 64, width: 32, height: 32, layer: 'above_floor' },


    { name: 'top_left_outer_vibrant_grass', x: 384, y: 0, width: 32, height: 32, layer: 'above_floor' },
    { name: 'top_outer_vibrant_grass', x: 416, y: 0, width: 32, height: 32, layer: 'above_floor' },
    { name: 'top_right_outer_vibrant_grass', x: 448, y: 0, width: 32, height: 32, layer: 'above_floor' },
    { name: 'left_outer_vibrant_grass', x: 384, y: 32, width: 32, height: 32, layer: 'above_floor' },
    { name: 'empty', x: 0, y: 0, width: 0, height: 0, layer: 'above_floor' },
    { name: 'right_outer_vibrant_grass', x: 448, y: 32, width: 32, height: 32, layer: 'above_floor' },
    { name: 'bottom_left_outer_vibrant_grass', x: 384, y: 64, width: 32, height: 32, layer: 'above_floor' },
    { name: 'bottom_outer_vibrant_grass', x: 416, y: 64, width: 32, height: 32, layer: 'above_floor' },
    { name: 'bottom_right_outer_vibrant_grass', x: 448, y: 64, width: 32, height: 32, layer: 'above_floor' },
    { name: 'top_left_inner_corner_vibrant_grass', x: 480, y: 0, width: 32, height: 32, layer: 'above_floor' },
    { name: 'top_inner_corner_vibrant_grass', x: 512, y: 0, width: 32, height: 32, layer: 'above_floor' },
    { name: 'top_right_inner_corner_vibrant_grass', x: 544, y: 0, width: 32, height: 32, layer: 'above_floor' },
    { name: 'left_inner_corner_vibrant_grass', x: 480, y: 32, width: 32, height: 32, layer: 'above_floor' },
    { name: 'empty', x: 0, y: 0, width: 0, height: 0, layer: 'above_floor'},
    { name: 'right_inner_corner_vibrant_grass', x: 544, y: 32, width: 32, height: 32, layer: 'above_floor' },
    { name: 'bottom_left_inner_corner_vibrant_grass', x: 480, y: 64, width: 32, height: 32, layer: 'above_floor' },
    { name: 'bottom_inner_corner_vibrant_grass', x: 512, y: 64, width: 32, height: 32, layer: 'above_floor' },
    { name: 'bottom_right_inner_corner_vibrant_grass', x: 544, y: 64, width: 32, height: 32, layer: 'above_floor' },

    { name: 'tl_corners_vibrant_grass', x: 736, y: 96, width: 32, height: 32, layer: 'above_floor' },
    { name: 'tr_corners_vibrant_grass', x: 672, y: 96, width: 32, height: 32, layer: 'above_floor' },
    { name: 'empty', x: 0, y: 0, width: 0, height: 0, layer: 'above_floor' },
    { name: 'bl_corners_vibrant_grass', x: 640, y: 96, width: 32, height: 32, layer: 'above_floor' },
    { name: 'br_corners_vibrant_grass', x: 704, y: 96, width: 32, height: 32, layer: 'above_floor' },
    { name: 'empty', x: 0, y: 0, width: 0, height: 0, layer: 'above_floor' },
    { name: 'top_left_corner_vibrant_grass', x: 592, y: 16, width: 32, height: 32, layer: 'above_floor' },
    { name: 'top_right_corner_vibrant_grass', x: 624, y: 16, width: 32, height: 32, layer: 'above_floor' },
    { name: 'empty', x: 0, y: 0, width: 0, height: 0, layer: 'above_floor' },
    { name: 'bottom_left_corner_vibrant_grass', x: 592, y: 48, width: 32, height: 32, layer: 'above_floor' },
    { name: 'bottom_right_corner_vibrant_grass', x: 624, y: 48, width: 32, height: 32, layer: 'above_floor' },
    { name: 'empty', x: 0, y: 0, width: 0, height: 0, layer: 'above_floor' },
    { name: 'top_left_inner_curve_vibrant_grass', x: 672, y: 0, width: 32, height: 32, layer: 'above_floor' },
    { name: 'top_inner_curve_vibrant_grass', x: 704, y: 0, width: 32, height: 32, layer: 'above_floor' },
    { name: 'top_right_inner_curve_vibrant_grass', x: 736, y: 0, width: 32, height: 32, layer: 'above_floor' },
    { name: 'left_inner_curve_vibrant_grass', x: 672, y: 32, width: 32, height: 32, layer: 'above_floor' },
    { name: 'empty', x: 0, y: 0, width: 0, height: 0, layer: 'above_floor' },
    { name: 'right_inner_curve_vibrant_grass', x: 736, y: 32, width: 32, height: 32, layer: 'above_floor' },
    { name: 'bottom_left_inner_curve_vibrant_grass', x: 672, y: 64, width: 32, height: 32, layer: 'above_floor' },
    { name: 'bottom_inner_curve_vibrant_grass', x: 704, y: 64, width: 32, height: 32, layer: 'above_floor' },
    { name: 'bottom_right_inner_curve_vibrant_grass', x: 736, y: 64, width: 32, height: 32, layer: 'above_floor' },


    { name: 'tl_corners_normal_grass', x: 160, y: 224, width: 32, height: 32, layer: 'above_floor' },
    { name: 'tr_corners_normal_grass', x: 96, y: 224, width: 32, height: 32, layer: 'above_floor' },
    { name: 'empty', x: 0, y: 0, width: 0, height: 0, layer: 'above_floor' },
    { name: 'bl_corners_normal_grass', x: 64, y: 224, width: 32, height: 32, layer: 'above_floor' },
    { name: 'br_corners_normal_grass', x: 128, y: 224, width: 32, height: 32, layer: 'above_floor' },
    { name: 'empty', x: 0, y: 0, width: 0, height: 0, layer: 'above_floor' },
    { name: 'top_left_corner_normal_grass', x: 16, y: 144, width: 32, height: 32, layer: 'above_floor' },
    { name: 'top_right_corner_normal_grass', x: 48, y: 144, width: 32, height: 32, layer: 'above_floor' },
    { name: 'empty', x: 0, y: 0, width: 0, height: 0, layer: 'above_floor' },
    { name: 'bottom_left_corner_normal_grass', x: 16, y: 176, width: 32, height: 32, layer: 'above_floor' },
    { name: 'bottom_right_corner_normal_grass', x: 48, y: 176, width: 32, height: 32, layer: 'above_floor' },
    { name: 'empty', x: 0, y: 0, width: 0, height: 0, layer: 'above_floor' },
    { name: 'top_left_inner_curve_normal_grass', x: 96, y: 128, width: 32, height: 32, layer: 'above_floor' },
    { name: 'top_inner_curve_normal_grass', x: 128, y: 128, width: 32, height: 32, layer: 'above_floor' },
    { name: 'top_right_inner_curve_normal_grass', x: 160, y: 128, width: 32, height: 32, layer: 'above_floor' },
    { name: 'left_inner_curve_normal_grass', x: 96, y: 160, width: 32, height: 32, layer: 'above_floor' },
    { name: 'empty', x: 0, y: 0, width: 0, height: 0, layer: 'above_floor' },
    { name: 'right_inner_curve_normal_grass', x: 160, y: 160, width: 32, height: 32, layer: 'above_floor' },
    { name: 'bottom_left_inner_curve_normal_grass', x: 96, y: 192, width: 32, height: 32, layer: 'above_floor' },
    { name: 'bottom_inner_curve_normal_grass', x: 128, y: 192, width: 32, height: 32, layer: 'above_floor' },
    { name: 'bottom_right_inner_curve_normal_grass', x: 160, y: 192, width: 32, height: 32, layer: 'above_floor' },

    { name: 'tl_corners_dark_grass', x: 352, y: 224, width: 32, height: 32, layer: 'above_floor' },
    { name: 'tr_corners_dark_grass', x: 288, y: 224, width: 32, height: 32, layer: 'above_floor' },
    { name: 'empty', x: 0, y: 0, width: 0, height: 0, layer: 'above_floor' },
    { name: 'bl_corners_dark_grass', x: 256, y: 224, width: 32, height: 32, layer: 'above_floor' },
    { name: 'br_corners_dark_grass', x: 320, y: 224, width: 32, height: 32, layer: 'above_floor' },
    { name: 'empty', x: 0, y: 0, width: 0, height: 0, layer: 'above_floor' },
    { name: 'top_left_corner_dark_grass', x: 208, y: 144, width: 32, height: 32, layer: 'above_floor' },
    { name: 'top_right_corner_dark_grass', x: 240, y: 144, width: 32, height: 32, layer: 'above_floor' },
    { name: 'empty', x: 0, y: 0, width: 0, height: 0, layer: 'above_floor' },
    { name: 'bottom_left_corner_dark_grass', x: 208, y: 176, width: 32, height: 32, layer: 'above_floor' },
    { name: 'bottom_right_corner_dark_grass', x: 240, y: 176, width: 32, height: 32, layer: 'above_floor' },
    { name: 'empty', x: 0, y: 0, width: 0, height: 0, layer: 'above_floor' },
    { name: 'top_left_inner_curve_dark_grass', x: 288, y: 128, width: 32, height: 32, layer: 'above_floor' },
    { name: 'top_inner_curve_dark_grass', x: 320, y: 128, width: 32, height: 32, layer: 'above_floor' },
    { name: 'top_right_inner_curve_dark_grass', x: 352, y: 128, width: 32, height: 32, layer: 'above_floor' },
    { name: 'left_inner_curve_dark_grass', x: 288, y: 160, width: 32, height: 32, layer: 'above_floor' },
    { name: 'empty', x: 0, y: 0, width: 0, height: 0, layer: 'above_floor' },
    { name: 'right_inner_curve_dark_grass', x: 352, y: 160, width: 32, height: 32, layer: 'above_floor' },
    { name: 'bottom_left_inner_curve_dark_grass', x: 288, y: 192, width: 32, height: 32, layer: 'above_floor' },
    { name: 'bottom_inner_curve_dark_grass', x: 320, y: 192, width: 32, height: 32, layer: 'above_floor' },
    { name: 'bottom_right_inner_curve_dark_grass', x: 352, y: 192, width: 32, height: 32, layer: 'above_floor' },

    { name: 'tl_corners_bush', x: 544, y: 224, width: 32, height: 32, layer: 'above_floor' },
    { name: 'tr_corners_bush', x: 480, y: 224, width: 32, height: 32, layer: 'above_floor' },
    { name: 'empty', x: 0, y: 0, width: 0, height: 0, layer: 'above_floor' },
    { name: 'bl_corners_bush', x: 448, y: 224, width: 32, height: 32, layer: 'above_floor' },
    { name: 'br_corners_bush', x: 512, y: 224, width: 32, height: 32, layer: 'above_floor' },
    { name: 'empty', x: 0, y: 0, width: 0, height: 0, layer: 'above_floor' },
    { name: 'top_left_corner_bush', x: 400, y: 144, width: 32, height: 32, layer: 'above_floor' },
    { name: 'top_right_corner_bush', x: 432, y: 144, width: 32, height: 32, layer: 'above_floor' },
    { name: 'empty', x: 0, y: 0, width: 0, height: 0, layer: 'above_floor' },
    { name: 'bottom_left_corner_bush', x: 400, y: 176, width: 32, height: 32, layer: 'above_floor' },
    { name: 'bottom_right_corner_bush', x: 432, y: 176, width: 32, height: 32, layer: 'above_floor' },
    { name: 'empty', x: 0, y: 0, width: 0, height: 0, layer: 'above_floor' },
    { name: 'top_left_inner_curve_bush', x: 480, y: 128, width: 32, height: 32, layer: 'above_floor' },
    { name: 'top_inner_curve_bush', x: 512, y: 128, width: 32, height: 32, layer: 'above_floor' },
    { name: 'top_right_inner_curve_bush', x: 544, y: 128, width: 32, height: 32, layer: 'above_floor' },
    { name: 'left_inner_curve_bush', x: 480, y: 160, width: 32, height: 32, layer: 'above_floor' },
    { name: 'empty', x: 0, y: 0, width: 0, height: 0, layer: 'above_floor' },
    { name: 'right_inner_curve_bush', x: 544, y: 160, width: 32, height: 32, layer: 'above_floor' },
    { name: 'bottom_left_inner_curve_bush', x: 480, y: 192, width: 32, height: 32, layer: 'above_floor' },
    { name: 'bottom_inner_curve_bush', x: 512, y: 192, width: 32, height: 32, layer: 'above_floor' },
    { name: 'bottom_right_inner_curve_bush', x: 544, y: 192, width: 32, height: 32, layer: 'above_floor' },


    { name: 'tl_corners_dark_bush', x: 736, y: 224, width: 32, height: 32, layer: 'above_floor' },
    { name: 'tr_corners_dark_bush', x: 672, y: 224, width: 32, height: 32, layer: 'above_floor' },
    { name: 'empty', x: 0, y: 0, width: 0, height: 0, layer: 'above_floor' },
    { name: 'bl_corners_dark_bush', x: 640, y: 224, width: 32, height: 32, layer: 'above_floor' },
    { name: 'br_corners_dark_bush', x: 704, y: 224, width: 32, height: 32, layer: 'above_floor' },
    { name: 'empty', x: 0, y: 0, width: 0, height: 0, layer: 'above_floor' },
    { name: 'top_left_corner_dark_bush', x: 592, y: 144, width: 32, height: 32, layer: 'above_floor' },
    { name: 'top_right_corner_dark_bush', x: 624, y: 144, width: 32, height: 32, layer: 'above_floor' },
    { name: 'empty', x: 0, y: 0, width: 0, height: 0, layer: 'above_floor' },
    { name: 'bottom_left_corner_dark_bush', x: 592, y: 176, width: 32, height: 32, layer: 'above_floor' },
    { name: 'bottom_right_corner_dark_bush', x: 624, y: 176, width: 32, height: 32, layer: 'above_floor' },
    { name: 'empty', x: 0, y: 0, width: 0, height: 0, layer: 'above_floor' },
    { name: 'top_left_inner_curve_dark_bush', x: 672, y: 128, width: 32, height: 32, layer: 'above_floor' },
    { name: 'top_inner_curve_dark_bush', x: 704, y: 128, width: 32, height: 32, layer: 'above_floor' },
    { name: 'top_right_inner_curve_dark_bush', x: 736, y: 128, width: 32, height: 32, layer: 'above_floor' },
    { name: 'left_inner_curve_dark_bush', x: 672, y: 160, width: 32, height: 32, layer: 'above_floor' },
    { name: 'empty', x: 0, y: 0, width: 0, height: 0, layer: 'above_floor' },
    { name: 'right_inner_curve_dark_bush', x: 736, y: 160, width: 32, height: 32, layer: 'above_floor' },
    { name: 'bottom_left_inner_curve_dark_bush', x: 672, y: 192, width: 32, height: 32, layer: 'above_floor' },
    { name: 'bottom_inner_curve_dark_bush', x: 704, y: 192, width: 32, height: 32, layer: 'above_floor' },
    { name: 'bottom_right_inner_curve_dark_bush', x: 736, y: 192, width: 32, height: 32, layer: 'above_floor' },


    { name: 'tl_corners_solid_dirt', x: 160, y: 352, width: 32, height: 32, layer: 'above_floor' },
    { name: 'tr_corners_solid_dirt', x: 96, y: 352, width: 32, height: 32, layer: 'above_floor' },
    { name: 'empty', x: 0, y: 0, width: 0, height: 0, layer: 'above_floor' },
    { name: 'bl_corners_solid_dirt', x: 64, y: 352, width: 32, height: 32, layer: 'above_floor' },
    { name: 'br_corners_solid_dirt', x: 128, y: 352, width: 32, height: 32, layer: 'above_floor' },
    { name: 'empty', x: 0, y: 0, width: 0, height: 0, layer: 'above_floor' },
    { name: 'top_left_corner_solid_dirt', x: 16, y: 272, width: 32, height: 32, layer: 'above_floor' },
    { name: 'top_right_corner_solid_dirt', x: 48, y: 272, width: 32, height: 32, layer: 'above_floor' },
    { name: 'empty', x: 0, y: 0, width: 0, height: 0, layer: 'above_floor' },
    { name: 'bottom_left_corner_solid_dirt', x: 16, y: 304, width: 32, height: 32, layer: 'above_floor' },
    { name: 'bottom_right_corner_solid_dirt', x: 48, y: 304, width: 32, height: 32, layer: 'above_floor' },
    { name: 'empty', x: 0, y: 0, width: 0, height: 0, layer: 'above_floor' },
    { name: 'top_left_inner_curve_solid_dirt', x: 96, y: 256, width: 32, height: 32, layer: 'above_floor' },
    { name: 'top_inner_curve_solid_dirt', x: 128, y: 256, width: 32, height: 32, layer: 'above_floor' },
    { name: 'top_right_inner_curve_solid_dirt', x: 160, y: 256, width: 32, height: 32, layer: 'above_floor' },
    { name: 'left_inner_curve_solid_dirt', x: 96, y: 288, width: 32, height: 32, layer: 'above_floor' },
    { name: 'empty', x: 0, y: 0, width: 0, height: 0, layer: 'above_floor' },
    { name: 'right_inner_curve_solid_dirt', x: 160, y: 288, width: 32, height: 32, layer: 'above_floor' },
    { name: 'bottom_left_inner_curve_solid_dirt', x: 96, y: 320, width: 32, height: 32, layer: 'above_floor' },
    { name: 'bottom_inner_curve_solid_dirt', x: 128, y: 320, width: 32, height: 32, layer: 'above_floor' },
    { name: 'bottom_right_inner_curve_solid_dirt', x: 160, y: 320, width: 32, height: 32, layer: 'above_floor' },


    { name: 'tl_corners_detailed_dirt', x: 352, y: 352, width: 32, height: 32, layer: 'above_floor' },
    { name: 'tr_corners_detailed_dirt', x: 288, y: 352, width: 32, height: 32, layer: 'above_floor' },
    { name: 'empty', x: 0, y: 0, width: 0, height: 0, layer: 'above_floor' },
    { name: 'bl_corners_detailed_dirt', x: 256, y: 352, width: 32, height: 32, layer: 'above_floor' },
    { name: 'br_corners_detailed_dirt', x: 320, y: 352, width: 32, height: 32, layer: 'above_floor' },
    { name: 'empty', x: 0, y: 0, width: 0, height: 0, layer: 'above_floor' },
    { name: 'top_left_corner_detailed_dirt', x: 208, y: 272, width: 32, height: 32, layer: 'above_floor' },
    { name: 'top_right_corner_detailed_dirt', x: 240, y: 272, width: 32, height: 32, layer: 'above_floor' },
    { name: 'empty', x: 0, y: 0, width: 0, height: 0, layer: 'above_floor' },
    { name: 'bottom_left_corner_detailed_dirt', x: 208, y: 304, width: 32, height: 32, layer: 'above_floor' },
    { name: 'bottom_right_corner_detailed_dirt', x: 240, y: 304, width: 32, height: 32, layer: 'above_floor' },
    { name: 'empty', x: 0, y: 0, width: 0, height: 0, layer: 'above_floor' },
    { name: 'top_left_inner_curve_detailed_dirt', x: 288, y: 256, width: 32, height: 32, layer: 'above_floor' },
    { name: 'top_inner_curve_detailed_dirt', x: 320, y: 256, width: 32, height: 32, layer: 'above_floor' },
    { name: 'top_right_inner_curve_detailed_dirt', x: 352, y: 256, width: 32, height: 32, layer: 'above_floor' },
    { name: 'left_inner_curve_detailed_dirt', x: 288, y: 288, width: 32, height: 32, layer: 'above_floor' },
    { name: 'empty', x: 0, y: 0, width: 0, height: 0, layer: 'above_floor' },
    { name: 'right_inner_curve_detailed_dirt', x: 352, y: 288, width: 32, height: 32, layer: 'above_floor' },
    { name: 'bottom_left_inner_curve_detailed_dirt', x: 288, y: 320, width: 32, height: 32, layer: 'above_floor' },
    { name: 'bottom_inner_curve_detailed_dirt', x: 320, y: 320, width: 32, height: 32, layer: 'above_floor' },
    { name: 'bottom_right_inner_curve_detailed_dirt', x: 352, y: 320, width: 32, height: 32, layer: 'above_floor' },

    { name: 'tl_corners_solid_sand', x: 544, y: 352, width: 32, height: 32, layer: 'above_floor' },
    { name: 'tr_corners_solid_sand', x: 480, y: 352, width: 32, height: 32, layer: 'above_floor' },
    { name: 'empty', x: 0, y: 0, width: 0, height: 0, layer: 'above_floor' },
    { name: 'bl_corners_solid_sand', x: 448, y: 352, width: 32, height: 32, layer: 'above_floor' },
    { name: 'br_corners_solid_sand', x: 512, y: 352, width: 32, height: 32, layer: 'above_floor' },
    { name: 'empty', x: 0, y: 0, width: 0, height: 0, layer: 'above_floor' },
    { name: 'top_left_corner_solid_sand', x: 400, y: 272, width: 32, height: 32, layer: 'above_floor' },
    { name: 'top_right_corner_solid_sand', x: 432, y: 272, width: 32, height: 32, layer: 'above_floor' },
    { name: 'empty', x: 0, y: 0, width: 0, height: 0, layer: 'above_floor' },
    { name: 'bottom_left_corner_solid_sand', x: 400, y: 304, width: 32, height: 32, layer: 'above_floor' },
    { name: 'bottom_right_corner_solid_sand', x: 432, y: 304, width: 32, height: 32, layer: 'above_floor' },
    { name: 'empty', x: 0, y: 0, width: 0, height: 0, layer: 'above_floor' },
    { name: 'top_left_inner_curve_solid_sand', x: 480, y: 256, width: 32, height: 32, layer: 'above_floor' },
    { name: 'top_inner_curve_solid_sand', x: 512, y: 256, width: 32, height: 32, layer: 'above_floor' },
    { name: 'top_right_inner_curve_solid_sand', x: 544, y: 256, width: 32, height: 32, layer: 'above_floor' },
    { name: 'left_inner_curve_solid_sand', x: 480, y: 288, width: 32, height: 32, layer: 'above_floor' },
    { name: 'empty', x: 0, y: 0, width: 0, height: 0, layer: 'above_floor' },
    { name: 'right_inner_curve_solid_sand', x: 544, y: 288, width: 32, height: 32, layer: 'above_floor' },
    { name: 'bottom_left_inner_curve_solid_sand', x: 480, y: 320, width: 32, height: 32, layer: 'above_floor' },
    { name: 'bottom_inner_curve_solid_sand', x: 512, y: 320, width: 32, height: 32, layer: 'above_floor' },
    { name: 'bottom_right_inner_curve_solid_sand', x: 544, y: 320, width: 32, height: 32, layer: 'above_floor' },


    { name: 'tl_corners_detailed_sand', x: 736, y: 352, width: 32, height: 32, layer: 'above_floor' },
    { name: 'tr_corners_detailed_sand', x: 672, y: 352, width: 32, height: 32, layer: 'above_floor' },
    { name: 'empty', x: 0, y: 0, width: 0, height: 0, layer: 'above_floor' },
    { name: 'bl_corners_detailed_sand', x: 640, y: 352, width: 32, height: 32, layer: 'above_floor' },
    { name: 'br_corners_detailed_sand', x: 704, y: 352, width: 32, height: 32, layer: 'above_floor' },
    { name: 'empty', x: 0, y: 0, width: 0, height: 0, layer: 'above_floor' },
    { name: 'top_left_corner_detailed_sand', x: 592, y: 272, width: 32, height: 32, layer: 'above_floor' },
    { name: 'top_right_corner_detailed_sand', x: 624, y: 272, width: 32, height: 32, layer: 'above_floor' },
    { name: 'empty', x: 0, y: 0, width: 0, height: 0, layer: 'above_floor' },
    { name: 'bottom_left_corner_detailed_sand', x: 592, y: 304, width: 32, height: 32, layer: 'above_floor' },
    { name: 'bottom_right_corner_detailed_sand', x: 624, y: 304, width: 32, height: 32, layer: 'above_floor' },
    { name: 'empty', x: 0, y: 0, width: 0, height: 0, layer: 'above_floor' },
    { name: 'top_left_inner_curve_detailed_sand', x: 672, y: 256, width: 32, height: 32, layer: 'above_floor' },
    { name: 'top_inner_curve_detailed_sand', x: 704, y: 256, width: 32, height: 32, layer: 'above_floor' },
    { name: 'top_right_inner_curve_detailed_sand', x: 736, y: 256, width: 32, height: 32, layer: 'above_floor' },
    { name: 'left_inner_curve_detailed_sand', x: 672, y: 288, width: 32, height: 32, layer: 'above_floor' },
    { name: 'empty', x: 0, y: 0, width: 0, height: 0, layer: 'above_floor' },
    { name: 'right_inner_curve_detailed_sand', x: 736, y: 288, width: 32, height: 32, layer: 'above_floor' },
    { name: 'bottom_left_inner_curve_detailed_sand', x: 672, y: 320, width: 32, height: 32, layer: 'above_floor' },
    { name: 'bottom_inner_curve_detailed_sand', x: 704, y: 320, width: 32, height: 32, layer: 'above_floor' },
    { name: 'bottom_right_inner_curve_detailed_sand', x: 736, y: 320, width: 32, height: 32, layer: 'above_floor' },

]

const groundSpriteSheetData = new SpriteSheetData(width, height, url, sprites)

export { groundSpriteSheetData }