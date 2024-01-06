import styled from "styled-components";
import {FC, useState} from "react";
import {AnimatePresence, motion} from "framer-motion";
import {Icon} from "@/components/icon/Icon";
import photo1 from "../../../assets/photoFeed/wonderland-forest-with-mushrooms.webp"
import photo2 from "../../../assets/photoFeed/woman-eating-apple.webp"
import photo3 from "../../../assets/photoFeed/mountains-cloudy-sky.webp"
import photo4 from "../../../assets/photoFeed/skateboarder-doing-trick.webp"
import photo5 from "../../../assets/photoFeed/underwater-world-with-corals.webp"

const arrOfImg = [
    photo1, photo2, photo3, photo4, photo5
]
export const PhotoFeed: FC = () => {
    const [selectedImg, setSelectedImg] = useState<null | string>(null);

    const handlerSwitcherUp = () => setSelectedImg(arrOfImg[arrOfImg.indexOf(selectedImg || "") + 1])
    const handlerSwitcherDown = () => setSelectedImg(arrOfImg[arrOfImg.indexOf(selectedImg || "") - 1])
    return (
        <Wrap>
            <DescriptionWrap>
                <div><Description>My photos</Description>
                    <Count>77</Count>
                </div>
                <Text>Show on the map</Text>
            </DescriptionWrap>
            <ImagesWrap>
                {arrOfImg.map((img, index) => <StyleImg key={index} src={img} alt={""}
                                                        onClick={() => setSelectedImg(img)}/>)}
            </ImagesWrap>
            <AnimatePresence>{selectedImg && (
                <Modal
                    initial={{opacity: 0, scale: 0.2}}
                    animate={{opacity: 1, scale: 1}}
                    transition={{duration: 0.3}}
                    exit={{opacity: 0, scale: 0.2}}
                    img={selectedImg}
                >
                    <ButtonClosed onClick={() => setSelectedImg(null)}>
                        <Icon iconId={"delete"} vkIcons width="18"
                              height="18"
                              viewBox="0 0 24 24"/>
                    </ButtonClosed>
                    <StyleButton disabled={selectedImg === arrOfImg[0]} onClick={handlerSwitcherDown} position={"left"}>
                        <Icon iconId={"left"} vkIcons width="34" height="34" viewBox="0 0 48 48"/>
                    </StyleButton>
                    <StyleButton disabled={selectedImg === arrOfImg[arrOfImg.length - 1]}
                                 onClick={handlerSwitcherUp} position={"right"}>
                        <Icon iconId={"right"} vkIcons width="34" height="34" viewBox="0 0 48 48"/>
                    </StyleButton>
                </Modal>
            )}</AnimatePresence>
        </Wrap>
    )
}

const Wrap = styled.div`
  padding: 20px;
  background-color: #fff;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  gap: 30px;
`
const StyleImg = styled.img`
  width: 200px;
  height: 130px;
  object-fit: cover;
  border-radius: 12px;
  cursor: pointer;
`

const Modal = styled(motion.div)<{ img: string }>`
  width: 1000px;
  height: 600px;
  position: fixed;
  top: 10%;
  z-index: 10;
  border-radius: 12px;
  box-shadow: 0 5px 10px 5px #ffffff;
  background: url(${props => props.img || ""}) 0 0 / cover;
`
const ButtonClosed = styled.button`
  position: absolute;
  top: -30px;
  right: -40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background-color: transparent;
  border-radius: 30%;
  transition: 0.2s;
  font-size: 1rem;
  color: #2a2a2a;

  svg {
    width: 40px;
    height: 40px;
  }

  &:hover {
    transform: scale(1.6) rotate(90deg);
    transition: 0.2s;
  }

  &:active {
    transform: scale(0.9);
    transition: 0.1s;
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


const DescriptionWrap = styled.div`
  display: flex;
  justify-content: space-between;
`
const ImagesWrap = styled.div`
  display: flex;
  justify-content: space-between;
`
const Description = styled.span`
  color: #000;
  font-feature-settings: 'clig' off, 'liga' off;
  font-family: SF Pro Text, sans-serif;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: -0.3px;
`
const Count = styled.span`
  padding-left: 10px;
  color: #818C99;
  font-feature-settings: 'clig' off, 'liga' off;
  font-family: SF Pro Text, sans-serif;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: -0.5px;
`
const Text = styled.span`
  color: #818C99;
  font-feature-settings: 'clig' off, 'liga' off;
  font-family: SF Pro Text, sans-serif;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: -0.2px;
`

