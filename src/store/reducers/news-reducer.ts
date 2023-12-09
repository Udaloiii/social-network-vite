import {ArticlesType} from "@/api/news-api";

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