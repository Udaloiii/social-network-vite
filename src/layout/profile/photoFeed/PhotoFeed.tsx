import styled from "styled-components";
import {FC, useState} from "react";
import {AnimatePresence} from "framer-motion";
import photo1 from "../../../assets/photoFeed/wonderland-forest-with-mushrooms.webp"
import photo2 from "../../../assets/photoFeed/woman-eating-apple.webp"
import photo3 from "../../../assets/photoFeed/mountains-cloudy-sky.webp"
import photo4 from "../../../assets/photoFeed/skateboarder-doing-trick.webp"
import photo5 from "../../../assets/photoFeed/underwater-world-with-corals.webp"
import {Modal} from "@/components/modal/Modal";

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
                <Modal selectedImg={selectedImg} onClickClosed={() => setSelectedImg(null)} onClickLeft={handlerSwitcherDown} onClickRight={handlerSwitcherUp}
                arrOfImage={arrOfImg}/>
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

