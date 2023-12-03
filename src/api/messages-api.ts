import axios from "axios";

export type MessagesType = {
    postId?: number
    id: number
    name: string
    email?: string
    body: string
}
export const messagesApi = {
    getMessages: () => {
        // return axios.get<MessagesType[]>(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
        return axios.get<MessagesType[]>(`https://jsonplaceholder.typicode.com/comments`)
    }
}