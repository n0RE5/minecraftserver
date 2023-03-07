import { $authHost } from "./http"

export const banUser = async (userId: number, banTime: string, reason: string, bannedBy: string) => {
    const ban = $authHost.post('/bans/ban', {userId, banTime, reason, bannedBy})
    return ban
}

export const getAllBans = async (userId: number) => {
    const bans = $authHost.get(`/bans/${userId}`)
    return bans
}