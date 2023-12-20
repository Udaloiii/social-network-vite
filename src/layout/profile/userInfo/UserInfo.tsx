import {FlexWrapper} from "@/components/flexWrapper/FlexWrapper"
import styled from "styled-components";
import {UserItemType} from "@/store/reducers/users-reducer";
import {ProfileResponseType} from "@/api/users-api";

type UserInfoPropsType = {
    profile?: ProfileResponseType
    user?: UserItemType
}
export const UserInfo = ({profile, user}: UserInfoPropsType) => {
    return (
        <UserInfoWrapper>
            <FlexWrapper direction={"column"} justify={"space-between"} style={{margin: "0"}}>
                <InfoWrap>
                    <StyleDescription>Name:</StyleDescription>
                    <StyleName>{user?.name || profile?.fullName}</StyleName>
                </InfoWrap>
                <InfoWrap>
                    <StyleDescription>Date of Birth:</StyleDescription>
                    {user?.dateOfBorn || "10.12.1990"}
                </InfoWrap>
                <InfoWrap><StyleDescription>City:</StyleDescription>{user?.city || "Minsk"}</InfoWrap>
                <InfoWrap><StyleDescription>Country: </StyleDescription>{user?.country || "Belarus"}</InfoWrap>
            </FlexWrapper>
        </UserInfoWrapper>
    )
}

const UserInfoWrapper = styled.div`
  background-color: rgba(255, 255, 255, 0.4);
  padding: 15px;
  min-width: 250px;
  width: 450px;
  display: flex;
  border-radius: 10px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);

  ${FlexWrapper} {
    width: 100%;
  }
`

const StyleName = styled.span`
  text-transform: capitalize;
  font-family: "Special Elite", sans-serif;
  color: royalblue;
  letter-spacing: 2px;
  font-size: 1.5rem;
`

const InfoWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`

const StyleDescription = styled.div`
  font-family: "Josefin Sans", sans-serif;
`