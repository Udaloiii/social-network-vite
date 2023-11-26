import {combineReducers, legacy_createStore as createStore} from "redux";
import {postsReducer} from "@/store/reducers/posts-reducer";

const mainReducer = combineReducers({
    posts: postsReducer
})
export const store = createStore(mainReducer)

export type AppStateType = ReturnType<typeof mainReducer>