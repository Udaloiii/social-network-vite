import {MessagesType} from "@/api/messages-api";
import {getTime} from "@/utils/getTime";
import logo1 from "@/assets/avatars/9434726.webp";
import logo2 from "@/assets/avatars/9434650.webp";
import logo3 from "@/assets/avatars/9434619.webp";
import logo4 from "@/assets/avatars/9434937.webp";
import logo5 from "@/assets/avatars/9439682.webp";
import logo6 from "@/assets/avatars/9439685.webp";
import logo7 from "@/assets/avatars/9439727.webp";
import logo8 from "@/assets/avatars/9439729.webp";
import logo9 from "@/assets/avatars/9442242.webp";
import logo10 from "@/assets/avatars/9441909.webp";
import logo11 from "@/assets/avatars/9441812.webp";
import logo12 from "@/assets/avatars/9441186.webp";
import logo13 from "@/assets/avatars/9441106.webp";
import logo14 from "@/assets/avatars/9439843.webp";
import logo15 from "@/assets/avatars/9439833.webp";
import logo16 from "@/assets/avatars/9439794.webp";
import logo17 from "@/assets/avatars/9439775.webp";
import logo18 from "@/assets/avatars/9439773.webp";
import logo19 from "@/assets/avatars/9439767.webp";
import logo20 from "@/assets/avatars/9439726.webp";

export type MessageStateType = MessagesType & { messageTime?: string, messageId: number, icon?: string }
const initialState: MessageStateType[] = []
// Type ACTION
type ActionType = ReturnType<typeof setMessagesAC> | ReturnType<typeof addMessageAC>
const logo = [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8, logo9, logo10, logo11, logo12, logo13, logo14, logo15, logo16, logo17, logo18, logo19, logo20]


const time = getTime(new Date)
export const messagesReducer = (state = initialState, action: ActionType): MessageStateType[] => {
    switch (action.type) {
        case "SET-MESSAGES": {
            return action.messages.map((el, index) => {
                let condition;
                if (index < 20) {
                    condition = index;
                } else {
                    const remaining = index - 19;
                    condition = 19 - (remaining % 20);
                }
                const randomLogo = logo[condition];
                return ({...el, messageTime: time, messageId: el.id * 1000, icon: randomLogo})
            })
        }

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
