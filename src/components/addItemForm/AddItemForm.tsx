import {Button} from "../button/Button"
import {FlexWrapper} from "../flexWrapper/FlexWrapper"
import {TextField} from "../textfield/TextField"
import {FC, useState} from "react";

type AddItemFormPropsType = {
    addItem?: (text: string) => void
}
export const AddItemForm: FC<AddItemFormPropsType> = ({addItem}: AddItemFormPropsType) => {
    const [value, setValue] = useState("")

    const addItemHandler = () => {
        if (value.trim() !== "") {
            addItem?.(value)
            setValue("")
        }
    }

    return (
        <FlexWrapper direction={"column"} gap={"30px"} justify={"space-between"}>
            <TextField type={"text"} placeholder={"create you post"} as={"textarea"} value={value} onChange={setValue}/>
            <Button text={"add post"} addItem={addItemHandler}/>
        </FlexWrapper>
    )
}