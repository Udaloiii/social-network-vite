import styled from "styled-components";
import {NavLink} from "react-router-dom";


type UserForMessagePropsType = {
    name: string
    text?: string
    id: number
    icon?: string
}

export const UserForMessage = ({name, text, id, icon}: UserForMessagePropsType) => {
    const conditionText = text?.length && text?.length > 90 ? text?.slice(0, 90) : text
    return (
        <StyleUser>
            <StyleLink to={`/messages/${id}`}>
                <StyleAvatar
                    src={icon}
                />
                <StyleName>{name.slice(0, 10)}</StyleName>
                <StyleText>{conditionText} . . .</StyleText>
            </StyleLink>
        </StyleUser>
    )
}

const StyleUser = styled.div`
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