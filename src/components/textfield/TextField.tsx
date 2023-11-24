import {ChangeEvent, FC, useState} from "react";
import styled from "styled-components";

type TextFieldType = {
    type: string
    placeholder: string
    name?: string
    onChange?: (value: string) => void
}
export const TextField: FC<TextFieldType> = ({type, placeholder, name, onChange}: TextFieldType) => {
    const [value, setValue] = useState("")

    const handlerChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
        if (onChange) {
            onChange(value)
        }
    }
    return (
        <StyleTextfield type={type} placeholder={placeholder} name={name} onChange={handlerChange} value={value}/>
    )
}

const StyleTextfield = styled.input`
  border: 1px solid #343434;
  background-color: #3b3b3b;
  transition: .3s;
  outline: none;
  border-radius: 4px;
  padding: 6px 12px;
  caret-color: whitesmoke;
  color: whitesmoke;

  &:focus {
    transform: scale(1.05);
    transition: .3s;
    border: 1px solid #646cff;
  }
`