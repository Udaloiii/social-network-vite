import {FC} from "react";
import styled from "styled-components";
import {NavLink} from "react-router-dom";

export const Navigation: FC = () => {
    return (
        <StyleNavigation>
            <NavLink to='/profile'>Profile</NavLink>
            <NavLink to='/messages'>Messages</NavLink>
            <NavLink to='/news'>News</NavLink>
        </StyleNavigation>
    )
}

const StyleNavigation = styled.nav`
  display: flex;
  flex-direction: column;
  width: 200px;
  background-color: #d2f3f3;
  height: calc(100vh - 120px);
`