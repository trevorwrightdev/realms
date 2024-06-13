'use client'
import React from 'react'
import CreateRealmModal from './CreateRealmModal'
import AccountDropdown from '../AccountDropdown'
import LoadingModal from './LoadingModal'
import DeleteRoomModal from './DeleteRoomModal'
import TeleportModal from './TeleportModal'
import DeleteRealmModal from './DeleteRealmModal'
import FailedToConnectModal from './FailedToConnectModal'
import SkinMenu from '@/app/play/SkinMenu/SkinMenu'

const ModalParent:React.FC = () => {
    return (
        <div>
            <CreateRealmModal />
            <AccountDropdown />
            <LoadingModal />
            <DeleteRoomModal />
            <TeleportModal />
            <DeleteRealmModal />
            <FailedToConnectModal />
            <SkinMenu />
        </div>
    )
}
export default ModalParent;