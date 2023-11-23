import styled from "styled-components";
import {FC, useEffect, useState} from "react";
import {FlexWrapper} from "../../components/flexWrapper/FlexWrapper";
import {Loader} from "../../components/loader/Loader";
import {messagesApi, MessagesType} from "../../api/messages-api";



export const Messages: FC = () => {
    const [messages, setMessages] = useState<null | MessagesType[]>(null)
    useEffect(() => {
        messagesApi.getMessages()
            .then(res => {
                setMessages(res.data)
            })
    }, []);
    return (
        messages ? <StyleMessages>
                <FlexWrapper direction={"column"} gap={"20px"}>
                    {messages?.map(el => {
                        return <StyleBlock key={el.id}>
                            <span>{el.id}.</span>
                            <span>{el.email}</span>
                            <span>{el.name}</span>
                            <span>{el.body}</span>
                        </StyleBlock>
                    })}
                </FlexWrapper>
            </StyleMessages>
            : <Loader/>


    )
}

const StyleMessages = styled.section`
  background-color: #caead3;
  //flex-grow: 1;
  width: calc (100vw - 150px);
`
const StyleBlock = styled.div`
  flex: 0 0 auto;

  span {
    margin-right: 20px;
  }
`
