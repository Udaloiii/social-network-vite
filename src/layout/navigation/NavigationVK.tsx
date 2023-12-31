import {FC} from "react";
import styled from "styled-components";
import {NavLink} from "react-router-dom";
import {Icon} from "@/components/icon/Icon";

export const NavigationVK: FC = () => {
    return (
        <StyleNavigation>
            <StyleLink to='/profile'>
                <Icon iconId={"mypage"} vkIcons/>
                <StyleText>Profile</StyleText>
            </StyleLink>
            <StyleLink to='/users'>
                <Icon iconId={"friends"} vkIcons/>
                <StyleText>Friends</StyleText></StyleLink>
            <StyleLink to='/messages'>
                <Icon iconId={"messages"} vkIcons/>
                <StyleText>Messages</StyleText></StyleLink>
            <StyleLink to='/news'>
                <Icon iconId={"news"} vkIcons/>
                <StyleText>News</StyleText>
            </StyleLink>
        </StyleNavigation>
    )
}

const StyleNavigation = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 30px;
  //width: 150px;
  padding: 20px 0;
  //background: linear-gradient(90deg, #cfecd0, #a0cea7, #9ec0db);
  min-height: calc(100vh - 110px);
  font-family: "Rubik Doodle Shadow", sans-serif;
  font-size: 1.1rem;

`

const StyleText = styled.div`
  display: flex;
  //justify-content: center;
  align-items: flex-end;
  width: 100px;
  transition: .2s;
  padding-top: 2px;

  &:hover {
    letter-spacing: 1px;
  }
`
const StyleLink = styled(NavLink)`
  width: 180px;
  display: flex;
  //justify-content: center;
  align-items: center;
  gap: 20px;

  transition: .2s;
  user-select: none;
  color: rgba(42, 88, 133, 1);
  font-family: Roboto, sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 27px; /* 216% */
  filter: blur(1px);

  svg {
    width: 30px;
    height: 30px;
  }

  &:hover {
    transition: .2s;
    //color: cornflowerblue;
    filter: blur(0);
  }

  &.active {
    transition: .3s ease-in-out;
    letter-spacing: 0;
    filter: blur(0);

    & ${StyleText} {
      transition: .3s ease-in-out;
      //transform: scale(1.2);
      //letter-spacing: 0;
      letter-spacing: 4px;
      text-decoration: underline;
      text-decoration-style: double;
    }

`