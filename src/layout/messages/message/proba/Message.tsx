import styled from "styled-components";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "@/store/store";
import {FC, memo, useCallback, useEffect, useState} from "react";
import {AddItemForm} from "@/components/addItemForm/AddItemForm";
import {addMessageAC, MessageStateType} from "@/store/reducers/messages-reducer";
import {getTime} from "@/utils/getTime";


export const Message: FC = memo(() => {
    const messages = useSelector<AppStateType, MessageStateType[]>(state => state.messages)
    const dispatch = useDispatch()
    const params = useParams()
    const id = params.id ? +params.id : 1

    const [time, setTime] = useState(new Date()) // для времени сообщения

    const filterMessage = messages.filter(el => el.id === id)


    let messageId = filterMessage[filterMessage.length - 1].messageId


    const addMessageHandler = useCallback((text: string) => {
        ++messageId
        dispatch(addMessageAC(id, messageId, text, getTime(time)))
    }, [messageId, dispatch])

    useEffect(() => {
        setTime(new Date())
    }, [messages]);

    return (
        <StyleContainer>
            <>
                <StyleMessageWrapper>
                    {filterMessage.map(el => {
                        const imageCondition = el.name === "Username" ? "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?w=1480&t=st=1700817612~exp=1700818212~hmac=86a79fc7b83745f8e03378e58710b0b6c590f19d1d6a624ff5bc2227c790e259" : "https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671122.jpg?w=1480&t=st=1701451763~exp=1701452363~hmac=1abea2b533d7a55c075607f01afb47367a4033e84167adde1b38a76694577178"

                        return <StyleMessage key={el.messageId} name={el.name}>
                            <img
                                src={imageCondition}
                                alt=""/>
                            <MessageBlock>
                                <StyleUserName>{el.name}</StyleUserName>
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
                             as={"textarea"}/>
            </FormWrapper>
        </StyleContainer>
    )
})

const StyleContainer = styled.div`
  position: relative;
  flex-grow: 1;
  //flex: 0 0 auto;
  display: flex;
  justify-content: center;
  //flex-direction: column;
  background-color: cornflowerblue;
`
const StyleMessageWrapper = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  gap: 30px;
  //border: 1px solid greenyellow;

  &:first-child {
    padding-top: 20px;
  }

  &:last-child {
    margin-bottom: 170px;
  }

  img {
    width: 65px;
    border-radius: 50%;
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

const MessageBlock = styled.div`
  padding: 10px;
  width: 350px;
  border-radius: 10px 10px 10px 0;
  background-color: royalblue;

  img {
    width: 50px;
    border-radius: 50%;
  }
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
const StyleMessage = styled.div<{ name: string }>`
  display: flex;
  justify-content: ${props => props.name === "Username" ? "flex-end" : "flex-start"};
  align-items: flex-end;
  gap: 10px;

  &:last-child {
    padding-bottom: 170px;
  }

  img {
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
  //width: max-content;
  white-space: nowrap;
  font-family: "Roboto Light", sans-serif;
  font-size: 0.7rem;
  align-self: flex-end;
`

const MessageTimeWrap = styled.div`
  display: flex;
  justify-content: space-between;
`