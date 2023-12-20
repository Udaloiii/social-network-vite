import {Dispatch} from "redux";
import {authApi, LoginRequestType} from "@/api/auth-api";
import {setAppErrorAC, setAppInitializedAC, setAppStatusAC} from "@/store/reducers/app-reducer";


export type AuthStateType = {
    isLoggedIn: boolean
    myId: number
    name: string
}
const initialState = {
    isLoggedIn: false
} as AuthStateType

type ActionType = ReturnType<typeof logInAC> | ReturnType<typeof setMyInfoAC>
export const authReducer = (state = initialState, action: ActionType) => {
    switch (action.type) {
        case 'LOG-IN':
            return {...state, isLoggedIn: action.isLoggedIn}

        case 'SET-USER-INFO':
            return {...state, myId: action.id, name: action.name}

        default:
            return state
    }
}

// action creators
export const logInAC = (isLoggedIn: boolean) => {
    return {type: "LOG-IN", isLoggedIn} as const
}

export const setMyInfoAC = (id: number, name: string) => {
    return {type: "SET-USER-INFO", id, name} as const
}


// thunks

export const authMeTC = () => (dispatch: Dispatch) => {
    dispatch(setAppStatusAC("loading"))
    authApi.authMe()
        .then(res => {
            if (res.data.resultCode === 0) {
                dispatch(setAppInitializedAC(true))
                dispatch(logInAC(true))
                dispatch(setAppStatusAC("succeeded"))
                dispatch(setMyInfoAC(res.data.data.id, res.data.data.login))
            } else {
                dispatch(setAppInitializedAC(true))
                dispatch(setAppErrorAC(res.data.messages[0]))
                // handleAppError(res.data,dispatch)
                dispatch(logInAC(false))
            }
        })
        .catch(() => {
            dispatch(setAppInitializedAC(true))
            // handleServerError(err, dispatch)
            dispatch(logInAC(false))
        })
}
export const logInTC = (data: LoginRequestType) => (dispatch: Dispatch) => {
    dispatch(setAppStatusAC("loading"))
    authApi.login(data)
        .then(res => {
            if (res.data.resultCode === 0) {
                dispatch(logInAC(true))
                dispatch(setAppStatusAC("succeeded"))
                dispatch(setMyInfoAC(res.data.data.userId, ""))
            } else {
                dispatch(setAppErrorAC(res.data.messages[0]))
                // handleAppError(res.data,dispatch)
            }
        })
        .catch(() => {
            // handleServerError(err, dispatch)
        })
}
export const logOutTC = () => (dispatch: Dispatch) => {
    dispatch(setAppStatusAC("loading"))
    authApi.logOut()
        .then(res => {
            if (res.data.resultCode === 0) {
                dispatch(logInAC(false))
                dispatch(setAppStatusAC("succeeded"))
            } else {
                dispatch(setAppErrorAC(res.data.messages[0]))
                // handleAppError(res.data,dispatch)
            }
        })
        .catch(() => {
            // handleServerError(err, dispatch)
        })
}