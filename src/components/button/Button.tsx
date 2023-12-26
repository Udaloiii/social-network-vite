import styled from "styled-components";
import {FC} from "react";

type ButtonType = {
    text?: string
    addItem?: () => void
}
export const Button: FC<ButtonType> = ({text, addItem}: ButtonType) => {
    return (
        <StyleButton onClick={addItem}>
            {text}
        </StyleButton>
    )
}

const StyleButton = styled.button`
  height: max-content;
  width: max-content;
  position: relative;
  padding: 6px 12px;
  //color: #262626;
  color: whitesmoke;
  border: none;
  z-index: 1;
  transition: .2s;
  text-transform: uppercase;
  letter-spacing: 1px;
  background-color: transparent;

  &::before {
    position: absolute;
    content: "";
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 75%;
    height: 5px;
    background-color: #646cff;
    transition: .3s;
    z-index: -1;
  }

  &:hover {
    color: whitesmoke;
    &::before {
      width: 100%;
      height: 100%;
      transition: .3s ease-in-out;
    }
  }

  &:active {
    transform: scale(0.9);
    transition: .2s;
  }
`