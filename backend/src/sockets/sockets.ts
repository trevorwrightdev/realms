import { Server } from 'socket.io'
import { JoinRealm, OnEventCallback } from './socket-types'
import { z } from 'zod'
import { supabase } from '../supabase'
import { users } from '../Users'
import { sessionManager } from '../session'

function protectConnection(io: Server) {
    io.use(async (socket, next) => {
        const access_token = socket.handshake.query.access_token as string
        const uid = socket.handshake.query.uid as string
        if (!access_token || !uid) {
            // Reject the connection by calling next with an error.
            const error = new Error("Invalid access token or uid")
            return next(error)
        } else {
            // If clientId is provided, check if valid user
            const { data: user, error: error } = await supabase.auth.getUser(access_token)

            if (error) {
                return next(new Error("Invalid access token"))
            }

            // reject connection if the uid does not match the access token
            if (!user || user.user.id !== uid) {
                return next(new Error("Invalid uid"))
            }

            if (users.getUser(uid)) {
                return next(new Error("User already connected"))
            }

            users.addUser(uid, user.user)
            next()
        }
    })
}

export function sockets(io: Server) {
    protectConnection(io)

    // Handle a connection
    io.on('connection', (socket) => {

        function on(eventName: string, callback: OnEventCallback) {
            socket.on(eventName, (data: any) => {
                const session = sessionManager.getPlayerSession(socket.handshake.query.uid as string)
                if (!session) {
                    return
                }
                callback({ session, data })
            })
        }

        function emit(eventName: string, data: any) {
            const session = sessionManager.getPlayerSession(socket.handshake.query.uid as string)
            if (!session) {
                return
            }

            const room = session.getPlayerRoom(socket.handshake.query.uid as string)
            const players = session.getPlayersInRoom(room)

            for (const player of players) {
                if (player.socketId === socket.id) continue

                io.to(player.socketId).emit(eventName, data)
            }
        }

        socket.on('joinRealm', async (realmData: z.infer<typeof JoinRealm>) => {

            const rejectJoin = () => {
                socket.emit('failedToJoinRoom')
            }

            if (JoinRealm.safeParse(realmData).success === false) {
                rejectJoin()
                return
            }

            const { data, error } = await supabase.from('realms').select('privacy_level, owner_id, share_id').eq('id', realmData.realmId)

            if (error || !data || data.length === 0) {
                rejectJoin()
                return
            }

            const realm = data[0]

            const join = async () => {
                socket.join(realmData.realmId)
                socket.emit('joinedRealm')

                if (!sessionManager.getSession(realmData.realmId)) {
                    sessionManager.createSession(realmData.realmId)
                }

                const uid = socket.handshake.query.uid as string
                const username = users.getUser(uid)!.user_metadata.full_name
                await sessionManager.addPlayerToSession(socket.id, realmData.realmId, uid, username)

                const session = sessionManager.getPlayerSession(uid)
                const player = session.getPlayer(uid)

                emit('playerConnected', player)
            }

            if (realm.owner_id === socket.handshake.query.uid) {
                join()
                return
            }

            if (realm.privacy_level === 'discord') {
                // TODO: Check if they are in discord 
                rejectJoin()
                return
            } else if (realm.privacy_level === 'anyone') {
                if (realm.share_id === realmData.shareId) {
                    join()
                    return
                }
            }

            rejectJoin()
        })

        // Handle a disconnection
        on('disconnect', ({ session, data }) => {
            const uid = socket.handshake.query.uid as string
            emit('playerDisconnected', uid)
            sessionManager.logOutPlayer(uid)
            users.removeUser(uid)
        })

        on('movePlayer', ({ session, data }) => {  
            const player = session.getPlayer(socket.handshake.query.uid as string)
            player.x = data.x
            player.y = data.y
            emit('playerMoved', {
                uid: player.uid,
                x: player.x,
                y: player.y
            })
        })  
    })
}