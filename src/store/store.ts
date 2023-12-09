import {combineReducers, legacy_createStore as createStore} from "redux";
// import {postsReducer} from "@/store/reducers/posts-reducer";
import {usersReducer} from "@/store/reducers/users-reducer";
import {messagesReducer} from "@/store/reducers/messages-reducer";
import {profileReducer} from "@/store/reducers/profile-reducer";
import {newsReducer} from "@/store/reducers/news-reducer";

const mainReducer = combineReducers({
    // posts: postsReducer,
    users: usersReducer,
    messages: messagesReducer,
    profile: profileReducer, // потом можно убрать
    news: newsReducer
})
export const store = createStore(mainReducer)

export type AppStateType = ReturnType<typeof mainReducer>

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
window.store = store
