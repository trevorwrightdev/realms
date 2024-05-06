'use client'
import React from 'react'
import { SheetName } from '@/utils/pixi/spritesheet/spritesheet'
import { sprites } from '@/utils/pixi/spritesheet/spritesheet'

type TileGridItemProps = {
    sheetName: SheetName
    sprite: string
    selected: boolean
    onClick: () => void
}

const TileGridItem: React.FC<TileGridItemProps> = ({ sheetName, sprite, selected, onClick }) => {
    
    const src = sprites.spriteSheetDataSet[sheetName].url
    const { x, y, width, height } = sprites.spriteSheetDataSet[sheetName].sprites[sprite]
    const sheetWidth = sprites.spriteSheetDataSet[sheetName].width // Width of the whole sprite sheet
    const sheetHeight = sprites.spriteSheetDataSet[sheetName]. height // Height of the whole sprite sheet

    const scale = 0.5

    return (
        <div className={`w-full aspect-square hover:bg-secondaryhover cursor-pointer rounded-lg flex flex-col items-center justify-between ${selected ? 'bg-secondaryhover' : ''}`} onClick={onClick}>
            <div className='w-full grow grid place-items-center'>
                <div style={{
                    backgroundImage: `url(${src})`,
                    backgroundPosition: `-${x * scale}px -${y * scale}px`,
                    backgroundSize: `${sheetWidth * scale}px ${sheetHeight * scale}px`,
                    width: `${width * scale}px`,
                    height: `${height * scale}px`,
                }}></div>
            </div>
            <p className='text-sm'>{sprite}</p>
        </div>
    )
}

export default TileGridItem
