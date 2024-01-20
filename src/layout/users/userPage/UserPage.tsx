import styled from "styled-components";
import {FlexWrapper} from "@/components/flexWrapper/FlexWrapper";
import {UserInfo} from "@/layout/profile/userInfo/UserInfo";
import {Posts} from "@/layout/profile/posts/Posts";
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {AppStateType} from "@/store/store";
import {UserItemType} from "@/store/reducers/users-reducer";

export const UserPage = () => {
    const params = useParams()
    const users = useSelector<AppStateType, UserItemType[]>(state => state.users.items)
    const id = params.id ? +params.id : 1
    const user = users.filter(el => el.id === id)[0]


    return (
        <StyleContainer>
            <FlexWrapper gap={"50px"}>
                <StyleProfileImage
                    src={user.icon}/>
                <UserInfo user={user}/>
            </FlexWrapper>
            <Posts userId={id} posts={user.posts}/>
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
