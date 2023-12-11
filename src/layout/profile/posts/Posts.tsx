import styled from "styled-components";
import {FC, useEffect, useState} from "react";
import {FlexWrapper} from "@/components/flexWrapper/FlexWrapper";
import {AddItemForm} from "@/components/addItemForm/AddItemForm";
import {Post} from "@/layout/profile/posts/post/Post";
// import {addLikeAC, addPostAC, PostType} from "@/store/reducers/posts-reducer";
import {useDispatch} from "react-redux";
import {getTime} from "@/utils/getTime";
import { addPostAC, PostType} from "@/store/reducers/users-reducer";
import {addLikeAC} from "@/store/reducers/profile-reducer";

type PostsPropsType = {
    userId: number
    posts: PostType[]
}
export const Posts: FC<PostsPropsType> = ({userId, posts}: PostsPropsType) => {
    const dispatch = useDispatch()


    const [time, setTime] = useState(new Date()) // для времени сообщения

    const addNewPostHandler = (text: string) => {
        dispatch(addPostAC(userId, text, getTime(time)))
    }
    const addLike = (postId: number, newValue: boolean) => {
        dispatch(addLikeAC(postId, newValue))
    }

    useEffect(() => {
        setTime(new Date())
    }, [posts])

    return (
        <StylePosts>
            <FlexWrapper direction={"column"} gap={"25px"}>
                <AddItemForm addItem={addNewPostHandler} as={"textarea"} placeholder={"create you post"}
                             buttonTitle={"add post"}/>
                {posts?.map((el, index) => {
                    return <Post key={index} id={el.id} icon={el.icon} post={el.text} like={el.like}
                                 postTime={el.postTime}
                                 postDate={el.postDate}
                                 addLike={addLike}
                    />
                })}
            </FlexWrapper>
        </StylePosts>
    )
}

const StylePosts = styled.div`
  //display: flex;
  //flex-wrap: wrap;
  //word-wrap: break-word;

  textarea {
    height: 100px;
    font-size: 1rem;
    transform: none !important;
  }

  ${FlexWrapper} {
    width: max-content;

    & {
      button {
        align-self: center;
      }
    }
  }
`

