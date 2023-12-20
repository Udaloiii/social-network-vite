import styled from "styled-components";
import {FC, useEffect} from "react";
import {FlexWrapper} from "@/components/flexWrapper/FlexWrapper";
import {UserInfo} from "@/layout/profile/userInfo/UserInfo";
import {Posts} from "@/layout/profile/posts/Posts";
import {useSelector} from "react-redux";
import {AppStateType, useAppDispatch} from "@/store/store";
import {getProfileTC, ProfileType} from "@/store/reducers/profile-reducer";
import {Navigate, useParams} from "react-router-dom";
import {UserItemType} from "@/store/reducers/users-reducer";
import {Loader1} from "@/components/loader/Loader1";
import userAvatar from '../../assets/avatars/user.webp'
import background from '../../assets/backgrounds/3384318_57622.jpg'


export const Profile: FC = () => {
    const isInitialized = useSelector<AppStateType, boolean>(state => state.auth.isLoggedIn)
    const profile = useSelector<AppStateType, ProfileType>(state => state.profile)
    const user = useSelector<AppStateType, UserItemType[]>(state => state.users.items)
    const dispatch = useAppDispatch()
    const params = useParams()
    const userId = useSelector<AppStateType, number>(state => state.auth.myId)
    const id = params.id ? +params.id : userId
    const image = user?.filter(el => el.id === id)[0]?.icon || userAvatar
    const posts = user?.filter(el => el.id === id)[0]?.posts || profile.posts



    useEffect(() => {
        dispatch(getProfileTC(id, image))
    }, [profile.userId, dispatch, id, image, userId, profile.fullName]);

    if (!isInitialized) {
        return <Navigate to={'/login'}/>
    }

    return (
        <StyleProfile>
            {profile.fullName ?
                <ProfileWrapper>
                    <FlexWrapper gap={"50px"}>
                        <StyleProfileImage
                            src={image}
                        />
                        <UserInfo
                            user={user?.filter(el => el.id === id)[0]}
                            profile={profile}
                        />
                    </FlexWrapper>
                    <Posts userId={id} posts={posts}/>
                </ProfileWrapper>
                : <Loader1/>}
        </StyleProfile>
    )
}

const StyleProfile = styled.section`
  //background: url(${background})  repeat;
  background: url(${background}) 0 0/250px 250px repeat;
  flex-grow: 1;
  //width: calc(100vw - 150px);
`
const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 100px;
  padding: 20px;

  textarea {
    width: 325px;
  }
`
const StyleProfileImage = styled.img`
  width: 325px;
  height: 290px;
  object-fit: cover;
  border-radius: 10px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
`
