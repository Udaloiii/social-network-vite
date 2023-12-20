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
import {addLikeAC} from "@/store/reducers/profile-reducer";

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

export type UserItemType = UserType & {
    posts: PostType[],
    icon: string,
    country: string,
    city: string,
    dateOfBorn: string
}
type UsersStateType = {
    items: UserItemType[]
    totalCount: number
    error: null | string
    pageSize: number
}

const logo = [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8, logo9, logo10, logo11, logo12, logo13, logo14, logo15, logo16, logo17, logo18, logo19, logo20]
const cities = [
    {country: "Japan", city: "Tokyo"},
    {country: "India", city: "Delhi"},
    {country: "China", city: "Shanghai"},
    {country: "Brazil", city: "Sao Paulo"},
    {country: "Mexico", city: "Mexico City"},
    {country: "Australia", city: "Melbourne"},
    {country: "India", city: "Mumbai"},
    {country: "China", city: "Beijing"},
    {country: "Japan", city: "Osaka"},
    {country: "Germany", city: "Berlin"},
    {country: "United States", city: "New York"},
    {country: "United States", city: "Los Angeles"},
    {country: "Argentina", city: "Buenos Aires"},
    {country: "Turkey", city: "Istanbul"},
    {country: "South Korea", city: "Seoul"},
    {country: "Spain", city: "Madrid"},
    {country: "United Kingdom", city: "Manchester"},
    {country: "Brazil", city: "Rio de Janeiro"},
    {country: "United Kingdom", city: "London"},
    {country: "France", city: "Paris"}
]
const ages = [
    "01.01.2004",
    "15.06.2003",
    "30.11.2002",
    "12.04.2001",
    "25.09.2000",
    "08.02.1999",
    "21.07.1998",
    "03.12.1997",
    "16.05.1996",
    "29.10.1995",
    "11.03.1994",
    "24.08.1993",
    "06.01.1992",
    "19.06.1991",
    "02.11.1990",
    "15.04.1989",
    "28.09.1988",
    "10.02.1987",
    "23.07.1986",
    "05.12.1985"
]
const timestamps = [
    "05.09.2023 19:33",
    "17.09.2023 10:15",
    "28.09.2023 08:45",
    "10.10.2023 14:20",
    "21.10.2023 16:55",
    "02.11.2023 12:30",
    "13.11.2023 21:05",
    "24.11.2023 18:10",
    "06.12.2023 22:40",
    "17.12.2023 11:25",
    "29.12.2023 17:50",
    "03.09.2023 09:05",
    "14.09.2023 13:45",
    "25.09.2023 20:15",
    "07.10.2023 15:00",
    "18.10.2023 09:45",
    "30.10.2023 16:30",
    "11.11.2023 22:55",
    "22.11.2023 11:40",
    "04.12.2023 18:25"
]


const initialState = {
    pageSize: 10,
    items: [] as UserItemType[]
} as UsersStateType

type ActionType =
    ReturnType<typeof setUsersAC>
    | ReturnType<typeof setUsersCountAC>
    | ReturnType<typeof changePageSizeAC>
    | ReturnType<typeof addPostAC>
    | ReturnType<typeof addLikeAC>


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
                    const {country} = cities[condition];
                    const {city} = cities[condition];
                    const dateOfBirth = ages[condition];
                    return {
                        ...el,
                        icon: el.id === 26652 ? "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?w=1480&t=st=1700817612~exp=1700818212~hmac=86a79fc7b83745f8e03378e58710b0b6c590f19d1d6a624ff5bc2227c790e259" : randomLogo,
                        posts: el.id === 26652 ? myPosts : [{
                            id: 1,
                            text: "Hello world!",
                            icon: randomLogo,
                            like: false,
                            postTime:"",
                            postDate: timestamps[condition]
                        }], city: city,
                        country: country,
                        dateOfBorn: dateOfBirth
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


        case "ADD-LIKE":
            return {
                ...state,
                items: state.items.map(el => el.id === action.userId ? {...el, posts: el.posts.map(el=> el.id === action.postId? {...el, like:action.newValue}: el)} : el)
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