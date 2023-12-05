import {MessagesType} from "@/api/messages-api";
import {getTime} from "@/utils/getTime";

const initialState: MessagesType[] = []
// Type ACTION
type ActionType = ReturnType<typeof setMessagesAC> | ReturnType<typeof addMessageAC>


const time = getTime(new Date)
export const messagesReducer = (state = initialState, action: ActionType): MessagesType[] => {
    switch (action.type) {
        case "SET-MESSAGES":
            return action.messages.map(el => ({...el, messageTime: time}))

        case "ADD-MESSAGE": {
            const newMessage: MessagesType = {
                id: action.idMessage,
                name: "Username",
                body: action.text,
                messageTime: action.messageTime
            }
            const copyState = [...state, newMessage]
            console.log(copyState)
            return copyState
        }

        default:
            return state
    }
}


// Action creators
export const setMessagesAC = (messages: MessagesType[]) => {
    return {type: "SET-MESSAGES", messages} as const
}

export const addMessageAC = (idMessage: number, text: string, messageTime: string) => {
    return {type: "ADD-MESSAGE", idMessage, text, messageTime} as const
}
