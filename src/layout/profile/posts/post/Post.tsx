import {FC} from "react";
import styled from "styled-components";
import {Icon} from "@/components/icon/Icon";



type PostType = {
    id: number
    post: string
    icon: string
    like?: boolean
    addLike: (id: number, newValue: boolean) => void
}
export const Post: FC<PostType> = ({id, post, icon, like, addLike}: PostType) => {
    const colorLike = like ? "red" : "grey"
    const addLikeHandler = () => addLike(id, !like)
    return (
        <StylePost>
            <StyleImg src={icon} alt=""/>
            <span>{post}</span>
            <Icon iconId={"like"} height={"14"} width={"14"} viewBox={"0 0 48 48"} colorLike={colorLike}
                  addLike={addLikeHandler}/>
        </StylePost>
    )
}

const StylePost = styled.div`
  display: flex;
  gap: 20px;
  align-items: flex-end;
  transition: .2s;

  span {
    max-width: 1300px;
  }

  svg {
    cursor: pointer;
    transition: .2s;

    &:hover {
      transform: scale(1.3);
      transition: .2s;
    }

    &:active {
      transform: scale(0.9);
      transition: .2s;
    }
  }
`

const StyleImg = styled.img`
  height: 35px;
  border-radius: 50%;
  user-select: none;
`