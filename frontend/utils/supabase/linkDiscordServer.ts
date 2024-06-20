'use server'
import 'server-only'
import { createClient } from '@supabase/supabase-js'
import { request } from '../backend/requests'

export async function linkDiscordServer(access_token: string, discord_server_id: string, realm_id: string) {
    const supabase = createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.SERVICE_ROLE!,
    )

    const { data: user, error: userError } = await supabase.auth.getUser(access_token)
    if (!user || !user.user) {
        return { error: userError }
    }

    const { data: ownerData, error: isOwnerError } = await request('/isOwnerOfServer', { access_token, serverId: discord_server_id })
    if (isOwnerError) {
        return { error: isOwnerError }
    }

    if (!ownerData || !ownerData.isOwner) {
        return { error: { error: 'You must be the owner of the server to link it to a realm!' } }
    }

    return { error: null }
}