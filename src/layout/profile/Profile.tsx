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
import {Loader} from "@/components/loader/Loader";
import userAvatar from '../../assets/avatars/user.webp'
import background from '../../assets/backgrounds/white-2484120_1920.png'
import {RequestStatusType} from "@/store/reducers/app-reducer";


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
    // }, [profile.userId, dispatch, id, image, userId, profile.fullName]);
    }, [dispatch, id]);

    if (!isInitialized) {
        return <Navigate to={'/login'}/>
    }

    return (
        <StyleProfile>
            {/*{profile.fullName ?*/}
            {isLoading === "loading" ? <Loader/>
                : <ProfileWrapper>
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
            }

        </StyleProfile>
    )
}

const StyleProfile = styled.section`
    //background: url(${background}) 0 0/350px repeat;
  //background: linear-gradient(180deg, #1485e6, #00c2f0, #2ceeb8);
  flex-grow: 1;
  //width: calc(100vw - 150px);
  background: url("https://img.freepik.com/free-vector/dark-hexagonal-background-with-gradient-color_79603-1410.jpg?w=2000&t=st=1703507059~exp=1703507659~hmac=d30ca8681cb5c569e815bebb5cbc2528b0d3f96c80c438e5075c9b73b31f6e98") 0 0/ 350px repeat;
  border: 1px solid rgba(128, 128, 128, 0.8);
  border-right: none;
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
  max-width: 325px;
  max-height: 290px;
  object-fit: cover;
  border-radius: 10px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
`
