import axios from "axios";

export type ArticlesType = {
    author: string
    content: string
    description: string
    publishedAt: string
    source: string
    title: string
    url: string
    urlToImage: string
}

export type DataType = {
    articles: ArticlesType[]
    status: string
    totalResults: number
}

const instance = axios.create({
    baseURL: "https://newsapi.org/v2/everything?q=all&language=ru&sortBy=publishedAt",
    headers: {
        "X-Api-Key": "fa43ff6276f44c29aed1a8510204d829"
    }
})

export const newsApi = {
    getNews: () => {
        return instance.get<DataType>("")
    }
}