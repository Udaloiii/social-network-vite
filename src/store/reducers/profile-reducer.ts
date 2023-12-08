import {ProfileResponseType} from "@/api/users-api";
import {addPostAC, myPosts, PostType} from "@/store/reducers/users-reducer";
import {formattedDate} from "@/utils/getDate";
import {getTime} from "@/utils/getTime";

export type ProfileType = ProfileResponseType & { posts: PostType[] }
const initialState: ProfileType = {} as ProfileType
// Type ACTION
type ActionType = ReturnType<typeof setProfileAC> | ReturnType<typeof addPostAC> | ReturnType<typeof addLikeAC>


export const profileReducer = (state = initialState, action: ActionType): ProfileType => {
    switch (action.type) {
        case "SET-PROFILE":
            return {
                ...action.profile, posts: action.id === 26652 ? myPosts : [{
                    id: 1,
                    text: "Hello world!",
                    icon: action.image,
                    like: false,
                    postTime: getTime(new Date()),
                    postDate: formattedDate
                }]
            }

        case "ADD-POST": {
            let count = state.posts.length

            const newPost: PostType = {
                id: ++count,
                text: action.text,
                icon: "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?w=1480&t=st=1700817612~exp=1700818212~hmac=86a79fc7b83745f8e03378e58710b0b6c590f19d1d6a624ff5bc2227c790e259",
                like: false,
                postTime: action.postTime,
                postDate: formattedDate
            }
            return {
                ...state, posts: [newPost, ...state.posts]
            }
        }

        case "ADD-LIKE":
            // debugger
            return {
                ...state,
                posts: state.posts.map(el => el.id === action.postId ? {...el, like: action.newValue} : el)
            }

        default:
            return state
    }
}


// Action creators
export const setProfileAC = (id: number, profile: ProfileResponseType, image: string) => {
    return {type: "SET-PROFILE", id, profile, image} as const
}

export const addLikeAC = (postId: number, newValue: boolean) => {
    return {type: "ADD-LIKE", postId, newValue} as const
}