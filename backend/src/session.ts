import { supabase } from './supabase'
import { z } from 'zod'

export const defaultMapData: RealmData = {
    spawnpoint: {
        roomIndex: 0,
        x: 0,
        y: 0,
    },
    rooms: [{name: 'Home', tilemap: {}}]
}

export type RealmData = {
    spawnpoint: {
        roomIndex: number,
        x: number,
        y: number,
    },
    rooms: Room[],
}

export interface Room {
    name: string,
    tilemap: {
        [key: `${number}, ${number}`]: {
            floor?: string,
            above_floor?: string,
            object?: string,
            impassable?: boolean
            teleporter?: {
                roomIndex: number,
                x: number,
                y: number,
            }
        }
    }
}

export interface Player {
    uid: string,
    username: string,
    x: number,
    y: number,
    room: number,
    socketId: string,
    skin: string
}

export const defaultSkin = '009'

export const Spawnpoint = z.object({
    roomIndex: z.number(),
    x: z.number(),
    y: z.number(),
})

export type RoomData = { [key: number]: Player[] }

export class SessionManager {
    private sessions: { [key: string]: Session } = {}
    private playerIdToRealmId: { [key: string]: string } = {}
    private socketIdToPlayerId: { [key: string]: string } = {}

    public createSession(id: string): void {
        const realm = new Session(id)

        this.sessions[id] = realm
    }

    public getSession(id: string): Session {
        return this.sessions[id]
    }

    public getPlayerSession(uid: string): Session {
        const realmId = this.playerIdToRealmId[uid]
        return this.sessions[realmId]
    }

    public async addPlayerToSession(socketId: string, realmId: string, uid: string, username: string, skin: string) {
        await this.sessions[realmId].addPlayer(socketId, uid, username, skin)
        this.playerIdToRealmId[uid] = realmId
        this.socketIdToPlayerId[socketId] = uid
    }

    public logOutPlayer(uid: string) {
        const realmId = this.playerIdToRealmId[uid]
        // If the player is not in a realm, do nothing
        if (!realmId) return

        const player = this.sessions[realmId].getPlayer(uid)
        delete this.socketIdToPlayerId[player.socketId]
        delete this.playerIdToRealmId[uid]
        this.sessions[realmId].removePlayer(uid)
    }

    public getSocketIdsInRoom(realmId: string, roomIndex: number): string[] {
        return this.sessions[realmId].getPlayersInRoom(roomIndex).map(player => player.socketId)
    }

    public logOutBySocketId(socketId: string) {
        const uid = this.socketIdToPlayerId[socketId]
        if (!uid) return false

        this.logOutPlayer(uid)
        return true
    }
}

export class Session {
    private roomData: { [key: number]: Set<string> } = {}
    private players: { [key: string]: Player } = {}
    public id: string

    constructor(id: string) {
        this.id = id
    }

    public async addPlayer(socketId: string, uid: string, username: string, skin: string) {
        this.removePlayer(uid)
        const { data, error } = await supabase.from('realms').select('map_data').eq('id', this.id).single()
        let spawnIndex = 0
        let spawnX = 0
        let spawnY = 0
        // ensure that spawn point exists and that it is valid
        if (data && data.map_data && Spawnpoint.safeParse(data.map_data.spawnpoint).success) {
            const mapData: RealmData = data.map_data
            spawnIndex = mapData.spawnpoint.roomIndex
            spawnX = mapData.spawnpoint.x
            spawnY = mapData.spawnpoint.y
        }

        if (!this.roomData[spawnIndex]) this.roomData[spawnIndex] = new Set<string>()

        const player: Player = {
            uid,
            username,
            x: spawnX,
            y: spawnY,
            room: spawnIndex,
            socketId: socketId,
            skin,
        }

        this.roomData[spawnIndex].add(uid)
        this.players[uid] = player
    }

    public removePlayer(uid: string): void {
        if (!this.players[uid]) return

        const player = this.players[uid]
        this.roomData[player.room].delete(uid)
        delete this.players[uid]
    }

    public changeRoom(uid: string, roomIndex: number): void {
        if (!this.players[uid]) return

        const player = this.players[uid]

        this.roomData[player.room].delete(uid)

        if (!this.roomData[roomIndex]) this.roomData[roomIndex] = new Set<string>()

        this.roomData[roomIndex].add(uid)

        player.room = roomIndex
    }

    public getPlayersInRoom(roomIndex: number): Player[] {
        const players = Array.from(this.roomData[roomIndex] || [])
            .map(uid => this.players[uid])

        return players
    }

    public getPlayer(uid: string): Player {
        return this.players[uid]
    }

    public getPlayerRoom(uid: string): number {
        return this.players[uid].room
    }

}

const sessionManager = new SessionManager()

export { sessionManager }