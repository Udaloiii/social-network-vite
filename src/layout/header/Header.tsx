import styled from "styled-components";
import {FC} from "react";

export const Header: FC = () => {
    return (
        <HeaderStyled>
            Header
        </HeaderStyled>
    )
}

const HeaderStyled = styled.header`
  height: 60px;
  background-color: #c4ffff;
`