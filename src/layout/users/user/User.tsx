import styled from "styled-components";
import {FlexWrapper} from "@/components/flexWrapper/FlexWrapper";
import {Icon} from "@/components/icon/Icon";
import {FC} from "react";
import {NavLink} from "react-router-dom";

type UserPropsType = {
    name: string
    followed?: boolean
    userId?: number
    icon?:string
}
export const User: FC<UserPropsType> = ({name, followed, userId,icon}: UserPropsType) => {

    const condition = followed ?
        <IconWrapper title={"unfollow"}><Icon iconId={"unfollow"} width={"25px"} height={"25px"}
                                              viewBox={"0 0 24 24"}/></IconWrapper>
        : <IconWrapper title={"follow"}><Icon iconId={"follow"} width={"25px"} height={"25px"}
                                              viewBox={"0 0 32 32"}/>
        </IconWrapper>


    return (
        <StyleUser>
            <FlexWrapper align={"end"} gap={"30px"}>
                {condition}
                <StyleLink to={`/users/${userId}`}>
                    <StyleImg src={icon}/>
                    {userId}
                    {name}
                </StyleLink>
            </FlexWrapper>
        </StyleUser>
    )
}

const StyleUser = styled.div`
`
const StyleImg = styled.img`
  margin-left: -20px;
  height: 50px;
  border-radius: 50%;
  user-select: none;
  transition: .2s;

  &:hover {
    transform: scale(1.05);
    transition: .2s;
  }
`

const IconWrapper = styled.div`
  padding-bottom: 1px;
  cursor: pointer;
  height: 30px;
  display: flex;
  align-items: center;
  transition: .2s;

  &:hover {
    transform: scale(1.1);
    transition: .2s;
  }

  &:active {
    transform: scale(0.9);
    transition: .2s;
  }
`

const StyleLink = styled(NavLink)`
display: flex;
  gap: 20px;
  align-items: flex-end;
`