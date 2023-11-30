import axios from "axios";


export type UserType = {
    name: string
    id: number
    photos: {
        "small": null,
        "large": null
    },
    status: null | string
    followed: boolean
}

export type UserResponseType = {
    items: UserType[]
    totalCount: number
    error: null | string
}
const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': 'bfb2a9e7-51b4-4737-9da8-c82e19cdd77e'
    }
})

export const usersApi = {
    getUser(usersCount: number, currentPage: number) {
        return instance.get<UserResponseType>(`users/?count=${usersCount}&page=${currentPage}`)
    }
}