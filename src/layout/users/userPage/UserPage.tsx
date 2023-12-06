import styled from "styled-components";
import {FlexWrapper} from "@/components/flexWrapper/FlexWrapper";
import {UserInfo} from "@/layout/profile/userInfo/UserInfo";
import {Posts} from "@/layout/profile/posts/Posts";
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {AppStateType} from "@/store/store";
import {UserType} from "@/api/users-api";

export const UserPage = () => {
    type MainUserType = UserType & { posts: string[], icon: string }
    const params = useParams()
    const users = useSelector<AppStateType, MainUserType[]>(state => state.users.items)
    const id = params.id ? +params.id : 1
    const user = users.filter(el => el.id === id)[0]


    return (
        <StyleContainer>
            <FlexWrapper gap={"50px"}>
                <StyleProfileImage
                    src={user.icon}/>
                <UserInfo user={user}/>
            </FlexWrapper>
            <Posts/>
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

  ${FlexWrapper} {
    padding: 20px;
  }
`

const StyleProfileImage = styled.img`
  //width: 350px;
  height: 280px;
  object-fit: contain;
  border-radius: 10px;
`
