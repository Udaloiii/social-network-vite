import styled from "styled-components";
import {FC} from "react";
import {Button} from "@/components/button/Button";
import {logOutTC} from "@/store/reducers/auth-reducer";
import {useAppDispatch} from "@/store/store";

export const Header: FC = () => {
    const dispatch = useAppDispatch()
    const logoutHandler = () => dispatch(logOutTC())
    return (
        <HeaderStyled>
            Header
            <Button text={"logout"} addItem={logoutHandler}/>
        </HeaderStyled>
    )
}

const HeaderStyled = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  background-color: #c4ffff;

  button {
    margin-right: 20px;
  }
`