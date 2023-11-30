import styled from "styled-components";
import {FC, useEffect, useMemo, useState} from "react";
import {FlexWrapper} from "@/components/flexWrapper/FlexWrapper";
import {Loader} from "@/components/loader/Loader";
import {messagesApi, MessagesType} from "@/api/messages-api";
import {Pagination} from "@/components/pagination/Pagination";
import {CustomSelect} from "@/components/customSelect/CustomSelect";


export const Messages: FC = () => {
    const [messages, setMessages] = useState<null | MessagesType[]>(null)
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

    useEffect(() => {
        messagesApi.getMessages()
            .then(res => {
                setMessages(res.data)
                console.log(res.data.length)
            })
    }, []);

    return (
        messages ? <StyleMessages>
            <CustomSelect title={"сообщений"} value={pageSize} options={[10, 25, 50]} changePageSize={setPageSizeHandler}/>
                <FlexWrapper direction={"column"} gap={"20px"}>
                    {currentTableData?.map(el => {
                        return <StyleBlock key={el.id}>
                            <span>{el.id}.</span>
                            <span>{el.email}</span>
                            <span>{el.name}</span>
                            <span>{el.body}</span>
                        </StyleBlock>
                    })}
                </FlexWrapper>
                <PaginationWrapper>
                    <Pagination totalCount={messages.length} currentPage={currentPage} pageSize={pageSize}
                                 onPageChange={setCurrentPage} siblingCount={2}/>
                </PaginationWrapper>
            </StyleMessages>
            : <Loader/>


    )
}

const StyleMessages = styled.section`
  position: relative;
  background-color: #caead3;
  flex-grow: 1;
  width: calc(100vw - 150px);
`
const StyleBlock = styled.div`
  flex: 0 0 auto;

  &:last-child {
    padding-bottom: 70px;
  }

  span {
    margin-right: 20px;
  }
`
const PaginationWrapper = styled.div`
  position: absolute;
  bottom: 10px;
`
