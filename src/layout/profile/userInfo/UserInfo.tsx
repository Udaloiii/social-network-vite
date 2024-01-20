import {FlexWrapper} from "@/components/flexWrapper/FlexWrapper"
import styled from "styled-components";
import {UserItemType} from "@/store/reducers/users-reducer";
import {ProfileResponseType} from "@/api/users-api";
import {Icon} from "@/components/icon/Icon";

type UserInfoPropsType = {
    profile?: ProfileResponseType
    user?: UserItemType
    image?: string
}
export const UserInfo = ({profile, user, image}: UserInfoPropsType) => {
    return (
        <UserContainer>
            <UserInfoWrapper>
                <StyleProfileImage
                    src={image ? image : ""}
                />
                <FlexWrapper direction={"column"} justify={"space-between"} style={{margin: "0"}}>
                    <InfoWrap>
                        <StyleDescription>Name:</StyleDescription>
                        <StyleName>{user?.name || profile?.fullName}</StyleName>
                    </InfoWrap>
                    <Separator/>
                    <InfoWrap>
                        <StyleDescription>
                            <Icon iconId={"birth"} vkIcons width="20" height="21" viewBox="0 0 20 21"/>
                            <span>Date of Birth:</span>
                        </StyleDescription>
                        {user?.dateOfBorn || "10.12.1990"}
                    </InfoWrap>
                    <Separator/>
                    <InfoWrap>
                        <StyleDescription>
                            <Icon iconId={"city"} vkIcons width="20" height="21" viewBox="0 0 24 24"/>
                            <span>City:</span></StyleDescription>{user?.city || "Minsk"}</InfoWrap>
                    <Separator/>
                    <InfoWrap>
                        <StyleDescription>
                            <Icon iconId={"country"} vkIcons width="20" height="21" viewBox="0 0 20 21"/>
                            <span>Country:</span> </StyleDescription>{user?.country || "Belarus"}</InfoWrap>
                </FlexWrapper>
            </UserInfoWrapper>
            <Separator/>
            <ItemsWrap>
                <ItemWrap>
                    <Count>152</Count>
                    <Description>subscribers</Description>
                </ItemWrap>
                <ItemWrap>
                    <Count>325</Count>
                    <Description>friends</Description></ItemWrap>
                <ItemWrap>
                    <Count>77</Count>
                    <Description>photos</Description>
                </ItemWrap>
                <ItemWrap>
                    <Count>33</Count>
                    <Description>video</Description>
                </ItemWrap>
            </ItemsWrap>
        </UserContainer>
    )
}
const UserContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: max-content;
    border-radius: 12px;
    background-color: #fff;
    width: 100%;
    z-index: 0;
`
const UserInfoWrapper = styled.div`
    padding: 30px;
    //width: 100%;
    display: flex;
    justify-content: space-between;


    ${FlexWrapper} {
        padding-left: 30px;
        width: 500px;
        color: rgba(109, 120, 133, 1);
        //background-color: red;
    }
`
const StyleProfileImage = styled.div<{ src: string }>`
    background: url(${props => props.src}) 0 20%/ cover;
    width: 450px;
    height: 290px;
    object-fit: cover;
    border-radius: 12px;
`
const StyleName = styled.span`
    text-transform: capitalize;
    font-family: "Special Elite", sans-serif;
    color: black;
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
  display: flex;
  align-items: center;
  color: #6D7885;
  font-feature-settings: 'clig' off, 'liga' off;
  font-family: SF Pro Text, sans-serif;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 133.333% */
  letter-spacing: -0.24px;

  span {
    margin-top: 3px;
    padding-left: 10px;
  }
`

const Separator = styled.div`
  width: 100%;
  height: 1px;
  background-color: rgba(128, 128, 128, 0.2);
`

const ItemsWrap = styled.div`
  padding: 20px;
  display: flex;
  justify-content: space-around;
`
const ItemWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Count = styled.span`
  color: #2A5885;
  font-feature-settings: 'clig' off, 'liga' off;
  font-family: SF Pro Text, sans-serif;
  font-size: 19px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.8px;
  user-select: none;
`
const Description = styled.span`
  color: #818C99;
  font-feature-settings: 'clig' off, 'liga' off;
  font-family: SF Pro Text, sans-serif;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.3px;
`