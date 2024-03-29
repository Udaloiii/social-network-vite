import axios from "axios";

export type PhotoType = {
    "id": number
    "pageURL": string
    "type": string
    "tags": string
    "previewURL": string
    "previewWidth": number
    "previewHeight": number
    "webformatURL": string
    "webformatWidth": number
    "webformatHeight": number
    "largeImageURL": string
    "fullHDURL": string
    "imageURL": string
    "imageWidth": number
    "imageHeight": number
    "imageSize": number
    "views": number
    "downloads": number
    "likes": number
    "comments": 2,
    "user_id": number
    "user": string
    "userImageURL": string
}

export type PhotosDataType = {
    total: number
    totalHits: number
    "hits": PhotoType[]
}

const apiKey = "41919354-56814b908f1736074059e88af"
export const photosApi = {
    getPhotos: () => {
        return axios.get<PhotosDataType>(`https://pixabay.com/api/?key=${apiKey}&q=adventure&image_type=photo&lang=ru&per_page=200`)
    }
}