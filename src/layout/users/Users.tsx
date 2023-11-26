import {useEffect, useState} from "react";
import styled from "styled-components";
import {FlexWrapper} from "@/components/flexWrapper/FlexWrapper";
import {usersApi, UserType} from "@/api/users-api";
import {User} from "@/layout/users/user/User";


export const Users = () => {
    const [users, setUsers] = useState<null | UserType[]>(null)

    useEffect(() => {
        usersApi.getUser()
            .then(res => {
                console.log(res.data)
                setUsers(res.data.items)
            })
    }, []);
    return (
        <StyleUsers>
            <FlexWrapper direction={"column"} gap={"30px"}>
                {users?.map(el => <User key={el.id} name={el.name} followed={el.followed}/>
                )}
            </FlexWrapper>
        </StyleUsers>
    )
}

const StyleUsers = styled.section`
  background-color: #c9ffeb;
  flex-grow: 1;
  padding: 15px;
`