import {instance} from "@/api/general-axios-instace";

type GeneralAuthResponseType<T = object> = {
    resultCode: number
    messages: string []
    data: T
}

export type LoginRequestType = {
    email: string
    password: string
    rememberMe?: boolean
    captcha?: boolean
}

export const authApi = {
    authMe() {
        return instance.get<GeneralAuthResponseType<{
            id: number
            email: string
            login: string
        }>>("auth/me")
    },
    login(data: LoginRequestType) {
        return instance.post<GeneralAuthResponseType<{ userId: number }>>("auth/login", data)
    },
    logOut() {
        return instance.delete<GeneralAuthResponseType>("auth/login")
    }
}