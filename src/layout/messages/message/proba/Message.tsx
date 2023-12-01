import styled from "styled-components";
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {AppStateType} from "@/store/store";
import {MessagesType} from "@/api/messages-api";

// type MessagePropsType = {
//     userId?: number
//     userName?: string
//     text?: string
//     icon?: string
// }
export const Message = () => {
    const messages = useSelector<AppStateType, MessagesType[]>(state => state.messages)
    const params = useParams()
    const filterMessage = messages.filter(el => el.id === (params.id ? +params.id : 1))
    console.log(params.id)
    return (
        <StyleMessage>
            <MessageBlock>{filterMessage.map(el => <div>
                <img
                    src={"https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671122.jpg?w=1480&t=st=1701451763~exp=1701452363~hmac=1abea2b533d7a55c075607f01afb47367a4033e84167adde1b38a76694577178"} alt=""/>
                <StyleUserName>{el.name}</StyleUserName>
                <br/>
                <StyleText>{el.body}</StyleText>
            </div>)}</MessageBlock>
        </StyleMessage>
    )
}

const StyleMessage = styled.div`
  flex-grow: 1;
  //flex: 0 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: cornflowerblue;

  &:last-child {
    padding-bottom: 70px;
  }

  span {
    margin-right: 20px;

    &:last-child {
      margin: 0;
    }
  }
`

const MessageBlock = styled.div`
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 500px;
  border-radius: 10px 10px 10px 0;
  background-color: royalblue;

  img {
    width: 50px;
    border-radius: 50%;
  }
`

const StyleText = styled.span`
  font-family: "Dialog", sans-serif;
  color: #2c2c2c;
  align-self: flex-end;
`
const StyleUserName = styled.span`
  font-family: "Calibri", sans-serif;
  color: cornflowerblue;
  text-transform: capitalize;
`