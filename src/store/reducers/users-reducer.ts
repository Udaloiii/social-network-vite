import {UserResponseType, UserType} from "@/api/users-api";

// const initialState: UserType[] = []

const initialState = {} as UserResponseType

type ActionType = ReturnType<typeof setUsersAC> | ReturnType<typeof setUsersCountAC>
export const usersReducer = (state = initialState, action: ActionType) => {
    switch (action.type) {
        case "SET-USERS":
            return {...state, items: action.users}
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