import styled from "styled-components";
import {ChangeEvent, FC} from "react";

type CustomSelectPropsType = {
    title: string
    value: number
    options: number []
    changePageSize: (count: number) => void
}
export const CustomSelect: FC<CustomSelectPropsType> = ({
                                                            title,
                                                            options,
                                                            value,
                                                            changePageSize
                                                        }: CustomSelectPropsType) => {
    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => changePageSize(+e.target.value)

    return (
        <SelectWrapper>
            <StyleTitle>Количество {title} на странице</StyleTitle>
            <StyleSelect value={value} onChange={onChangeHandler}>
                {options?.map((el, index) => {
                    return <StyleOption key={index} value={el}>{el}</StyleOption>
                })}
            </StyleSelect>
        </SelectWrapper>
    )
}
const SelectWrapper = styled.div`
  margin: 20px;
  display: flex;
  gap: 30px;
`
const StyleTitle = styled.span`
  font-family: "Dialog", sans-serif;
  align-self: flex-end;
`

const StyleSelect = styled.select`
  width: 100px;
  height: 30px;
  border: 1px solid royalblue;
  border-radius: 4px;
  transition: .2s;
  background-color: #333333;
  color: whitesmoke;

  &:focus {
    outline: 1px solid royalblue;
    transition: .2s;
  }
`

const StyleOption = styled.option`

`