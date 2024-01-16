import {ArticlesType, newsApi} from "@/api/news-api";
import {Dispatch} from "redux";
import {setAppStatusAC} from "@/store/reducers/app-reducer";

const initialState = [] as ArticlesType[]
// Type ACTION
type ActionType = ReturnType<typeof setNewsAC>

export const newsReducer = (state = initialState, action: ActionType): ArticlesType[] => {
    switch (action.type) {
        case "SET-NEWS":
            return action.news
        default:
            return state
    }
}


// Action creators
export const setNewsAC = (news: ArticlesType[]) => {
    return {type: "SET-NEWS", news} as const
}

// Thunk
export const getNewsTC = () => (dispatch: Dispatch) => {
    dispatch(setAppStatusAC("loading"))
    newsApi.getNews()
        .then(res => {
            dispatch(setAppStatusAC("succeeded"))
            dispatch(setNewsAC(res.data.articles))
        })
        .catch(() => {
            // handleServerError(err, dispatch)
        })
}