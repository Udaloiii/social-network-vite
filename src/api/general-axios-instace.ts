import axios from "axios";


export const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': 'bfb2a9e7-51b4-4737-9da8-c82e19cdd77e'
    }
})