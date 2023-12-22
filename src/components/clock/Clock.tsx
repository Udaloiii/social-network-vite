import {FC, useEffect, useState} from "react";
import styled from "styled-components";

export const Clock: FC = () => {
    const [data, setData] = useState(new Date())
    const [color, setColor] = useState(false)

    useEffect(() => {
        const interval = setInterval(() => {
            setData(new Date())
            setColor(prevState => !prevState)
        }, 1000)
        return () => clearInterval(interval)
    }, []);

    const getData = (num: number) => num < 10 ? `0${num}` : num
    return (
        <ClockWrapper color={color}>
            <span>{getData(data.getHours())}</span>
            <span>:</span>
            <span>{getData(data.getMinutes())}</span>
            <span>:</span>
            <span>{getData(data.getSeconds())}</span>
        </ClockWrapper>
    )
}

const ClockWrapper = styled.div<{ color: boolean }>`
  display: flex;
  gap: 2px;
  font-family: Poppins, sans-serif;
  //color: ${props => props.color ? "black" : "white"};
  //color: ${props => props.color ? "black" : "white"};
  transform: ${props => props.color ? "scale(1.05)" : "scale(0.95)"};
  transition: .3s;
  text-shadow: ${props => props.color ? "1px 1px 2px white" : "0 0 0 white"};
`