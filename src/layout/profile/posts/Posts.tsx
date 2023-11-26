import styled from "styled-components";
import {FC} from "react";
import {FlexWrapper} from "@/components/flexWrapper/FlexWrapper";
import {AddItemForm} from "@/components/addItemForm/AddItemForm";
import {Post} from "@/layout/profile/posts/post/Post";
import {addLikeAC, addPostAC, PostType} from "@/store/reducers/posts-reducer";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "@/store/store";


export const Posts: FC = () => {
    const posts = useSelector<AppStateType, PostType[]>(state => state.posts)
    const dispatch = useDispatch()

    const addNewPostHandler = (text: string) => {
        dispatch(addPostAC(text))
    }
    const addLike = (id: number, newValue: boolean) => {
        dispatch(addLikeAC(id, newValue))
    }
    return (
        <StylePosts>
            <FlexWrapper direction={"column"} gap={"20px"}>
                <h4>Add post</h4>
                <AddItemForm addItem={addNewPostHandler}/>
                {posts.map((el, index) => {
                    return <Post key={index} id={el.id} icon={el.icon} post={el.text} like={el.like}
                                 addLike={addLike}/>
                })}
            </FlexWrapper>
        </StylePosts>
    )
}

const StylePosts = styled.div`
  max-width: 1440px;
  display: flex;
  flex-wrap: wrap;
  word-wrap: break-word;

  textarea {
    resize: none;
    min-width: 300px;
    height: 100px;
    font-size: 1rem;
    transform: none !important;
  }

  ${FlexWrapper} {
    width: max-content;

    ${FlexWrapper} {
      button {
        align-self: center;
      }
    }
  }
`
