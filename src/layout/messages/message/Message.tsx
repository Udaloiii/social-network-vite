import styled from "styled-components";
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {AppStateType, useAppDispatch} from "@/store/store";
import {FC, memo, useCallback, useEffect, useState} from "react";
import {AddItemForm} from "@/components/addItemForm/AddItemForm";
import {addMessageAC, MessageStateType} from "@/store/reducers/messages-reducer";
import {getTime} from "@/utils/getTime";


export const Message: FC = memo(() => {
    const name = useSelector<AppStateType, string>(state => state.auth.name)
    const messages = useSelector<AppStateType, MessageStateType[]>(state => state.messages)
    const dispatch = useAppDispatch()
    const params = useParams()
    const id = params.id ? +params.id : 1

    const [time, setTime] = useState(new Date()) // для времени сообщения

    const filterMessage = messages.filter(el => el.id === id)
    const iconMessage = messages.filter(el => el.id === id)[0].icon


    let messageId = filterMessage[filterMessage.length - 1].messageId


    const addMessageHandler = useCallback((text: string) => {
        ++messageId
        dispatch(addMessageAC(id, name, messageId, text, getTime(time)))
    }, [messageId, dispatch])

    useEffect(() => {
        setTime(new Date())
    }, [messages]);

    return (
        <StyleContainer>
            <>
                <StyleMessageWrapper>
                    {filterMessage.map(el => {
                        const imageCondition = el.name === name ? "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?w=1480&t=st=1700817612~exp=1700818212~hmac=86a79fc7b83745f8e03378e58710b0b6c590f19d1d6a624ff5bc2227c790e259" : iconMessage
                        const nameCondition = el.name === name ? name : el.name
                        const condition = el.name === name
                        return <StyleMessage key={el.messageId} condition={condition}>
                            <img
                                src={imageCondition}
                                alt=""/>
                            <MessageBlock condition={condition}>
                                <StyleUserName>{nameCondition}</StyleUserName>
                                <MessageTimeWrap>
                                    <StyleText>{el.body}</StyleText>
                                    <MessageTime>{el.messageTime}</MessageTime>
                                </MessageTimeWrap>
                            </MessageBlock>
                        </StyleMessage>
                    })
                    }
                </StyleMessageWrapper>
            </>
            <FormWrapper>
                <AddItemForm addItem={addMessageHandler} placeholder={"write you message"}
                             buttonTitle={"send message"}
                             as={"textarea"}
                             color={"#4A76A8"}/>
            </FormWrapper>
        </StyleContainer>
    )
})

const StyleContainer = styled.div`
  position: relative;
  flex-grow: 1;
  display: flex;
  justify-content: center;
  background-color: white;
  border-radius: 12px;
`
const StyleMessageWrapper = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  gap: 30px;

  &:first-child {
    padding-top: 20px;
  }

  &:last-child {
    margin-bottom: 170px;
  }


  &:last-child {
    padding-bottom: 70px;
  }

  span {
    margin-right: 20px;

    &:last-child {
      margin-top: 100px;
    }
  }
`

const MessageBlock = styled.div<{ condition: boolean }>`
  padding: 8px;
  width: 350px;
  border-radius: 14px 14px 14px 0;
  background-color: ${props => props.condition ? "rgba(204, 228, 255, 1)" : "#EBEDF0"};
`

const StyleText = styled.div`
  font-family: "Dialog", sans-serif;
  color: #2c2c2c;
  align-self: flex-end;
  margin-top: 10px;
  font-size: 0.8rem;
`
const StyleUserName = styled.span`
  font-family: "Calibri", sans-serif;
  color: cornflowerblue;
  text-transform: capitalize;
  font-size: 1.2rem;
`
const StyleMessage = styled.div<{ condition: boolean }>`
  display: flex;
  justify-content: ${props => props.condition ? "flex-end" : "flex-start"};
  align-items: flex-end;
  gap: 10px;

  &:last-child {
    padding-bottom: 170px;
  }

  img {
    width: 50px;
    border-radius: 50%;
    user-select: none;
    object-fit: cover;
  }
`

const FormWrapper = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;

  textarea {
    width: 350px;
    min-height: 50px;
  }

  button {
    align-self: center;
  }
`

const MessageTime = styled.div`
  white-space: nowrap;
  font-family: "Roboto Light", sans-serif;
  font-size: 0.6rem;
  align-self: flex-end;
  color: rgba(0, 0, 0, 0.6);
`

const MessageTimeWrap = styled.div`
  display: flex;
  justify-content: space-between;
`