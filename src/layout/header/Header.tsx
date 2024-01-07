import styled from "styled-components";
import {FC} from "react";
import {Button} from "@/components/button/Button";
import {logOutTC} from "@/store/reducers/auth-reducer";
import {useAppDispatch} from "@/store/store";
import {Icon} from "@/components/icon/Icon";
import {Container} from "@/components/container/Container";
import {FlexWrapper} from "@/components/flexWrapper/FlexWrapper";

export const Header: FC = () => {
    const dispatch = useAppDispatch()
    const logoutHandler = () => dispatch(logOutTC())
    return (
        <HeaderStyled>
            <Container>
                <FlexWrapper justify={"space-between"} align={"center"}>
                    <Icon iconId={"vk"} vkIcons viewBox="0 0 33 19"/>
                    <Button text={"logout"} addItem={logoutHandler}/>
                </FlexWrapper>
            </Container>
        </HeaderStyled>
    )
}

const HeaderStyled = styled.header`
  flex-shrink: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background: #4A76A8;
  margin-bottom: 14px;

  svg {
    width: 33px;
    height: 19px;
  }
`