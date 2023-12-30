import {ProfileResponseType, usersApi} from "@/api/users-api";
import {addPostAC, myPosts, PostType} from "@/store/reducers/users-reducer";
import {formattedDate} from "@/utils/getDate";
import {Dispatch} from "redux";
import {setAppErrorAC, setAppStatusAC} from "@/store/reducers/app-reducer";
import {logInAC, setMyInfoAC} from "@/store/reducers/auth-reducer";
import userAvatar from '../../assets/avatars/user.webp'

export type ProfileType = ProfileResponseType & {
    posts: PostType[],
    icon: string,
    country: string,
    city: string,
    dateOfBorn: string
}
const initialState: ProfileType = {} as ProfileType
// Type ACTION
type ActionType =
    ReturnType<typeof setProfileAC>
    | ReturnType<typeof addPostAC>
    | ReturnType<typeof addLikeAC>
    | ReturnType<typeof setMyInfoAC>


export const profileReducer = (state = initialState, action: ActionType): ProfileType => {
    switch (action.type) {
        case "SET-PROFILE":
            return {
                ...action.profile,
                // posts: action.id === 26652 ? myPosts : [{
                posts: myPosts,
                city: "",
                country: "",
                dateOfBorn: "",
                icon: "",
            }

        case "ADD-POST": {
            let count = state.posts.length

            const newPost: PostType = {
                id: ++count,
                text: action.text,
                icon: userAvatar,
                like: false,
                postTime: action.postTime,
                postDate: formattedDate
            }
            return {
                ...state, posts: [newPost, ...state.posts]
            }
        }

        case "ADD-LIKE":
            return {
                ...state,
                posts: state.posts.map(el => el.id === action.postId ? {...el, like: action.newValue} : el)
            }

        case "SET-USER-INFO":
            return {...state, fullName: action.name}
        default:
            return state
    }
}


// Action creators
export const setProfileAC = (id: number, profile: ProfileResponseType, image: string) => {
    return {type: "SET-PROFILE", id, profile, image} as const
}

// export const addLikeAC = (postId: number, newValue: boolean) => {
//     return {type: "ADD-LIKE", postId, newValue} as const
// }
export const addLikeAC = (userId: number, postId: number, newValue: boolean) => {
    return {type: "ADD-LIKE", userId, postId, newValue} as const
}

// Thunks
export const getProfileTC = (id: number, image: string) => (dispatch: Dispatch) => {
    dispatch(setAppStatusAC("loading"))
    usersApi.getMyProfile(id)
        .then(res => {
            if (res.data.userId) {
                dispatch(setProfileAC(res.data.userId, res.data, image))
                dispatch(logInAC(true))
                dispatch(setAppStatusAC("succeeded"))
            } else {
                dispatch(setAppErrorAC("user not found"))
                // handleAppError(res.data,dispatch)
            }
        })
        .catch(() => {
            // handleServerError(err, dispatch)
        })
}