import {combineReducers, legacy_createStore as createStore} from "redux";
import {postsReducer} from "@/store/reducers/posts-reducer";
import {usersReducer} from "@/store/reducers/users-reducer";

const mainReducer = combineReducers({
    posts: postsReducer,
    users: usersReducer
})
export const store = createStore(mainReducer)

export type AppStateType = ReturnType<typeof mainReducer>