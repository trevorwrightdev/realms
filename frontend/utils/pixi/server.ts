import io, { Socket } from 'socket.io-client'
import { request } from '../backend/requests'

const backend_url: string = process.env.NEXT_PUBLIC_BACKEND_URL as string

class Server {
    public socket: Socket = {} as Socket
    private access_token: string = ''
    private connected: boolean = false

    public async connect(realmId: string, uid: string, shareId: string, access_token: string) {
        this.socket = io(backend_url, {
                reconnection: true,
                autoConnect: false,
                reconnectionAttempts: 5,
                reconnectionDelay: 2000,
                query: {
                    access_token,
                    uid
                }
            }
        )
        this.access_token = access_token

        return new Promise<boolean>((resolve, reject) => {
            this.socket.connect()

            this.socket.on('connect', () => {
                this.connected = true

                this.socket.emit('joinRealm', {
                    realmId,
                    shareId
                })
            })

            this.socket.on('joinedRealm', () => {
                resolve(true)
            })

            this.socket.on('failedToJoinRoom', () => {
                resolve(false)
            })

            this.socket.on('connect_error', (err: any) => {
                console.error('Connection error:', err)
                resolve(false)
            })
        })
    }

    public disconnect() {
        if (this.connected) {
            this.connected = false
            this.socket.disconnect()
        }
    }

    public async getPlayersInRoom(roomIndex: number) {
        return request('/getPlayersInRoom', {
            access_token: this.access_token,
            roomIndex: roomIndex,
        })
    }
}

const server = new Server()

export { server }