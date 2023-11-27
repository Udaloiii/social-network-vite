import {FC, useEffect} from "react";
import styled from "styled-components";
import {FlexWrapper} from "@/components/flexWrapper/FlexWrapper";
import {usersApi, UserType} from "@/api/users-api";
import {User} from "@/layout/users/user/User";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "@/store/store";
import {setUsersAC} from "@/store/reducers/users-reducer";


export const Users:FC = () => {
    const users = useSelector<AppStateType, UserType[]>(state => state.users)
    const dispatch = useDispatch()

    useEffect(() => {
        !users.length && usersApi.getUser(25)
            .then(res => {
                console.log(res.data)
                dispatch(setUsersAC((res.data.items)))
            })
    }, [users, dispatch]);

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