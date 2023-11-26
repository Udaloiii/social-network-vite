export type PostType = {
    id: number
    text: string
    icon: string
    like?: boolean
}


const initialState: PostType[] = [
    {
        id: 1,
        text: "Hello, man) How are you?",
        icon: "https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?w=1480&t=st=1700921035~exp=1700921635~hmac=a6d703041353ad885129e43f3d616e5fe53eed506ee299a6f22dab162db6d027",
        like: true
    },
    {
        id: 2,
        text: "See new mem, bro",
        icon: "https://img.freepik.com/free-psd/3d-illustration-person-with-punk-hair-jacket_23-2149436198.jpg?t=st=1700922334~exp=1700922934~hmac=bf095f187f9966805c1ee2017edaa4057ad115ad19a54ba5188ce400bbfb1776",
        like: false
    },
    {
        id: 3,
        text: "Happy New Year!",
        icon: "https://img.freepik.com/free-psd/3d-illustration-person-with-glasses_23-2149436191.jpg?t=st=1700922334~exp=1700922934~hmac=cdd04dceb11d1ec2e8d580a93c346d4a9031a0f83b0750311582fc1251abf81c",
        like: true
    }]

// Type ACTION
type ActionType = ReturnType<typeof addPostAC> | ReturnType<typeof addLikeAC>

export const postsReducer = (state = initialState, action: ActionType) => {
    switch (action.type) {
        case 'ADD-POST': {
            const newPost: PostType = {
                id: state.length + 1,
                text: action.text,
                icon: "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?w=1480&t=st=1700817612~exp=1700818212~hmac=86a79fc7b83745f8e03378e58710b0b6c590f19d1d6a624ff5bc2227c790e259",
                like: false
            }
            return [newPost, ...state]
        }

        case "ADD-LIKE":
            return state.map(el => action.id === el.id ? {...el, like: action.newValue} : el)

        default:
            return state
    }
}


// Action creators
export const addPostAC = (text: string) => {
    return {type: "ADD-POST", text} as const
}
export const addLikeAC = (id: number, newValue: boolean) => {
    return {type: "ADD-LIKE", id, newValue} as const
}