import React, { useState } from 'react'
import TileMenu from '../TileMenu'
import { RealmData, Tool } from '@/utils/pixi/types'
import SpecialTiles from '../SpecialTiles'

type RightSectionProps = {
    selectedTile: string
    setSelectedTile: (tile: string) => void
    realmData: RealmData
    tool: Tool
    selectTool: (tool: Tool) => void
}

type Tab = 'Tile' | 'Special Tiles'

const RightSection:React.FC<RightSectionProps> = ({ selectedTile, setSelectedTile, realmData, tool, selectTool }) => {
    
    const [tab, setTab] = useState<Tab>('Tile')

    return (
        <div className='min-w-[420px] bg-secondary flex flex-col select-none'>
            <div className='flex flex-row h-10 px-2 pt-[4px]'>
                <div 
                    className={`grow bg-secondary hover:bg-secondaryhoverdark rounded-t-md cursor-pointer grid place-items-center select-none ${tab === 'Tile' ? 'pointer-events-none bg-secondaryhover' : ''}`}
                    onClick={() => setTab('Tile')}
                >
                    Tiles
                </div>
                <div 
                    className={`grow bg-secondary hover:bg-secondaryhoverdark rounded-t-md cursor-pointer grid place-items-center select-none ${tab === 'Special Tiles' ? 'pointer-events-none bg-secondaryhover' : ''}`}
                    onClick={() => setTab('Special Tiles')}
                >
                    Special Tiles
                </div>
            </div>
            <div className='bg-secondaryhover h-[4px]'/>
            <div className='p-2'>
                {tab === 'Tile' && <TileMenu selectedTile={selectedTile} setSelectedTile={setSelectedTile} realmData={realmData}/>}
                {tab === 'Special Tiles' && <SpecialTiles selectTool={selectTool} tool={tool}/>}
            </div>
        </div>
    )
}

export default RightSection