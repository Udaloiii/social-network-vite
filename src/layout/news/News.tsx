import styled from "styled-components";
import {FC, useEffect, useMemo, useRef, useState} from "react";
import {FlexWrapper} from "@/components/flexWrapper/FlexWrapper";
import {ArticlesType, newsApi} from "@/api/news-api";
import {Pagination} from "@/components/pagination/Pagination";
import {CustomSelect} from "@/components/customSelect/CustomSelect";
import {Loader} from "@/components/loader/Loader";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "@/store/store";
import {setNewsAC} from "@/store/reducers/news-reducer";


export const News: FC = () => {
    const news = useSelector<AppStateType, ArticlesType[]>(state => state.news)
    const dispatch = useDispatch()
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

    const isMounted = useRef(false);

    useEffect(() => {
        if (!isMounted.current && news.length) {
            isMounted.current = true;
        } else {
            !news.length && newsApi.getNews()
                .then(res => {
                    // const filteredNews = res.data.articles.filter((article: ArticlesType) => {
                    //     // Регулярное выражение для проверки наличия русских символов
                    //     const russianRegex = /[а-яА-ЯЁё]/;
                    //     return russianRegex.test(article.description);
                    // });
                    console.log("USE-EFFECT В NEWS")
                    dispatch(setNewsAC(res.data.articles))
                })
        }
    }, [dispatch, news.length])
    return (
        <StyleNews>
            <CustomSelect title={"новостей на странице"} options={[10, 25, 50]} value={pageSize}
                          changePageSize={setPageSizeHandler}/>
            {news.length ? <>
                    <PaginationTopWrapper>
                        <Pagination totalCount={news.length} currentPage={currentPage} pageSize={pageSize}
                                    onPageChange={setCurrentPage}
                                    siblingCount={2}/>
                    </PaginationTopWrapper>
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
                    <PaginationBottomWrapper>
                        <Pagination totalCount={news.length} currentPage={currentPage} pageSize={pageSize}
                                    onPageChange={setCurrentPage} siblingCount={2}/>
                    </PaginationBottomWrapper>
                </>
                : <Loader/>
            }
        </StyleNews>

    )
}

const StyleNews = styled.section`
  position: relative;
  background-color: #c9ffeb;
  flex-grow: 1;

  padding: 20px;


  &:last-child {
    padding-bottom: 100px;
  }

  ${FlexWrapper} {
    padding-top: 20px;
    max-width: calc(100vw - 230px);

    &:nth-child(1) {
      padding-top: 50px;
    }
  }

`

const StyleImage = styled.img`
  width: 225px;
  height: 150px;
  object-fit: cover;
  border-radius: 5px;

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

const PaginationTopWrapper = styled.div`
  margin-left: -20px;
  padding-top: 20px;
`

const PaginationBottomWrapper = styled.div`
  position: absolute;
  bottom: 20px;
  left: 0;
`
