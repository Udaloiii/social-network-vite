import {ChangeEvent, FC, KeyboardEvent} from "react";
import styled from "styled-components";

type TextFieldType = {
    value: string
    type?: "text" | "password"
    placeholder?: string
    name?: string
    as?: string
    onChange?: (value: string) => void
    addItem?: () => void
}
export const TextField: FC<TextFieldType> = ({type, placeholder, name, onChange, as, value, addItem}: TextFieldType) => {
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => onChange?.(e.currentTarget.value)
    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            e.preventDefault()
            addItem?.()
        }
    }

    return (
        <StyleTextfield value={value} type={type} placeholder={placeholder} name={name} onChange={handleChange}
                        onKeyPress={onKeyPressHandler}
                        as={as ? as : "input"}/>
    )
}

const StyleTextfield = styled.input`
  border: 1px solid #343434;
  background-color: #101010;
  opacity: 0.7;
  transition: .3s;
  outline: none;
  border-radius: 4px;
  padding: 10px 12px;
  caret-color: whitesmoke;
  color: whitesmoke;
  max-width: 350px;
  //width: 325px;
  resize: none;
  z-index: 0;

  &:focus {
    transform: scale(1.05);
    transition: .3s;
    border: 1px solid #646cff;
    opacity: 1;
  }
`