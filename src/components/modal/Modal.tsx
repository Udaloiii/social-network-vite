import {Icon} from "@/components/icon/Icon";
import styled from "styled-components";
import {motion} from "framer-motion";
import {FC} from "react";

type ModalPropsType = {
    selectedImg: string
    onClickClosed?: (value: null) => void
    onClickLeft?: () => void
    onClickRight?: () => void
    arrOfImage?: string[]
}
export const Modal: FC<ModalPropsType> = ({
                                              selectedImg,
                                              onClickClosed,
                                              onClickLeft,
                                              onClickRight,
                                              arrOfImage
                                          }: ModalPropsType) => {


    return (
        <StyleModal
            img={selectedImg}
            key={selectedImg}
            initial={{opacity: 0, scale: 0.9}}
            animate={{opacity: 1, scale: 1}}
            transition={{duration: 0.3, delay: 0.1}}
            exit={{opacity: 0, scale: 0.8}}
        >
            <ButtonClosed onClick={() => onClickClosed?.(null)}>
                <Icon iconId={"closed"} vkIcons width="18"
                      height="18"
                      viewBox="0 0 24 24"/>
            </ButtonClosed>
            <StyleButton disabled={selectedImg === arrOfImage?.[0]} onClick={onClickLeft} position={"left"}>
                <Icon iconId={"left"} vkIcons width="34" height="34" viewBox="0 0 48 48"/>
            </StyleButton>
            <StyleButton disabled={selectedImg === arrOfImage?.[arrOfImage?.length - 1]}
                         onClick={onClickRight} position={"right"}>
                <Icon iconId={"right"} vkIcons width="34" height="34" viewBox="0 0 48 48"/>
            </StyleButton>
        </StyleModal>
    )
}

const StyleModal = styled(motion.div)<{ img: string }>`
    width: 80vw;
    height: 80vh;
    position: fixed;
    top: 10%;
    left: 10%;
    z-index: 10;
    border-radius: 12px;
    box-shadow: 0 5px 10px 5px #ffffff;
    background: url(${props => props.img || ""}) 50% /cover no-repeat;
`
const ButtonClosed = styled.button`
    position: absolute;
    top: -37px;
    right: -47px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    background-color: transparent;
    border-radius: 30%;
    transition: 0.2s;
    font-size: 1rem;
    color: #000000;

    svg {
        width: 40px;
        height: 40px;
        box-shadow: 0 0 5px 2px rgba(255, 255, 255, 0.5) inset;
        border-radius: 50%;

        &:hover {
            box-shadow: 0 0 5px 2px rgba(255, 255, 255);
        }
    }

    &:hover {
        transform: scale(1.6) rotate(90deg);
        transition: .2s;
    }

    &:active {
        transform: scale(0.8) rotate(90deg);
        transition: .2s;
    }
`
const StyleButton = styled.button<{ position: string }>`
    width: 60px;
    height: 60px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: ${props => props.position === "left" ? "" : "0"};
    background-color: transparent;
    border: none;
    color: #4a76a8;

    &:active {
        top: 50%;
        transform: scale(0.97) translateY(-50%);
        transition: .3s;
    }

    &:disabled {
        color: #edfff8;
        opacity: 0.3;
        top: 50%;
        transform: scale(0.9) translateY(-50%);
    }
`