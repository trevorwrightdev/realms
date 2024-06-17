import { Server } from 'socket.io'
import { JoinRealm, Disconnect, OnEventCallback, MovePlayer, Teleport, ChangedSkin, NewMessage } from './socket-types'
import { z } from 'zod'
import { supabase } from '../supabase'
import { users } from '../Users'
import { defaultSkin, sessionManager } from '../session'

const joiningInProgress = new Set<string>()

function protectConnection(io: Server) {
    io.use(async (socket, next) => {
        const access_token = socket.handshake.query.access_token as string
        const uid = socket.handshake.query.uid as string
        if (!access_token || !uid) {
            // Reject the connection by calling next with an error.
            const error = new Error("Invalid access token or uid.")
            return next(error)
        } else {
            // If clientId is provided, check if valid user
            const { data: user, error: error } = await supabase.auth.getUser(access_token)

            if (error) {
                return next(new Error("Invalid access token."))
            }

            // reject connection if the uid does not match the access token
            if (!user || user.user.id !== uid) {
                return next(new Error("Invalid uid."))
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

        function on(eventName: string, schema: z.ZodTypeAny, callback: OnEventCallback) {
            socket.on(eventName, (data: any) => {
                const success = schema.safeParse(data).success
                if (!success) return

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

        function emitToSocketIds(socketIds: string[], eventName: string, data: any) {
            for (const socketId of socketIds) {
                io.to(socketId).emit(eventName, data)
            }
        }

        function kickPlayer(uid: string, reason: string) {
            const session = sessionManager.getPlayerSession(uid)
            const room = session.getPlayerRoom(uid)
            const players = session.getPlayersInRoom(room)

            for (const player of players) {
                if (player.uid === uid) {
                    io.to(player.socketId).emit('kicked', reason)
                } else {
                    io.to(player.socketId).emit('playerLeftRoom', uid)
                }
            }
            // player is already in session, kick them
            sessionManager.logOutPlayer(uid)
        }

        socket.on('joinRealm', async (realmData: z.infer<typeof JoinRealm>) => {
            const rejectJoin = (reason: string) => {
                socket.emit('failedToJoinRoom', reason)
                joiningInProgress.delete(socket.handshake.query.uid as string)
            }

            if (JoinRealm.safeParse(realmData).success === false) {
                return rejectJoin('Invalid request data.')
            }

            if (joiningInProgress.has(socket.handshake.query.uid as string)) {
                rejectJoin('Already joining a realm.')
            }
            joiningInProgress.add(socket.handshake.query.uid as string)

            const { data, error } = await supabase.from('realms').select('privacy_level, owner_id, share_id').eq('id', realmData.realmId).single()

            if (error || !data) {
            return rejectJoin('Realm not found.')
            }

            const realm = data

            const join = async () => {
                if (!sessionManager.getSession(realmData.realmId)) {
                    sessionManager.createSession(realmData.realmId)
                }

                const uid = socket.handshake.query.uid as string
                const currentSession = sessionManager.getPlayerSession(uid)
                if (currentSession) {
                    kickPlayer(uid, 'You have logged in from another location.')
                }

                const profile = await supabase.from('profiles').select('skin').eq('id', uid).single()
                let skin = defaultSkin
                if (profile.data) {
                    skin = profile.data.skin
                }

                const username = users.getUser(uid)!.user_metadata.full_name
                await sessionManager.addPlayerToSession(socket.id, realmData.realmId, uid, username, skin)
                const newSession = sessionManager.getPlayerSession(uid)
                const player = newSession.getPlayer(uid)   

                socket.join(realmData.realmId)
                socket.emit('joinedRealm')
                emit('playerJoinedRoom', player)
                joiningInProgress.delete(uid)
            }

            if (realm.owner_id === socket.handshake.query.uid) {
                return join()
            }

            if (realm.privacy_level === 'discord') {
                // TODO: Check if they are in discord 
                return rejectJoin('User is not in the Discord server.')
            } else if (realm.privacy_level === 'anyone') {
                if (realm.share_id === realmData.shareId) {
                    return join()
                } else {
                    return rejectJoin('The share link has been changed.')
                }
            }

           return rejectJoin('Unknown.')
        })

        // Handle a disconnection
        on('disconnect', Disconnect, ({ session, data }) => {
            const uid = socket.handshake.query.uid as string
            const socketIds = sessionManager.getSocketIdsInRoom(session.id, session.getPlayerRoom(uid))
            const success = sessionManager.logOutBySocketId(socket.id)
            if (success) {
                emitToSocketIds(socketIds, 'playerLeftRoom', uid)
                users.removeUser(uid)
            }
        })

        on('movePlayer', MovePlayer, ({ session, data }) => {  
            const player = session.getPlayer(socket.handshake.query.uid as string)
            player.x = data.x
            player.y = data.y
            emit('playerMoved', {
                uid: player.uid,
                x: player.x,
                y: player.y
            })
        })  

        on('teleport', Teleport, ({ session, data }) => {
            const uid = socket.handshake.query.uid as string
            const player = session.getPlayer(uid)
            player.x = data.x
            player.y = data.y
            if (player.room !== data.roomIndex) {
                emit('playerLeftRoom', uid)
                const session = sessionManager.getPlayerSession(uid)
                session.changeRoom(uid, data.roomIndex)
                emit('playerJoinedRoom', player)
            } else {
                emit('playerTeleported', { uid, x: player.x, y: player.y })
            }
        })

        on('changedSkin', ChangedSkin, ({ session, data }) => {
            const uid = socket.handshake.query.uid as string
            const player = session.getPlayer(uid)
            player.skin = data
            emit('playerChangedSkin', { uid, skin: player.skin })
        })

        on('sendMessage', NewMessage, ({ session, data }) => {
            // cannot exceed 300 characters
            if (data.length > 300) return

            const uid = socket.handshake.query.uid as string
            emit('receiveMessage', { uid, message: data })
        })
    })
}