import styled from "styled-components";
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {AppStateType} from "@/store/store";
import {MessagesType} from "@/api/messages-api";
import {FC} from "react";


export const Message:FC = () => {
    const messages = useSelector<AppStateType, MessagesType[]>(state => state.messages)
    const params = useParams()
    const filterMessage = messages.filter(el => el.id === (params.id ? +params.id : 1))
    console.log(params.id)
    return (
        <StyleMessageWrapper>
            <>
                {filterMessage.map(el => <StyleMessage key={el.id}>
                    <img
                        src={"https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671122.jpg?w=1480&t=st=1701451763~exp=1701452363~hmac=1abea2b533d7a55c075607f01afb47367a4033e84167adde1b38a76694577178"}
                        alt=""/>
                    <MessageBlock>
                        <StyleUserName>{el.name}</StyleUserName>
                        <StyleText>{el.body}</StyleText>
                    </MessageBlock>
                </StyleMessage>)
                }
            </>
        </StyleMessageWrapper>
    )
}

const StyleMessageWrapper = styled.div`
  flex-grow: 1;
  //flex: 0 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: cornflowerblue;

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
  width: 400px;
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
  margin-top: 15px;
`
const StyleUserName = styled.span`
  font-family: "Calibri", sans-serif;
  color: cornflowerblue;
  text-transform: capitalize;
  font-size: 1.2rem;
`
const StyleMessage = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 20px;
`