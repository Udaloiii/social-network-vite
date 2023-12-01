import { FlexWrapper } from "@/components/flexWrapper/FlexWrapper"


export const UserInfo = () => {
    return (
        <FlexWrapper direction={"column"} justify={"space-between"} style={{margin: "0"}}>
            <div>Name</div>
            <div>Date of Birth</div>
            <div>City</div>
            <div>Country</div>
            <div>Education</div>
        </FlexWrapper>
    )
}