'use client'
import React, { useState } from 'react'
import { createClient } from '@/utils/supabase/client'
import { useRouter } from 'next/navigation'
import { PlusCircleIcon } from '@heroicons/react/24/outline'
import { useModal } from '@/app/hooks/useModal'
import BasicButton from '../BasicButton'

type NavbarChildProps = {
    name: string,
    avatar_url: string
};

export const NavbarChild:React.FC<NavbarChildProps> = ({ name, avatar_url }) => {

    const router = useRouter()
    const [menuOpen, setMenuOpen] = useState(false)
    const [modal, setModal] = useModal()

    return (
        <div className='w-full h-16 bg-secondary flex flex-row items-center p-2 pl-4 relative justify-end md:justify-between'>
            <BasicButton onClick={() => setModal('Create Realm')} className='hidden md:flex flex-row items-center gap-2'>
                Create Realm
                <PlusCircleIcon className='h-5'/>
            </BasicButton>
            <div className='flex flex-row items-center gap-4 hover:bg-secondaryhover rounded-3xl cursor-pointer py-1 px-2 select-none' onClick={() => setModal('Account Dropdown')}>
                <p className='text-white text-xl'>{name}</p>
                <img src={avatar_url} className='aspect-square rounded-full w-12'/>
            </div>
        </div>
    )
}