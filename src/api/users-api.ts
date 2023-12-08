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
export type ProfileResponseType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: {
        github: string
        vk: string
        facebook: string
        instagram: string
        twitter: string
        website: string
        youtube: string
        mainLink: string
    }
    photos: {
        small: string
        large: string
    }
}

export type UsersResponseType = {
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
    getUsers(usersCount: number, currentPage: number) {
        return instance.get<UsersResponseType>(`users/?count=${usersCount}&page=${currentPage}`)
    },
    getMyProfile(id: number) {
        return instance.get<ProfileResponseType>(`profile/${id}`)
    }
}