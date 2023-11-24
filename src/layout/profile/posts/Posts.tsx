import {TextField} from "../../../components/textfield/TextField";
import {Post} from "./post/Post";
import {FlexWrapper} from "../../../components/flexWrapper/FlexWrapper";


const posts = ["post", "post", "post", "post", "post", "post", "post", "post", "post", "post", "post",]
export const Posts = () => {
    return (
        <FlexWrapper direction={"column"} gap={"20px"}>
            <h4>Add post</h4>
            <TextField type={"password"} placeholder={"text"}/>
            {posts.map((el, index) => <Post key={index} post={el}/>)}
        </FlexWrapper>
    )
}