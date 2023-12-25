import styled from "styled-components";
import {FC} from "react";
import {Button} from "@/components/button/Button";
import {logOutTC} from "@/store/reducers/auth-reducer";
import {useAppDispatch} from "@/store/store";
import {Clock} from "@/components/clock/Clock";

export const Header: FC = () => {
    const dispatch = useAppDispatch()
    const logoutHandler = () => dispatch(logOutTC())
    return (
        <HeaderStyled>
            <ClockWrap><Clock/></ClockWrap>
            <Button text={"logout"} addItem={logoutHandler}/>
        </HeaderStyled>
    )
}

const HeaderStyled = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  //background: linear-gradient(90deg, #4cbeff, #ffffff);

  button {
    margin-right: 20px;
  }
`

const ClockWrap = styled.div`
  padding-left: 40px;
`