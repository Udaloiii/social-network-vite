import {UserType} from "@/api/users-api";
import logo1 from "../../assets/avatars/9434726.jpg";
import logo2 from "../../assets/avatars/9434650.jpg";
import logo3 from "../../assets/avatars/9434619.jpg";
import logo4 from "../../assets/avatars/9434937.jpg";
import logo5 from "../../assets/avatars/9439682.jpg";
import logo6 from "../../assets/avatars/9439685.jpg";
import logo7 from "../../assets/avatars/9439727.jpg";
import logo8 from "../../assets/avatars/9439729.jpg";
import logo9 from "../../assets/avatars/9442242.jpg";
import logo10 from "../../assets/avatars/9441909.jpg";
import logo11 from "../../assets/avatars/9441812.jpg";
import logo12 from "../../assets/avatars/9441186.jpg";
import logo13 from "../../assets/avatars/9441106.jpg";
import logo14 from "../../assets/avatars/9439843.jpg";
import logo15 from "../../assets/avatars/9439833.jpg";
import logo16 from "../../assets/avatars/9439794.jpg";
import logo17 from "../../assets/avatars/9439775.jpg";
import logo18 from "../../assets/avatars/9439773.jpg";
import logo19 from "../../assets/avatars/9439767.jpg";
import logo20 from "../../assets/avatars/9439726.jpg";

type InitialStateType = {
    items: Array<UserType & { posts: string[], icon: string }>
    totalCount: number
    error: null | string
    pageSize: number
}

const logo = [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8, logo9, logo10, logo11, logo12, logo13, logo14, logo15, logo16, logo17, logo18, logo19, logo20]


const initialState = {} as InitialStateType

type ActionType =
    ReturnType<typeof setUsersAC>
    | ReturnType<typeof setUsersCountAC>
    | ReturnType<typeof changePageSizeAC>
export const usersReducer = (state = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case "SET-USERS": {
            // const usersCount = action.users.length;
            // console.log(`SET-USERS ${usersCount}`)
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
                return { ...el, icon: randomLogo, posts: ["some post"] }
            })
            }
        }

        case "CHANGE-PAGE-SIZE":
            return {...state, pageSize: action.pageSize}

        case "SET-USERS-COUNT":
            return {...state, totalCount: action.usersCount}
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