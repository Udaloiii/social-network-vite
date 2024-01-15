import styled from "styled-components";
import {FC, useEffect} from "react";
import {FlexWrapper} from "@/components/flexWrapper/FlexWrapper";
import {useSelector} from "react-redux";
import {AppStateType, useAppDispatch} from "@/store/store";
import {getProfileTC, ProfileType} from "@/store/reducers/profile-reducer";
import {Navigate, useParams} from "react-router-dom";
import {UserItemType} from "@/store/reducers/users-reducer";
import {Loader} from "@/components/loader/Loader";
import userAvatar from '../../assets/avatars/user.webp'
import {RequestStatusType} from "@/store/reducers/app-reducer";
import {UserInfoVK} from "@/layout/profile/userInfo/UserInfoVK";
import {PostsVK} from "@/layout/profile/posts/PostsVK";
import {PhotoFeed} from "@/layout/profile/photoFeed/PhotoFeed";


export const Profile: FC = () => {
    const isLoading = useSelector<AppStateType, RequestStatusType>(state => state.app.status)
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
    }, [dispatch, id, image]);

    if (!isInitialized) {
        return <Navigate to={'/login'}/>
    }

    return (
        <StyleProfile>
            <ProfileWrapper>
                <FlexWrapper gap={"50px"}>
                    {isLoading === "loading" ? <Loader/>
                        :
                        <UserInfoVK
                            user={user?.filter(el => el.id === id)[0]}
                            profile={profile}
                            image={image}
                        />}
                </FlexWrapper>
                <PhotoFeed/>
                <PostsVK userId={id} posts={posts}/>
            </ProfileWrapper>


        </StyleProfile>
    )
}

const StyleProfile = styled.section`
  flex-grow: 1;
  border-radius: 12px;
`
const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  textarea {
    width: 325px;
  }
`
