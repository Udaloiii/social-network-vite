import styled from "styled-components";
import {FlexWrapper} from "@/components/flexWrapper/FlexWrapper";
import {Icon} from "@/components/icon/Icon";
import {FC} from "react";

type UserPropsType = {
    name: string
    followed?: boolean
    id?: number
}
export const User: FC<UserPropsType> = ({name, followed, id}: UserPropsType) => {
    return (
        <StyleUser>
            <FlexWrapper align={"end"} gap={"30px"}>
                {followed ? <IconWrapper title={"unfollow"}><Icon iconId={"unfollow"} width={"25px"} height={"25px"}
                                                                  viewBox={"0 0 24 24"}/></IconWrapper>
                    : <IconWrapper title={"follow"}><Icon iconId={"follow"} width={"25px"} height={"25px"}
                                                          viewBox={"0 0 32 32"}/></IconWrapper>}
                <StyleImg
                    src={"https://img.freepik.com/free-psd/3d-illustration-person-with-long-hair_23-2149436197.jpg?w=1480&t=st=1701012063~exp=1701012663~hmac=4b4e87055cf8a48154546579bdd3dea93bbfba0077e38571c6856cceb4da7a66"}/>
                {id}
                {name}
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
`

const IconWrapper = styled.div`
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