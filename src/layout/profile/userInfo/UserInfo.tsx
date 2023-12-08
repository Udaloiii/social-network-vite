import {FlexWrapper} from "@/components/flexWrapper/FlexWrapper"
import {ProfileResponseType} from "@/api/users-api";
import styled from "styled-components";

type UserInfoPropsType = {
    user?: ProfileResponseType
}
export const UserInfo = ({user}: UserInfoPropsType) => {
    return (
        <FlexWrapper direction={"column"} justify={"space-between"} style={{margin: "0"}}>
            <div>Name: <StyleName>{user?.fullName}</StyleName></div>
            <div>Date of Birth: 01.01.1990</div>
            <div>City: Sidney</div>
            <div>Country: Australia</div>
        </FlexWrapper>
    )
}

const StyleName = styled.span`
  text-transform: capitalize;
  font-family: Algerian, sans-serif;
`