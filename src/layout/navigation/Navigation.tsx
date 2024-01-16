import {FC} from "react";
import styled from "styled-components";
import {NavLink} from "react-router-dom";
import {Icon} from "@/components/icon/Icon";

export const Navigation: FC = () => {
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
  padding: 20px 0;
  min-height: calc(100vh - 110px);
  font-family: "Rubik Doodle Shadow", sans-serif;
  font-size: 1.1rem;

`

const StyleText = styled.span`
  position: relative;
  display: flex;
  align-items: flex-end;
  width: max-content;
  padding-top: 2px;
  transition: .3s ease-in-out;

  &::before {
    content: "";
    position: absolute;
    bottom: -5px;
    left: -5px;
    width: 0;
    height: 40px;
    background-color: rgba(255, 255, 255);
    box-shadow: 0 5px 5px rgba(74, 118, 168, 0.5);
    border-radius: 8px;
    transition: .2s ease-in-out;
    z-index: -1;
  }

  &:hover {
    letter-spacing: 1px;
  }
`
const StyleLink = styled(NavLink)`
  width: 180px;
  display: flex;
  align-items: center;
  gap: 20px;

  transition: .2s;
  user-select: none;
  color: rgba(42, 88, 133, 1);
  font-family: Roboto, sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 27px;
  filter: blur(1px);

  svg {
    width: 30px;
    height: 30px;
  }

  &:hover {
    transition: .2s;
    filter: blur(0);
  }

  &.active {
    transition: .3s ease-in-out;
    letter-spacing: 0;
    filter: blur(0);

    & ${StyleText} {
      transition: .3s ease-in-out;
      letter-spacing: 4px;

      &::before {
        width: 140px;
        transition: .3s ease-in-out;
      }
    }
  }
`