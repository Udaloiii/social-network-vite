import {combineReducers, legacy_createStore as createStore} from "redux";
import {postsReducer} from "@/store/reducers/posts-reducer";
import {usersReducer} from "@/store/reducers/users-reducer";
import {messagesReducer} from "@/store/reducers/messages-reducer";

const mainReducer = combineReducers({
    posts: postsReducer,
    users: usersReducer,
    messages: messagesReducer
})
export const store = createStore(mainReducer)

export type AppStateType = ReturnType<typeof mainReducer>