import {FC} from "react";
import styled from "styled-components";
import {NavLink} from "react-router-dom";

export const Navigation: FC = () => {
    return (
        <StyleNavigation>
            <StyleLink to='/profile'>Profile
            </StyleLink>
            <StyleLink to='/users'>Friends
            </StyleLink>
            <StyleLink to='/messages'>Messages
            </StyleLink>
            <StyleLink to='/news'>News
            </StyleLink>
        </StyleNavigation>
    )
}

const StyleNavigation = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  width: 150px;
  padding-top: 20px;
  //background: linear-gradient(90deg, #cfecd0, #a0cea7, #9ec0db);
  min-height: calc(100vh - 110px);
  font-family: "Rubik Doodle Shadow", sans-serif;
  font-size: 1.1rem;
`
const StyleLink = styled(NavLink)`
  position: relative;
  width: 100px;
  display: flex;
  justify-content: center;
  transition: .2s;
  user-select: none;
  color: whitesmoke;
  text-shadow: 1px 1px 1px black;

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: -8px;
    width: 0;
    height: 0;
  }

  &:hover {
    transition: .3s;
    color: cornflowerblue;
    letter-spacing: 1px;
  }

  &.active {
    color: royalblue;
    transition: .1s;
    transform: scale(1.3);
    letter-spacing: 0;
    text-shadow: 1px 1px 1px black;

    &::before {
      border-top: 10px solid transparent;
      border-bottom: 10px solid transparent;
      //border-right: 10px solid rgb(204, 204, 204);
      border-right: 10px solid rgba(255, 255, 255, 0.5);
      transition: .2s ease-in-out;
    }
  }
`