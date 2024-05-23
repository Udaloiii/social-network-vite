import styled from "styled-components";
import {FC, useEffect, useState} from "react";
import {FlexWrapper} from "@/components/flexWrapper/FlexWrapper";
import {AddItemForm} from "@/components/addItemForm/AddItemForm";
import {getTime} from "@/utils/getTime";
import {addPostAC, PostType} from "@/store/reducers/users-reducer";
import {addLikeAC} from "@/store/reducers/profile-reducer";
import {useAppDispatch} from "@/store/store";
import {Post} from "@/layout/profile/posts/post/Post";

type PostsPropsType = {
    userId: number
    posts: PostType[]
}
export const Posts: FC<PostsPropsType> = ({userId, posts}: PostsPropsType) => {
    const dispatch = useAppDispatch()
    const [time, setTime] = useState(new Date()) // для времени сообщения

    const addNewPostHandler = (text: string) => {
        dispatch(addPostAC(userId, text, getTime(time)))
    }
    const addLike = (postId: number, newValue: boolean) => {
        dispatch(addLikeAC(userId, postId, newValue))
    }

    useEffect(() => {
        setTime(new Date())
    }, [posts])

    return (
        <StylePosts>
            <FlexWrapper direction={"column"} gap={"40px"}>
                <AddItemForm addItem={addNewPostHandler} as={"textarea"} placeholder={"create you post"}
                             buttonTitle={"add post"} color={"#4A76A8"}/>
                <PostWrap>
                    {posts?.map((el, index) => {
                        return <Post key={index} id={el.id} icon={el.icon} post={el.text} like={el.like}
                                     postTime={el.postTime}
                                     postDate={el.postDate}
                                     addLike={addLike}
                        />
                    })}
                </PostWrap>
            </FlexWrapper>
        </StylePosts>
    )
}

const StylePosts = styled.div`
    width: 100%;
    height: max-content;
    background-color: #fff;
    border-radius: 12px;
    padding: 20px;

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

const PostWrap = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    border-radius: 6px;
`

