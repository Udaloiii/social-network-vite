import styled from "styled-components";
import {FC, useEffect, useState} from "react";
import { FlexWrapper } from "../../components/flexWrapper/FlexWrapper";


type ArticlesType = {
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
export const News: FC = () => {
    const [news, setNews] = useState<null | ArticlesType[]>(null)
    useEffect(() => {
        fetch("https://newsapi.org/v2/everything?q=tesla&from=2023-10-22&sortBy=publishedAt&apiKey=fa43ff6276f44c29aed1a8510204d829")
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setNews(data.articles)
            })
        // .then(res => setNews(res))

    }, [])
    return (
        <StyleNews>
            <FlexWrapper direction={"column"} gap={"30px"}>
                {news?.map((el, index) => {
                    return <div key={index}>
                        {el.description}
                    </div>
                })}
            </FlexWrapper>
        </StyleNews>
    )
}

const StyleNews = styled.section`
  background-color: #efb4b4;
  flex-grow: 1;
`