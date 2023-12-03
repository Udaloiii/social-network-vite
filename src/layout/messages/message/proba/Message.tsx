import styled from "styled-components";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "@/store/store";
import {MessagesType} from "@/api/messages-api";
import {FC} from "react";
import {AddItemForm} from "@/components/addItemForm/AddItemForm";
import {addMessageAC} from "@/store/reducers/messages-reducer";


export const Message: FC = () => {
    const messages = useSelector<AppStateType, MessagesType[]>(state => state.messages)
    const dispatch = useDispatch()
    const params = useParams()
    const id = params.id ? +params.id : 1
    const filterMessage = messages.filter(el => el.id === id)
    console.log(params.id)

    const addMessageHandler = (text: string) => {
        dispatch(addMessageAC(id, text))
    }

    return (
        <StyleContainer>
            <StyleMessageWrapper>
                <>
                    {filterMessage.map(el => {
                        return <StyleMessage key={el.id} >
                            <img
                                src={"https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671122.jpg?w=1480&t=st=1701451763~exp=1701452363~hmac=1abea2b533d7a55c075607f01afb47367a4033e84167adde1b38a76694577178"}
                                alt=""/>
                            <MessageBlock>
                                <StyleUserName>{el.name}</StyleUserName>
                                <StyleText>{el.body}</StyleText>
                            </MessageBlock>
                        </StyleMessage>
                    })
                    }
                </>
            </StyleMessageWrapper>
            <FormWrapper>
                <AddItemForm addItem={addMessageHandler} placeholder={"write you message"}
                             buttonTitle={"send message"}
                             as={"textarea"}/>
            </FormWrapper>
        </StyleContainer>
    )
}

const StyleContainer = styled.div`
  position: relative;
  flex-grow: 1;
  //flex: 0 0 auto;
  display: flex;
  flex-direction: column;
  background-color: cornflowerblue;
`
const StyleMessageWrapper = styled.div`
  display: flex;
  justify-content: center;
  //align-items: center;


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

const FormWrapper = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  width: 300px;
  //background-color: greenyellow;
  display: flex;
  flex-direction: column;
  align-items: center;

  textarea {
    width: 250px;
    height: 50px;
  }

  button {
    align-self: center;
  }
`