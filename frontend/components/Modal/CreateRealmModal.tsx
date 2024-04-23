'use client'
import React, { useState } from 'react'
import Modal from './Modal'
import { useModal } from '@/app/hooks/useModal'
import BasicButton from '../BasicButton'
import BasicInput from '../BasicInput'
import { createClient } from '@/utils/supabase/client'

const CreateRealmModal:React.FC = () => {
    
    const [modal] = useModal()
    const [realmName, setRealmName] = useState<string>('')

    async function createRealm() {
        const supabase = createClient()
        const { data: { user } } = await supabase.auth.getUser()

        if (!user) {
            return
        }

        const uid = user.id

        const { error } = await supabase.from('realms').insert({
            owner_id: uid,
            name: 'New Realm',
        })
    }

    return (
        <Modal open={modal === 'Create Realm'} closeOnOutsideClick>
            <div className='flex flex-col items-center p-2 w-[400px] gap-4'>
                <h1 className='text-3xl'>Create a Realm</h1>
                <BasicInput label={'Realm Name'} className='w-[280px]' value={realmName} onChange={(e) => setRealmName(e.target.value)}/>
                <BasicButton disabled={realmName.length <= 0}>
                    Create
                </BasicButton>
            </div>
        </Modal>
    )
}

export default CreateRealmModal