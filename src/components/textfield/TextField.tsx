import {ChangeEvent, FC} from "react";
import styled from "styled-components";

type TextFieldType = {
    value: string
    type?: "text" | "password"
    placeholder?: string
    name?: string
    as?: string
    onChange?: (value: string) => void
}
export const TextField: FC<TextFieldType> = ({type, placeholder, name, onChange, as, value}: TextFieldType) => {
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => onChange?.(e.currentTarget.value)

    return (
        <StyleTextfield type={type} placeholder={placeholder} name={name} onChange={handleChange} value={value}
                        as={as}/>
    )
}

const StyleTextfield = styled.input`
  border: 1px solid #343434;
  background-color: #3b3b3b;
  transition: .3s;
  outline: none;
  border-radius: 4px;
  padding: 10px 12px;
  caret-color: whitesmoke;
  color: whitesmoke;
  max-width: 350px;

  &:focus {
    transform: scale(1.05);
    transition: .3s;
    border: 1px solid #646cff;
  }
`