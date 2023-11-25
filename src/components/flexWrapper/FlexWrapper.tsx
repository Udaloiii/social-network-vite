import styled from "styled-components";

type FlexWrapperPropsType = {
    direction?: "row" | "row-reverse" | "column" | "column-reverse"
    justify?: "start" | "center" |"space-between" | "space-around" | "space-evenly"
    align?: "stretch" | "center" | "start" | "end"
    gap?: string
    wrap?: "nowrap" | "wrap" | "wrap-reverse" | string
}
export const FlexWrapper = styled.div<FlexWrapperPropsType>`
  display: flex;
  flex-direction: ${props => props.direction || "row"};
  justify-content: ${props => props.justify || "flex-start"};
  align-items: ${props => props.align || "stretch"};
  gap: ${props => props.gap || "0"};
  flex-wrap: ${props => props.wrap || "nowrap"};
  //height: 100%;
`