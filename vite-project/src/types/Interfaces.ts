export interface IUser {
    id: number,
    username: string,
    email: string,
    roles: any[],
}

export interface IRootReducer {
    userReducer: {
        isAuth: boolean,
        user: IUser
    }
}

export interface IBan {
    createdAt: string
    expiresIn: string
    bannedBy: string
    status: string
    reason: string
}