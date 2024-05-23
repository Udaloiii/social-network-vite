import styled from "styled-components";
import {FC, useEffect, useMemo, useRef, useState} from "react";
import {FlexWrapper} from "@/components/flexWrapper/FlexWrapper";
import {messagesApi, MessagesType} from "@/api/messages-api";
import {Pagination} from "@/components/pagination/Pagination";
import {CustomSelect} from "@/components/customSelect/CustomSelect";
import {UserForMessage} from "@/layout/messages/message/UserForMessage";
import {useSelector} from "react-redux";
import {AppStateType, useAppDispatch} from "@/store/store";
import {setMessagesAC} from "@/store/reducers/messages-reducer";
import {Loader} from "@/components/loader/Loader";
import {Navigate} from "react-router-dom";
import logo1 from "@/assets/avatars/9434726.webp";
import logo2 from "@/assets/avatars/9434650.webp";
import logo3 from "@/assets/avatars/9434619.webp";
import logo4 from "@/assets/avatars/9434937.webp";
import logo5 from "@/assets/avatars/9439682.webp";
import logo6 from "@/assets/avatars/9439685.webp";
import logo7 from "@/assets/avatars/9439727.webp";
import logo8 from "@/assets/avatars/9439729.webp";
import logo9 from "@/assets/avatars/9442242.webp";
import logo10 from "@/assets/avatars/9441909.webp";
import logo11 from "@/assets/avatars/9441812.webp";
import logo12 from "@/assets/avatars/9441186.webp";
import logo13 from "@/assets/avatars/9441106.webp";
import logo14 from "@/assets/avatars/9439843.webp";
import logo15 from "@/assets/avatars/9439833.webp";
import logo16 from "@/assets/avatars/9439794.webp";
import logo17 from "@/assets/avatars/9439775.webp";
import logo18 from "@/assets/avatars/9439773.webp";
import logo19 from "@/assets/avatars/9439767.webp";
import logo20 from "@/assets/avatars/9439726.webp";


export const Messages: FC = () => {
    const isInitialized = useSelector<AppStateType, boolean>(state => state.auth.isLoggedIn)
    const messages = useSelector<AppStateType, MessagesType[]>(state => state.messages)
    const dispatch = useAppDispatch()
    const [currentPage, setCurrentPage] = useState<number>(1)
    const [pageSize, setPageSize] = useState(10)


    const currentTableData = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * pageSize;
        const lastPageIndex = firstPageIndex + pageSize;
        return messages?.slice(firstPageIndex, lastPageIndex);
    }, [messages, currentPage, pageSize])


    const setPageSizeHandler = (pageSize: number) => {
        setPageSize(pageSize)
        setCurrentPage(1)
    }

    const logo = [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8, logo9, logo10, logo11, logo12, logo13, logo14, logo15, logo16, logo17, logo18, logo19, logo20]

    const isMounted = useRef(false) // для проверки, был ли вмонтирован компонент, чтобы не делать лишние запросы на сервак
    useEffect(() => {
        if (!isMounted.current && messages.length) {
            isMounted.current = true;
        } else {
            !messages.length && messagesApi.getMessages()
                .then(res => {
                    dispatch(setMessagesAC(res.data))
                })
        }
    }, [messages.length, dispatch]);

    if (!isInitialized) {
        return <Navigate to={'/login'}/>
    }

    return (
        <StyleMessages>
            <CustomSelect title={"сообщений"} value={pageSize} options={[10, 25, 50]}
                          changePageSize={setPageSizeHandler}/>
            {
                messages.length ? <>
                        <PaginationTopWrapper>
                            <Pagination totalCount={messages.length} currentPage={currentPage} pageSize={pageSize}
                                        onPageChange={setCurrentPage} siblingCount={2}/>
                        </PaginationTopWrapper>

                        <FlexWrapper direction={"column"} gap={"30px"}>
                            {currentTableData?.map((el, index) => {
                                let condition;
                                if (index < 20) {
                                    condition = index;
                                } else {
                                    const remaining = index - 19;
                                    condition = 19 - (remaining % 20);
                                }
                                const randomIcon = logo[condition];
                                return <UserForMessage key={el.id} id={el.id} name={el.name} text={el.body} icon={randomIcon}/>
                            })}
                        </FlexWrapper>

                        <PaginationBottomWrapper>
                            <Pagination totalCount={messages.length} currentPage={currentPage} pageSize={pageSize}
                                        onPageChange={setCurrentPage} siblingCount={2}/>
                        </PaginationBottomWrapper>
                    </>
                    : <Loader/>
            }
        </StyleMessages>
    )
}

const StyleMessages = styled.section`
  position: relative;
  flex-grow: 1;
  //width: calc(100vw - 150px);
  padding: 20px;
  border-radius: 12px;
  background-color: white;

  &:last-child {
    padding-bottom: 100px;
  }

  ${FlexWrapper} {
    padding-top: 50px;
    max-width: calc(100vw - 210px);
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
