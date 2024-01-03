import styled from "styled-components";
import {useState} from "react";
import {AnimatePresence, motion} from "framer-motion";
import {Icon} from "@/components/icon/Icon";

const arrOfImg = [
    "https://img.freepik.com/free-photo/fantastic-wonderland-forest-landscape-with-mushrooms-flowers-ai-generative_157027-1749.jpg?w=2000&t=st=1703941642~exp=1703942242~hmac=baec01ea8e8620c9a3fc19d12d420f6db87267fcf09a2ae9c6dfe9e902ae80c0",
    "https://img.freepik.com/free-photo/woman-eating-red-apple-sunlight_23-2147907104.jpg?w=2000&t=st=1703941909~exp=1703942509~hmac=3a8257abd24a021870d7ee30a763b876f50a29995ecac9305b1e4d3abe56432b",
    "https://img.freepik.com/free-photo/breathtaking-view-snowy-mountains-cloudy-sky-patagonia-chile_181624-9696.jpg?w=2000&t=st=1703941993~exp=1703942593~hmac=bd806f9962442cc71b0fcc627e41f67ec1b7b5757f735ffa0b3b2d936f608717",
    "https://img.freepik.com/free-photo/skateboarder-doing-trick-city-s-street-sunshine_155003-44682.jpg?w=2000&t=st=1703942069~exp=1703942669~hmac=8feb59515af16c5e8ad6739fcb54b859126e75d622365cadf1ab67b7e9ac5aca",
    "https://img.freepik.com/free-photo/underwater-world-with-fish-corals-generative-ai_169016-30520.jpg?w=2000&t=st=1703942106~exp=1703942706~hmac=e102b11cb8cb25140832acbab11dba6a4e669c3d27bf9a62d518d834e589fac3"
]
export const PhotoFeed = () => {
    const [selectedImg, setSelectedImg] = useState<null | string>(null);

    const handlerSwitcherUp = () => setSelectedImg(arrOfImg[arrOfImg.indexOf(selectedImg || "") + 1])
    const handlerSwitcherDown = () => setSelectedImg(arrOfImg[arrOfImg.indexOf(selectedImg || "") - 1])
    return (
        <Wrap>
            <DescriptionWrap>
                <div><Description>Мои фотографии</Description>
                    <Count>77</Count>
                </div>
                <Text>показать на карте </Text>
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
                >
                    <ButtonClosed onClick={() => setSelectedImg(null)}> <Icon iconId={"delete"} vkIcons width="18"
                                                                              height="18"
                                                                              viewBox="0 0 24 24"/></ButtonClosed>
                    <ImgWrap>
                        <button disabled={selectedImg === arrOfImg[0]} onClick={handlerSwitcherDown}>{"<"}</button>
                        <img
                            src={selectedImg ? selectedImg : ""}
                            alt="image"
                            onClick={() => setSelectedImg(null)}
                        />
                        <button disabled={selectedImg === arrOfImg[arrOfImg.length - 1]}
                                onClick={handlerSwitcherUp}>{">"}</button>
                    </ImgWrap>
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

const Modal = styled(motion.div)`
  //width: 1000px;
  //height: 600px;
  position: fixed;
  top: 10%;
  z-index: 10;
  box-shadow: 0 5px 20px 10px #ffffff;
  border-radius: 12px;

  img {
    width: 1000px;
    height: 600px;
    object-fit: cover;
    border-radius: 12px;
  }
`
const ButtonClosed = styled.button`
  position: absolute;
  top: -30px;
  right: -5px;
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
  line-height: 20px; /* 153.846% */
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
  line-height: 20px; /* 153.846% */
  letter-spacing: -0.5px;
`
const Text = styled.span`
  color: #818C99;
  font-feature-settings: 'clig' off, 'liga' off;
  font-family: SF Pro Text, sans-serif;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 153.846% */
  letter-spacing: -0.2px;
`

const ImgWrap = styled.div`
  display: flex;

  img {
    //position: relative;
  }

  button {
    align-self: center;
    padding: 5px 10px;
    background-color: transparent;
    border: none;
    font-size: 3rem;
    color: royalblue;
    
    &:active {
      transform: scale(0.9);
      transition: .3s;
    }
    &:disabled {
      font-size: 2rem;
      color: grey;
      transform: scale(1);
    }
  }
`