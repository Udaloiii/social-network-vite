import {instance} from "@/api/general-axios-instace";


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

export const usersApi = {
    getUsers(usersCount: number, currentPage: number) {
        return instance.get<UsersResponseType>(`users/?count=${usersCount}&page=${currentPage}`)
    },
    getMyProfile(id: number) {
        return instance.get<ProfileResponseType>(`profile/${id}`)
    }
}