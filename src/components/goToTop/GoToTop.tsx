import styled from "styled-components";
import {FC, useEffect, useState} from "react";
import {Icon} from "@/components/icon/Icon";


export const GoToTop: FC = () => {
    const [show, setShow] = useState(false)

    const goToTop = () => window.scrollTo(0, 0)
    useEffect(() => {
        window.addEventListener("scroll", () => {
            window.scrollY > 200 ? setShow(true) : setShow(false)
        })
    }, [])

    return (
        <>
            {show && <Button onClick={goToTop}>
                <Icon iconId={"top"} width={"30"} height={"30"} viewBox={"0 0 30 30"}/>
            </Button>}
        </>

    )
}
const Button = styled.button`
  position: fixed;
  bottom: 55px;
  right: 30px;
  color: white;
  background-color: rgba(0, 0, 0, 0.7);
  transition: .3s;
  z-index: 1;
  border: none;
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    transform: scale(1.1);
    transition: .2s;
  }

  &:active {
    transform: scale(0.9);
    transition: .2s;
  }

  & svg {
    background-color: transparent;
    border-radius: 6px;
    width: 40px;
    height: 40px;
    transition: .2s;

    &:active {
      box-shadow: 0 0 6px 1px black;
      color: royalblue;
      transition: .2s;
    }
  }
`