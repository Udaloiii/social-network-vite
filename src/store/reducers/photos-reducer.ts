import {Dispatch} from "redux";
import {setAppStatusAC} from "@/store/reducers/app-reducer";
import {photosApi, PhotosDataType, PhotoType} from "@/api/photo-api";

const initialState = {} as PhotosDataType
// Type ACTION
type ActionType = ReturnType<typeof setPhotosAC>

export const photosReducer = (state = initialState, action: ActionType): PhotosDataType => {
    switch (action.type) {
        case "SET-PHOTOS":
            return {...state, hits: action.photos}
        default:
            return state
    }
}


// Action creators
export const setPhotosAC = (photos: PhotoType[]) => {
    return {type: "SET-PHOTOS", photos} as const
}

// Thunk
export const getPhotosTC = (pageSize:number) => (dispatch: Dispatch) => {
    dispatch(setAppStatusAC("loading"))
    photosApi.getPhotos(pageSize)
        .then(res => {
            dispatch(setAppStatusAC("succeeded"))
            dispatch(setPhotosAC(res.data.hits))
        })
        .catch(() => {
            // handleServerError(err, dispatch)
        })
}