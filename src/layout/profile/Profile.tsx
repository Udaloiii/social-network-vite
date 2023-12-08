import styled from "styled-components";
import {FC, useEffect} from "react";
import {FlexWrapper} from "@/components/flexWrapper/FlexWrapper";
import {UserInfo} from "@/layout/profile/userInfo/UserInfo";
import {Posts} from "@/layout/profile/posts/Posts";
import {usersApi} from "@/api/users-api";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "@/store/store";
import {ProfileType, setProfileAC} from "@/store/reducers/profile-reducer";
import {useParams} from "react-router-dom";
import {UserItemType} from "@/store/reducers/users-reducer";


export const Profile: FC = () => {
    const profile = useSelector<AppStateType, ProfileType>(state => state.profile)
    const user = useSelector<AppStateType, UserItemType[]>(state => state.users.items)
    const dispatch = useDispatch()
    const params = useParams()
    const id = params.id ? +params.id : 26652
    const image = user?.filter(el => el.id === id)[0]?.icon || "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?w=1480&t=st=1700817612~exp=1700818212~hmac=86a79fc7b83745f8e03378e58710b0b6c590f19d1d6a624ff5bc2227c790e259"
    // const posts = user?.filter(el => el.id === id)[0]?.posts
    const posts = profile.posts
    console.log(posts)

    useEffect(() => {
        usersApi.getMyProfile(id)
            .then(res => {
                dispatch(setProfileAC(id, res.data, image))
            })
    }, [profile.userId, id, dispatch, image]);
    // console.log(profile)

    return (
        <StyleProfile>
            {profile && <FlexWrapper gap={"50px"}>
                <StyleProfileImage
                    src={image}
                />
                <UserInfo user={profile}/>
            </FlexWrapper>}
            <Posts userId={id} posts={posts}/>
        </StyleProfile>
    )
}

const StyleProfile = styled.section`
  background-color: #c9ffeb;
  flex-grow: 1;
  padding: 20px;

  ${FlexWrapper} {
    padding-top: 20px;
  }
`

const StyleProfileImage = styled.img`
  width: 325px;
  height: 290px;
  object-fit: cover;
  border-radius: 10px;
`
