import styled from "styled-components";

export const Loader = () => {
    return (
        <LoadWrapper><StyleLoader>
            <StyledDiv></StyledDiv>
        </StyleLoader></LoadWrapper>
    )
}
const LoadWrapper = styled.div`
  width: calc(100vw - 150px);
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.85);
  display: flex;
  justify-content: center;
  align-items: center;
`
const StyledDiv = styled.div`
`
const StyleLoader = styled.div`
  background-image: linear-gradient(rgb(186, 66, 255) 35%, rgb(0, 225, 255));
  width: 300px;
  height: 300px;
  animation: spinning82341 1.7s linear infinite;
  text-align: center;
  border-radius: 50%;
  filter: blur(1px);
  box-shadow: 0px -5px 20px 0px rgb(186, 66, 255), 0px 5px 20px 0px rgb(0, 225, 255);


  ${StyledDiv} {
    background-color: rgb(36, 36, 36);
    width: 300px;
    height: 300px;
    border-radius: 50%;
    filter: blur(10px);
  }

  @keyframes spinning82341 {
    to {
      transform: rotate(360deg);
    }
  }
`