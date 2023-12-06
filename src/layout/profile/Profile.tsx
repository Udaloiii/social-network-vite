import styled from "styled-components";
import {FC} from "react";
import {FlexWrapper} from "@/components/flexWrapper/FlexWrapper";
import {UserInfo} from "@/layout/profile/userInfo/UserInfo";
import {Posts} from "@/layout/profile/posts/Posts";




export const Profile: FC = () => {
    return (
        <StyleProfile>
            <FlexWrapper gap={"50px"}>
                <StyleProfileImage
                    src={"https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?w=1480&t=st=1700817612~exp=1700818212~hmac=86a79fc7b83745f8e03378e58710b0b6c590f19d1d6a624ff5bc2227c790e259"}/>
                <UserInfo/>
            </FlexWrapper>
            <Posts/>
        </StyleProfile>
    )
}

const StyleProfile = styled.section`
  background-color: #c9ffeb;
  flex-grow: 1;

  ${FlexWrapper} {
    padding: 10px;
  }
`

const StyleProfileImage = styled.img`
  //width: 350px;
  height: 280px;
  object-fit: contain;
  border-radius: 10px;
`
