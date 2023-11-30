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

type DataType = {
    articles: ArticlesType[]
    status: string
    totalResults: number
}
export const newsApi = {
    getNews: () => {
        // return axios.get<DataType>("https://newsapi.org/v2/everything?q=all&language=ru&pageSize=10&sortBy=publishedAt&apiKey=fa43ff6276f44c29aed1a8510204d829")
        return axios.get<DataType>("https://newsapi.org/v2/everything?q=all&language=ru&sortBy=publishedAt&apiKey=fa43ff6276f44c29aed1a8510204d829")
    }
}