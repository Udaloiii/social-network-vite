import styled from "styled-components";
import {FC, useEffect, useMemo, useState} from "react";
import {FlexWrapper} from "@/components/flexWrapper/FlexWrapper";
import {ArticlesType, newsApi} from "@/api/news-api";
import {Pagination} from "@/components/pagination/Pagination";
import {Loader} from "@/components/loader/Loader";
import {CustomSelect} from "@/components/customSelect/CustomSelect";


export const News: FC = () => {
    const [news, setNews] = useState<null | ArticlesType[]>(null)
    const [currentPage, setCurrentPage] = useState<number>(1)
    const [pageSize, setPageSize] = useState(10)


    const currentTableData = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * pageSize;
        const lastPageIndex = firstPageIndex + pageSize;
        return news?.slice(firstPageIndex, lastPageIndex);
    }, [news, currentPage, pageSize])

    const setPageSizeHandler = (pageSize: number) => {
        setPageSize(pageSize)
        setCurrentPage(1)
    }
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
        news ? <StyleNews>
                    <CustomSelect title={"новостей на странице"} options={[10, 25, 50]} value={pageSize}
                                  changePageSize={setPageSizeHandler}/>
                <FlexWrapper direction={"column"} gap={"30px"}>
                    {currentTableData?.map((el, index) => {
                        return <div key={index}>
                            <FlexWrapper gap={"20px"}>
                                <StyleImage src={el.urlToImage} alt=""/>
                                <FlexWrapper direction={"column"} gap={"20px"}>
                                    {el.description}
                                    <StyleLink href={el.url} target={"_blank"}>подробнее</StyleLink>
                                </FlexWrapper>
                            </FlexWrapper>

                        </div>
                    })}
                </FlexWrapper>
                <PaginationWrapper>
                    <Pagination totalCount={news.length} currentPage={currentPage} pageSize={pageSize}
                                onPageChange={setCurrentPage} siblingCount={2}/>
                </PaginationWrapper>
            </StyleNews>
            : <Loader/>
    )
}

const StyleNews = styled.section`
  position: relative;
  background-color: #dbfff3;
  flex-grow: 1;
  width: calc(100vw - 150px);

  &:last-child {
    padding-bottom: 70px;
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

const PaginationWrapper = styled.div`
  position: absolute;
  bottom: 10px;
`
