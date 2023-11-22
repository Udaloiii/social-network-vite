import styled from "styled-components";

export const PageError = () => {
    return (
        <StyleErrorImg
            src={"https://img.freepik.com/free-psd/man-holding-plug-404-error-page-found-page_1150-65047.jpg?w=1380&t=st=1700585147~exp=1700585747~hmac=b8a1c97e15913e1818eb45d1a0664724b21f3396b8e120f81f0e197f135ddae0"}>

        </StyleErrorImg>
    )
}
const StyleErrorImg = styled.img`
  width: calc(100vw - 150px);
  height: calc(100vh - 110px);
  object-fit: cover;
  pointer-events: none;
`
