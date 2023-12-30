import styled from "styled-components";
import {useState} from "react";

const arrOfImg = [
    "https://img.freepik.com/free-photo/fantastic-wonderland-forest-landscape-with-mushrooms-flowers-ai-generative_157027-1749.jpg?w=2000&t=st=1703941642~exp=1703942242~hmac=baec01ea8e8620c9a3fc19d12d420f6db87267fcf09a2ae9c6dfe9e902ae80c0",
    "https://img.freepik.com/free-photo/woman-eating-red-apple-sunlight_23-2147907104.jpg?w=2000&t=st=1703941909~exp=1703942509~hmac=3a8257abd24a021870d7ee30a763b876f50a29995ecac9305b1e4d3abe56432b",
    "https://img.freepik.com/free-photo/breathtaking-view-snowy-mountains-cloudy-sky-patagonia-chile_181624-9696.jpg?w=2000&t=st=1703941993~exp=1703942593~hmac=bd806f9962442cc71b0fcc627e41f67ec1b7b5757f735ffa0b3b2d936f608717",
    "https://img.freepik.com/free-photo/skateboarder-doing-trick-city-s-street-sunshine_155003-44682.jpg?w=2000&t=st=1703942069~exp=1703942669~hmac=8feb59515af16c5e8ad6739fcb54b859126e75d622365cadf1ab67b7e9ac5aca",
    "https://img.freepik.com/free-photo/underwater-world-with-fish-corals-generative-ai_169016-30520.jpg?w=2000&t=st=1703942106~exp=1703942706~hmac=e102b11cb8cb25140832acbab11dba6a4e669c3d27bf9a62d518d834e589fac3"
]
export const PhotoFeed = () => {
    const [selectedImg, setSelectedImg] = useState<null | string>(null);

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
            {selectedImg && (
                <Modal>
                    <img
                        src={selectedImg ? selectedImg : ""}
                        alt="Описание изображения"
                        onClick={() => setSelectedImg(null)}
                    />
                </Modal>
            )}
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

const Modal = styled.div`
  width: 1000px;
  height: 600px;
  position: fixed;
  top: 10%;
  left: 50%;
  transform: translateX(-50%);
  transition: .5s ease-in-out;
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