import {MessagesType} from "@/api/messages-api";

const initialState: MessagesType[] = []
// Type ACTION
type ActionType = ReturnType<typeof setMessagesAC> | ReturnType<typeof addMessageAC>

export const messagesReducer = (state = initialState, action: ActionType): MessagesType[] => {
    switch (action.type) {
        case "SET-MESSAGES":
            return [...action.messages]

        case "ADD-MESSAGE": {
            const newMessage: MessagesType = {id: action.idMessage, name: "Username", body: action.text}
            const copyState = state
            copyState.push(newMessage)
            console.log(copyState)
            return copyState  // надо сделать правильно, стейт - массив массивов, в которых лежат сообщения MessagesType
        }

        default:
            return state
    }
}


// Action creators
export const setMessagesAC = (messages: MessagesType[]) => {
    return {type: "SET-MESSAGES", messages} as const
}

export const addMessageAC = (idMessage: number, text: string) => {
    return {type: "ADD-MESSAGE", idMessage, text} as const
}