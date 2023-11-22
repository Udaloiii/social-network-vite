import styled from "styled-components";
import {FC, useEffect, useState} from "react";
import {FlexWrapper} from "../../components/flexWrapper/FlexWrapper";
import {Loader} from "../../components/loader/Loader";


type MessagesType = {
    postId: number
    id: number
    name: string
    email: string
    body: string
}
export const Messages: FC = () => {
    const [messages, setMessages] = useState<null | MessagesType[]>(null)
    useEffect(() => {
        setTimeout(() => {
                fetch('https://jsonplaceholder.typicode.com/comments')
                    .then(response => response.json())
                    .then(json => {
                        setMessages(json)
                    })
            console.log("timeout")
            }, 2000
        )
    }, []);
    return (
            messages ? <StyleMessages>
                    <FlexWrapper direction={"column"} gap={"20px"}>
                        {messages?.map(el => {
                            return <StyleBlock key={el.id}>
                                <span>{el.id}.</span>
                                <span>{el.name}</span>
                                <span>{el.email}</span>
                                <span>{el.body}</span>
                            </StyleBlock>
                        })}
                    </FlexWrapper>
                </StyleMessages>
                : <Loader/>


    )
}

const StyleMessages = styled.section`
  background-color: #e54a6b;
  //flex-grow: 1;
  width: calc (100vw - 150px);
`
const StyleBlock = styled.div`
  flex: 0 0 auto;

  span {
    margin-right: 20px;
  }
`
