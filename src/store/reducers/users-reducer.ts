import {UserType} from "@/api/users-api";

const initialState: UserType[] = []

type ActionType = ReturnType<typeof setUsersAC>
export const usersReducer = (state = initialState, action: ActionType) => {
    switch (action.type) {
        case "SET-USERS":
            return action.users
        default:
            return state
    }
}

// Action creators
export const setUsersAC = (users: UserType[]) => {
    return {type: "SET-USERS", users} as const
}