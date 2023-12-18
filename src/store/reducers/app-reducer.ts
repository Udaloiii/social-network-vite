export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed' // статусы для взаимодействия с сервером

export type AppType = {
    status: RequestStatusType,
    error: null | string,
    isInitialized: boolean
}

const initialState: AppType = {
    status: "idle",
    error: null,
    isInitialized: false
}

type ActionType =
    ReturnType<typeof setAppInitializedAC>
    | ReturnType<typeof setAppErrorAC>
    | ReturnType<typeof setAppStatusAC>
export const appReducer = (state = initialState, action: ActionType) => {
    switch (action.type) {
        case "SET-INITIALIZED-APP":
            return {...state, isInitialized: action.initialized}

        case "SET-APP-STATUS":
            return {...state, status: action.status}

        case "SET-APP-ERROR":
            return {...state, error: action.error}

        default:
            return state
    }
}

// Action creators
export const setAppInitializedAC = (initialized: boolean) => {
    return {type: "SET-INITIALIZED-APP", initialized} as const
}
export const setAppErrorAC = (error: string | null) => {
    return {type: "SET-APP-ERROR", error} as const
}
export const setAppStatusAC = (status: RequestStatusType) => {
    return {type: "SET-APP-STATUS", status} as const
}


// Thunks
// export const authMeTC = () => {
//     return (dispatch: Dispatch) => {
//         authApi.authMe()
//             .then(() => {
//                 dispatch(setInitializedAC(true))
//             })
//     }
// }
