import {FC} from "react";
import styled from "styled-components";
import {NavLink} from "react-router-dom";

export const Navigation: FC = () => {
    return (
        <StyleNavigation>
            <NavLink to='/profile' style={({isActive}) => {
                return {color: isActive ? "red" : "black"}
            }}>Profile</NavLink>
            <NavLink to='/users' style={({isActive}) => {
                return {color: isActive ? "red" : "black"}
            }}>Friends</NavLink>
            <NavLink to='/messages' style={({isActive}) => {
                return {color: isActive ? "red" : "black"}
            }}>Messages</NavLink>
            <NavLink to='/news' style={({isActive}) => {
                return {color: isActive ? "red" : "black"}
            }}>News</NavLink>
        </StyleNavigation>
    )
}

const StyleNavigation = styled.nav`
  display: flex;
  flex-direction: column;
  width: 150px;
  padding: 0 15px 0;
  background-color: #d2f3f3;
  min-height: calc(100vh - 110px);
`