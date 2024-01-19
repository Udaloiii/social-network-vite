import {Action, applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";
import {usersReducer} from "@/store/reducers/users-reducer";
import {messagesReducer} from "@/store/reducers/messages-reducer";
import {profileReducer} from "@/store/reducers/profile-reducer";
import {newsReducer} from "@/store/reducers/news-reducer";
import {appReducer} from "@/store/reducers/app-reducer";
import {authReducer} from "@/store/reducers/auth-reducer";
import thunk, {ThunkDispatch} from "redux-thunk";
import {useDispatch} from "react-redux";
import {photosReducer} from "@/store/reducers/photos-reducer";

const mainReducer = combineReducers({
    // posts: postsReducer,
    app: appReducer,
    auth: authReducer,
    users: usersReducer,
    messages: messagesReducer,
    profile: profileReducer, // потом можно убрать
    news: newsReducer,
    photos: photosReducer
})
export const store = createStore(mainReducer, applyMiddleware(thunk))

export type AppStateType = ReturnType<typeof mainReducer>

type AppDispatchType = ThunkDispatch<AppStateType, never, Action> // вместо any поставил never (ругалось)
export const useAppDispatch = () => useDispatch<AppDispatchType>()

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
window.store = store
