'use client'
import React, { useRef } from 'react'
import { PlayApp } from '@/utils/pixi/PlayApp'
import { useEffect } from 'react'
import { RealmData } from '@/utils/pixi/types'
import { useModal } from '../hooks/useModal'
import { createClient } from '@/utils/supabase/client'

type PixiAppProps = {
    className?: string
    mapData: RealmData
    username: string
    access_token: string
}

const PixiApp:React.FC<PixiAppProps> = ({ className, mapData, username, access_token }) => {

    const appRef = useRef<PlayApp | null>(null)
    const { setModal } = useModal()

    useEffect(() => {
        const mount = async () => {
            const app = new PlayApp(mapData, username, access_token)
            appRef.current = app
            setModal('Loading')
            await app.init()
            setModal('None')
            const pixiApp = app.getApp()
            
            document.getElementById('app-container')!.appendChild(pixiApp.canvas)
        }

        if (!appRef.current) {
            mount()
        }
        
        return () => {
            if (appRef.current) {
                appRef.current.destroy()
            }
        }
    }, [])

    return (
        <div id='app-container' className={`overflow-hidden ${className}`}>
            
        </div>
    )
}

export default PixiApp
