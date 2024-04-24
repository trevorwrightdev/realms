'use client'
import React, { useRef } from 'react'
import { App } from '@/utils/pixi/App'
import { useEffect } from 'react'
import { Application } from 'pixi.js'

const PixiEditor:React.FC = () => {

    const pixiAppRef = useRef<Application | null>(null)

    useEffect(() => {
        const mount = async () => {
            const app = new App()
            await app.init()

            pixiAppRef.current = app.getApp()
            document.getElementById('app-container')!.appendChild(pixiAppRef.current.canvas)
        }

        if (!pixiAppRef.current) {
            mount()
        }

        return () => {
            if (pixiAppRef.current) {
                pixiAppRef.current.destroy()
            }
        }
    }, [])

    return (
        <div id='app-container' className='w-full h-screen'>

        </div>
    )
}

export default PixiEditor
