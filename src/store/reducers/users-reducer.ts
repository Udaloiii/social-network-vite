import {UserType} from "@/api/users-api";
import logo1 from "../../assets/avatars/9434726.webp";
import logo2 from "../../assets/avatars/9434650.webp";
import logo3 from "../../assets/avatars/9434619.webp";
import logo4 from "../../assets/avatars/9434937.webp";
import logo5 from "../../assets/avatars/9439682.webp";
import logo6 from "../../assets/avatars/9439685.webp";
import logo7 from "../../assets/avatars/9439727.webp";
import logo8 from "../../assets/avatars/9439729.webp";
import logo9 from "../../assets/avatars/9442242.webp";
import logo10 from "../../assets/avatars/9441909.webp";
import logo11 from "../../assets/avatars/9441812.webp";
import logo12 from "../../assets/avatars/9441186.webp";
import logo13 from "../../assets/avatars/9441106.webp";
import logo14 from "../../assets/avatars/9439843.webp";
import logo15 from "../../assets/avatars/9439833.webp";
import logo16 from "../../assets/avatars/9439794.webp";
import logo17 from "../../assets/avatars/9439775.webp";
import logo18 from "../../assets/avatars/9439773.webp";
import logo19 from "../../assets/avatars/9439767.webp";
import logo20 from "../../assets/avatars/9439726.webp";
import {formattedDate} from "@/utils/getDate";
import {getTime} from "@/utils/getTime";

export const myPosts: PostType[] = [
    {
        id: 3,
        text: "Happy New Year!",
        icon: "https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?w=1480&t=st=1700921035~exp=1700921635~hmac=a6d703041353ad885129e43f3d616e5fe53eed506ee299a6f22dab162db6d027",
        like: true,
        postTime: "19:33",
        postDate: "31.12.2023"
    },
    {
        id: 2,
        text: "See new mem, bro",
        icon: "https://img.freepik.com/free-psd/3d-illustration-person-with-punk-hair-jacket_23-2149436198.jpg?t=st=1700922334~exp=1700922934~hmac=bf095f187f9966805c1ee2017edaa4057ad115ad19a54ba5188ce400bbfb1776",
        like: false,
        postTime: "12:21",
        postDate: "02.12.2023"
    },
    {
        id: 1,
        text: "Hello, man) How are you?",
        icon: "https://img.freepik.com/free-psd/3d-illustration-person-with-glasses_23-2149436191.jpg?t=st=1700922334~exp=1700922934~hmac=cdd04dceb11d1ec2e8d580a93c346d4a9031a0f83b0750311582fc1251abf81c",
        like: true,
        postTime: "10:07",
        postDate: "01.12.2023"
    }]

export type PostType = {
    id: number
    text: string
    icon: string
    like?: boolean
    postTime?: string
    postDate?: string
}

export type UserItemType = UserType & { posts: PostType[], icon: string }
type UsersStateType = {
    items: UserItemType[]
    totalCount: number
    error: null | string
    pageSize: number
}

const logo = [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8, logo9, logo10, logo11, logo12, logo13, logo14, logo15, logo16, logo17, logo18, logo19, logo20]


const initialState = {
    pageSize: 10,
    items: [] as UserItemType[]
} as UsersStateType

type ActionType =
    ReturnType<typeof setUsersAC>
    | ReturnType<typeof setUsersCountAC>
    | ReturnType<typeof changePageSizeAC>
    | ReturnType<typeof addPostAC>


export const usersReducer = (state = initialState, action: ActionType): UsersStateType => {
    switch (action.type) {
        case "SET-USERS": {
            return {
                ...state, items: action.users.map((el, index) => {
                    let condition;
                    if (index < 20) {
                        condition = index;
                    } else {
                        const remaining = index - 19;
                        condition = 19 - (remaining % 20);
                    }
                    const randomLogo = logo[condition];
                    return {
                        ...el,
                        icon: el.id === 26652 ? "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?w=1480&t=st=1700817612~exp=1700818212~hmac=86a79fc7b83745f8e03378e58710b0b6c590f19d1d6a624ff5bc2227c790e259" : randomLogo,
                        posts: el.id === 26652 ? myPosts : [{
                            id: 1,
                            text: "Hello world!",
                            icon: randomLogo,
                            like: false,
                            postTime: getTime(new Date),
                            postDate: formattedDate
                        }]
                    }
                })
            }
        }

        case "CHANGE-PAGE-SIZE":
            return {...state, pageSize: action.pageSize}

        case "SET-USERS-COUNT":
            return {...state, totalCount: action.usersCount}

        case "ADD-POST": {
            let count = 0
            const user = state.items.find(el => el.id === action.id);

            if (user) {
                count = user.posts.length
            }

            const newPost: PostType = {
                id: ++count,
                text: action.text,
                icon: "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?w=1480&t=st=1700817612~exp=1700818212~hmac=86a79fc7b83745f8e03378e58710b0b6c590f19d1d6a624ff5bc2227c790e259",
                like: false,
                postTime: action.postTime,
                postDate: formattedDate
            }
            return {
                ...state,
                items: state.items.map(el => el.id === action.id ? {...el, posts: [newPost, ...el.posts]} : el)
            }
        }

        default:
            return state
    }
}

// Action creators
export const setUsersAC = (users: UserType[]) => {
    return {type: "SET-USERS", users} as const
}

export const setUsersCountAC = (usersCount: number) => {
    return {type: "SET-USERS-COUNT", usersCount} as const
}

export const changePageSizeAC = (pageSize: number) => {
    return {type: "CHANGE-PAGE-SIZE", pageSize} as const
}

export const addPostAC = (id: number, text: string, postTime: string) => {
    return {type: "ADD-POST", id, text, postTime} as const
}