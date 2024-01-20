import {FC} from "react";
import styled from "styled-components";
import {Icon} from "@/components/icon/Icon";


type PostType = {
    id: number
    post: string
    icon: string
    like?: boolean
    addLike?: (id: number, newValue: boolean) => void
    postTime?: string
    postDate?: string
}
export const Post: FC<PostType> = ({id, post, icon, like, addLike, postTime, postDate}: PostType) => {
    const colorLike = like ? "red" : "grey"
    const addLikeHandler = () => addLike?.(id, !like)
    return (
        <StylePost>
            <StyleImg src={icon} alt=""/>
            <StyleText>{post}</StyleText>
            <PostTime>{postDate} {postTime}</PostTime>
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
    width: max-content;
    color: #000;

    font-feature-settings: 'clig' off, 'liga' off;
    font-family: SF Pro Text, sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

    svg {
        cursor: pointer;
        transition: .2s;
        padding-bottom: 2px;

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
const StyleText = styled.div`
    max-width: 1200px;
    display: flex;
    flex-wrap: wrap;
    word-wrap: break-word;
    align-items: flex-end;
    color: #000;
    font-feature-settings: 'clig' off, 'liga' off;
    font-family: SF Pro Text, sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`

const StyleImg = styled.img`
    height: 35px;
    border-radius: 50%;
    user-select: none;
`

const PostTime = styled.div`
    font-size: 0.5rem;
    color: rgba(128, 128, 128, 0.8);
    padding-bottom: 2px;
`