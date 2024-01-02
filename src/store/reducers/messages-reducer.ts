import {MessagesType} from "@/api/messages-api";
import {getTime} from "@/utils/getTime";

export type MessageStateType = MessagesType & { messageTime?: string, messageId: number }
const initialState: MessageStateType[] = []
// Type ACTION
type ActionType = ReturnType<typeof setMessagesAC> | ReturnType<typeof addMessageAC>


const time = getTime(new Date)
export const messagesReducer = (state = initialState, action: ActionType): MessageStateType[] => {
    switch (action.type) {
        case "SET-MESSAGES":
            return action.messages.map(el => ({...el, messageTime: time, messageId: el.id * 1000}))

        case "ADD-MESSAGE": {
            const newMessage: MessageStateType = {
                id: action.id,
                name: action.name,
                body: action.text,
                messageTime: action.messageTime,
                messageId: action.messageId
            }
            return [...state, newMessage]
        }

        default:
            return state
    }
}


// Action creators
export const setMessagesAC = (messages: MessagesType[]) => {
    return {type: "SET-MESSAGES", messages} as const
}

export const addMessageAC = (id: number,name: string, messageId: number, text: string, messageTime: string) => {
    return {type: "ADD-MESSAGE", id, text,name,  messageId, messageTime} as const
}
