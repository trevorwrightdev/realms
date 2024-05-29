'use client'
import { createContext, useContext, useState, ReactNode, FC } from 'react';

type Modal = 'None' | 'Create Realm' | 'Account Dropdown' | 'Loading' | 'Delete Room' | 'Teleport' | 'Delete Realm'

type RoomToDelete = {
    name: string,
    index: number
}

type RealmToDelete = {
    name: string,
    id: string
}

type ModalContextType = {
    modal: Modal,
    setModal: (value: Modal) => void,
    roomToDelete: RoomToDelete,
    setRoomToDelete: (value: RoomToDelete) => void,
    roomList: string[],
    setRoomList: (value: string[]) => void
    realmToDelete: RealmToDelete,
    setRealmToDelete: (value: RealmToDelete) => void
}

const ModalContext = createContext<ModalContextType>({
    modal: 'None',
    setModal: () => {},
    roomToDelete: {
        name: '',
        index: 0
    },
    setRoomToDelete: () => {},
    roomList: [],
    setRoomList: () => {},
    realmToDelete: {
        name: '',
        id: ''
    },
    setRealmToDelete: () => {}
})

type ModalProviderProps = {
    children: ReactNode
}

export const ModalProvider: FC<ModalProviderProps> = ({ children }) => {
    const [modal, setModal] = useState<Modal>('None')
    const [roomToDelete, setRoomToDelete] = useState<RoomToDelete>({
        name: '',
        index: 0
    })
    const [roomList, setRoomList] = useState<string[]>([])
    const [realmToDelete, setRealmToDelete] = useState<RealmToDelete>({
        name: '',
        id: ''
    })

    const value: ModalContextType = { modal, setModal, roomToDelete, setRoomToDelete, roomList, setRoomList, realmToDelete, setRealmToDelete }

    return (
        <ModalContext.Provider value={value}>
            {children}
        </ModalContext.Provider>
    )
}

export const useModal = () => useContext(ModalContext)
