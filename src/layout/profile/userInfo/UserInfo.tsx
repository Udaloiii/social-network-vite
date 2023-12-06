import {FlexWrapper} from "@/components/flexWrapper/FlexWrapper"
import {UserType} from "@/api/users-api";
import styled from "styled-components";

type UserInfoPropsType = {
    user?: UserType
}
export const UserInfo = ({user}: UserInfoPropsType) => {
    return (
        <FlexWrapper direction={"column"} justify={"space-between"} style={{margin: "0"}}>
            <span>Name: <StyleName>{user?.name}</StyleName></span>
            <div>Date of Birth:</div>
            <div>City</div>
            <div>Country</div>
            <div>Education</div>
        </FlexWrapper>
    )
}

const StyleName = styled.span`
  text-transform: capitalize;
  font-family: Algerian, sans-serif;
`