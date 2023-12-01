import {MessagesType} from "@/api/messages-api";

const initialState: MessagesType[] = []
// Type ACTION
type ActionType = ReturnType<typeof setMessagesAC>

export const messagesReducer = (state = initialState, action: ActionType): MessagesType[] => {
    switch (action.type) {
        case "SET-MESSAGES":
            return [...action.messages]

        default:
            return state
    }
}


// Action creators
export const setMessagesAC = (messages: MessagesType[]) => {
    return {type: "SET-MESSAGES", messages} as const
}