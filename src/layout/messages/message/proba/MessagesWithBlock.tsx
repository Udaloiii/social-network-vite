import styled from "styled-components";
import {FC, useEffect, useMemo, useRef, useState} from "react";
import {FlexWrapper} from "@/components/flexWrapper/FlexWrapper";
import {messagesApi, MessagesType} from "@/api/messages-api";
import {Pagination} from "@/components/pagination/Pagination";
import {CustomSelect} from "@/components/customSelect/CustomSelect";
import {UserForMessage} from "@/layout/messages/message/proba/UserForMessage";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "@/store/store";
import {setMessagesAC} from "@/store/reducers/messages-reducer";
import {Loader1} from "@/components/loader/Loader1";


export const MessagesWithBlock: FC = () => {
    const messages = useSelector<AppStateType, MessagesType[]>(state => state.messages)
    const dispatch = useDispatch()
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

    const isMounted = useRef(false) // для проверки, был ли вмонтирован компонент, чтобы не делать лишние запросы на сервак
    useEffect(() => {
        if (!isMounted.current && messages.length) {
            isMounted.current = true;
        } else {
            !messages.length && messagesApi.getMessages()
                .then(res => {
                    dispatch(setMessagesAC(res.data))
                    // console.log(`${res.data.length} сообщений`)
                })
            console.log("USE-EFFECT В MESSAGES")
        }
    }, [messages.length, dispatch]);

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
                            {currentTableData?.map(el => {
                                return <UserForMessage key={el.id} id={el.id} name={el.name} text={el.body}/>
                            })}
                        </FlexWrapper>

                        <PaginationBottomWrapper>
                            <Pagination totalCount={messages.length} currentPage={currentPage} pageSize={pageSize}
                                        onPageChange={setCurrentPage} siblingCount={2}/>
                        </PaginationBottomWrapper>
                    </>
                    : <Loader1/>
            }
        </StyleMessages>
    )
}

const StyleMessages = styled.section`
  position: relative;
  background-color: #c9ffeb;
  flex-grow: 1;
  //width: calc(100vw - 150px);
  padding: 20px;

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
