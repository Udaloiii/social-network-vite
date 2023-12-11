import {Button} from "../button/Button"
import {FlexWrapper} from "../flexWrapper/FlexWrapper"
import {TextField} from "../textfield/TextField"
import {FC, useState} from "react";
import styled from "styled-components";

type AddItemFormPropsType = {
    addItem?: (text: string) => void
    as?: string
    placeholder?: string
    buttonTitle?: string
}
export const AddItemForm: FC<AddItemFormPropsType> = ({
                                                          addItem,
                                                          as,
                                                          placeholder,
                                                          buttonTitle
                                                      }: AddItemFormPropsType) => {
    const [value, setValue] = useState("")

    const addItemHandler = () => {
        if (value.trim() !== "") {
            addItem?.(value)
            setValue("")
        }
    }

    return (
        <StyleAddForm>
            <FlexWrapper direction={"column"} gap={"30px"} justify={"start"} align={"start"}>
                <TextField type={"text"} placeholder={placeholder} as={as} value={value} onChange={setValue}/>
                <Button text={buttonTitle} addItem={addItemHandler}/>
            </FlexWrapper>
        </StyleAddForm>
    )
}

const StyleAddForm = styled.div`
`