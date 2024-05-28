import React, { useState } from 'react'
import TileMenu from '../TileMenu'
import { RealmData, SpecialTile, Tool } from '@/utils/pixi/types'
import SpecialTiles from '../SpecialTiles'

type RightSectionProps = {
    selectedTile: string
    setSelectedTile: (tile: string) => void
    selectSpecialTile: (specialTile: SpecialTile) => void
    specialTile: SpecialTile
    rooms: string[]
    setRooms: (rooms: string[]) => void
    roomIndex: number
    setRoomIndex: (index: number) => void
}

type Tab = 'Tile' | 'Special Tiles'

const RightSection:React.FC<RightSectionProps> = ({ selectedTile, setSelectedTile, specialTile, selectSpecialTile, rooms, setRooms, roomIndex, setRoomIndex }) => {
    
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
            <div>
                {tab === 'Tile' && (
                    <TileMenu 
                        selectedTile={selectedTile} 
                        setSelectedTile={setSelectedTile} 
                        rooms={rooms}
                        setRooms={setRooms}
                        roomIndex={roomIndex}
                        setRoomIndex={setRoomIndex}
                    />
                )}
                {tab === 'Special Tiles' && <SpecialTiles specialTile={specialTile} selectSpecialTile={selectSpecialTile}/>}
            </div>
        </div>
    )
}

export default RightSection