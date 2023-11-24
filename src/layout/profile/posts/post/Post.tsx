import {FC} from "react";

type PostType = {
    post: string
}
export const Post: FC<PostType> = ({post}: PostType) => {
    return (
        <div>
            {post}
        </div>
    )
}