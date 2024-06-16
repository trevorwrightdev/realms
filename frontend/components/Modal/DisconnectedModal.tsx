import React from 'react'
import Modal from './Modal'
import { useModal } from '@/app/hooks/useModal'
import Link from 'next/link'

type DisconnectedModalProps = {
    
}

const DisconnectedModal:React.FC<DisconnectedModalProps> = () => {
    
    const { errorModal, disconnectedMessage } = useModal()

    return (
        <Modal open={errorModal === 'Disconnected'}>
            <div className='flex flex-col items-center gap-2 p-4 bg-secondary'>
                <h1 className='text-red-500'>Failed to connect to server.</h1>
                <h1 className='text-red-500'>{disconnectedMessage}</h1>
                <Link href='/app'>
                    <button className='bg-secondary border-2 border-white hover:bg-lightblue text-white px-2 py-1 rounded-md outline-none'>Home</button>
                </Link>
            </div>
        </Modal>
    )
}

export default DisconnectedModal