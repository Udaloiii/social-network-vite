import styled from "styled-components";
import {FC, useEffect, useState} from "react";
import {FlexWrapper} from "../../components/flexWrapper/FlexWrapper";
import {ArticlesType, newsApi} from "../../api/news-api";



export const News: FC = () => {
    const [news, setNews] = useState<null | ArticlesType[]>(null)
    useEffect(() => {
        newsApi.getNews()
            .then(res => {
                // const filteredNews = res.data.articles.filter((article: ArticlesType) => {
                //     // Регулярное выражение для проверки наличия русских символов
                //     const russianRegex = /[а-яА-ЯЁё]/;
                //     return russianRegex.test(article.description);
                // });
                console.log(res.data.articles)
                // setNews(filteredNews);
                setNews(res.data.articles);
            })
    }, [])
    return (
        <StyleNews>
            <FlexWrapper direction={"column"} gap={"30px"}>
                {news?.map((el, index) => {
                    return <div key={index}>
                        <FlexWrapper  gap={"20px"}>
                            <StyleImage src={el.urlToImage} alt=""/>
                            <FlexWrapper direction={"column"} gap={"20px"}>
                                {el.description}
                                <StyleLink href={el.url} target={"_blank"}>подробнее</StyleLink>
                            </FlexWrapper>
                    </FlexWrapper>

                    </div>
                })}
            </FlexWrapper>
        </StyleNews>
    )
}

const StyleNews = styled.section`
  background-color: #dbfff3;
  flex-grow: 1;

  &:last-child {
    padding-bottom: 15px;
  }

  ${FlexWrapper} {
    margin: 0 10px;

    &:nth-child(1) {
      margin-top: 15px;
    }
  }
`

const StyleImage = styled.img`
  width: 225px;
  height: 150px;
  object-fit: cover;
  border-radius: 4px;
  

`
const StyleLink = styled.a`
  color: #2e3288;
  transition: .2s;
  width: max-content;

  &:hover {
    color: #5559e5;
    transition: .2s;
  }
`