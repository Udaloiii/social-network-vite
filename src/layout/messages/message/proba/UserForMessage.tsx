import styled from "styled-components";
import {NavLink} from "react-router-dom";

type UserForMessagePropsType = {
    name: string
    text?: string
    id: number
}
export const UserForMessage = ({name, text, id}: UserForMessagePropsType) => {
    return (
        <StyleUser>
            <StyleLink to={`/messages/${id}`}>
                <StyleAvatar
                    src={"https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671122.jpg?w=1480&t=st=1701451763~exp=1701452363~hmac=1abea2b533d7a55c075607f01afb47367a4033e84167adde1b38a76694577178"}/>
                <StyleName>{name.slice(0, 10)}</StyleName>
                <StyleText>{text?.slice(0, 100)} . . .</StyleText>
            </StyleLink>
        </StyleUser>
    )
}

const StyleUser = styled.div`
  //width: 500px;
  width: max-content;
`

const StyleAvatar = styled.img`
  width: 50px;
  border-radius: 50%;
`
const StyleLink = styled(NavLink)`
  display: flex;
  gap: 30px;
  align-items: flex-end;
`
const StyleText = styled.span`
  margin-left: 100px;
`
const StyleName = styled.span`
  width: 100px;
  text-transform: capitalize;
  font-family: "Josefine Sans", sans-serif;
  color: royalblue;
`