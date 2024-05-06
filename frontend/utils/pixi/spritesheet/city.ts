import { SpriteSheetData } from './spritesheet'

export const citySpriteSheetData: SpriteSheetData = {
    width: 1024,
    height: 1536,
    url: '/sprites/city/FDR_City.png',
    sprites: {
        light_solid_grass: { x: 32, y: 0, width: 32, height: 32 },
        light_detailed_grass: { x: 64, y: 0, width: 32, height: 32 },
        dark_solid_grass: { x: 96, y: 0, width: 32, height: 32 },
        dark_detailed_grass: { x: 128, y: 0, width: 32, height: 32 },
        solid_dirt: { x: 160, y: 0, width: 32, height: 32 },
        detailed_dirt: { x: 192, y: 0, width: 32, height: 32 },
        solid_sand: { x: 224, y: 0, width: 32, height: 32 },
        detailed_sand: { x: 256, y: 0, width: 32, height: 32 },
        light_concrete: { x: 288, y: 0, width: 32, height: 32 },
        dark_concrete: { x: 320, y: 0, width: 32, height: 32 },
        light_bricks_v: { x: 384, y: 0, width: 32, height: 32 },
        dark_bricks_v: { x: 416, y: 0, width: 32, height: 32 },
        light_bricks_h: { x: 448, y: 0, width: 32, height: 32 },
        dark_bricks_h: { x: 480, y: 0, width: 32, height: 32 },
        tl_bricks_v: { x: 320, y: 32, width: 32, height: 32 },
        t_bricks_v: { x: 352, y: 32, width: 32, height: 32 },
        tr_bricks_v: { x: 384, y: 32, width: 32, height: 32 },
        l_bricks_v: { x: 320, y: 64, width: 32, height: 32 },
        r_bricks_v: { x: 384, y: 64, width: 32, height: 32 },
        bl_bricks_v: { x: 320, y: 96, width: 32, height: 32 },
        b_bricks_v: { x: 352, y: 96, width: 32, height: 32 },
        br_bricks_v: { x: 384, y: 96, width: 32, height: 32 },
        down_sign: { x: 512, y: 32, width: 32, height: 64, layer: 'object' },
        left_sign: { x: 544, y: 32, width: 32, height: 64, layer: 'object' },
        red_car: { x: 480, y: 1024, width: 160, height: 96, layer: 'object' },
    }
}