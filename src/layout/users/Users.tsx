import {ChangeEvent, FC, useEffect, useState} from "react";
import styled from "styled-components";
import {FlexWrapper} from "@/components/flexWrapper/FlexWrapper";
import {usersApi, UserType} from "@/api/users-api";
import {User} from "@/layout/users/user/User";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "@/store/store";
import {setUsersAC} from "@/store/reducers/users-reducer";


export const Users: FC = () => {
    const users = useSelector<AppStateType, UserType[]>(state => state.users)
    const dispatch = useDispatch()

    const [pageCount, setPageCount] = useState<number>(1) // колв-во страниц
    const [currentPage, setCurrentPage] = useState<number>(1) // текущая страница
    const [usersCount, setUsersCount] = useState<number>(0) // колв-во всех юзеров
    const [pageSize, setPageSize] = useState<number>(10) // колв-во юзеров на странице

    // переменная для того, чтобы страницы выводились на экран не все, а частично
    const [portionNumber, setPortionNumber] = useState(1)
    const leftLimitPage = (portionNumber - 1) * 10
    const rightLimitPage = portionNumber * 10


    useEffect(() => {
        usersApi.getUser(pageSize, currentPage)
            .then(res => {
                console.log(res.data)
                dispatch(setUsersAC((res.data.items)))
                setUsersCount(res.data.totalCount)
                setPageCount(Math.ceil(usersCount / pageSize))
            })
    }, [pageSize, currentPage, usersCount, dispatch]);

    // handler для изменения кол-ва юзеров на старнице
    const onChangeUsersCountHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        setPageSize(+e.target.value)
        setCurrentPage(1)
        setPortionNumber(1)
    }

    // handler для изменения текущей страницы
    const onCurrentPageClick = (count: number) => setCurrentPage(count)

    const arrOfPages = []
    for (let i = 1; i <= pageCount; i++) {
        arrOfPages.push(i)
    }


    const onPortionNumberPlusClick = () => {
        if (portionNumber < pageCount / 10) {
            setPortionNumber(state => state + 1)
        }
    }
    const onPortionNumberMinusClick = () => {
        if (portionNumber > 1) {
            setPortionNumber(state => state - 1)
        }
    }

    return (
        <StyleUsers>
            <StyleSelect name="users" id="" value={pageSize} onChange={onChangeUsersCountHandler}>
                <option value={10}>10</option>
                <option value={20}>20</option>
                <option value={50}>50</option>
            </StyleSelect>
            <br/>
            <br/>
            <ButtonOperation onClick={onPortionNumberMinusClick}
                             disabled={portionNumber < 2}>prev</ButtonOperation>
            {arrOfPages.filter(el => el >= leftLimitPage && el <= rightLimitPage).map((el, index) => <StyleButton
                key={index} isActive={el === currentPage}
                onClick={() => onCurrentPageClick(el)}>{el}</StyleButton>)}
            <ButtonOperation onClick={onPortionNumberPlusClick}
                             disabled={portionNumber > pageCount / 10}>next</ButtonOperation>
            <p>Page count - {Math.ceil(pageCount ? pageCount : 0)}</p>
            <hr/>
            <br/>
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

const StyleSelect = styled.select`
  width: 100px;
  height: 30px;
  border: 1px solid royalblue;
  border-radius: 4px;
  outline: 1px solid royalblue;
  transition: .2s;
  background-color: #333333;
  color: whitesmoke;
`

const StyleButton = styled.button<{ isActive: boolean }>`
  width: 35px;
  height: 35px;
  border: none;
  transition: .1s;
  user-select: none;

  border-radius: ${props => props.isActive ? '50%' : 'none'};
  background-color: ${props => props.isActive ? 'royalblue' : 'transparent'};
  color: ${props => props.isActive ? 'whitesmoke' : 'black'};

  &:hover {
    background-color: ${props => props.isActive ? 'royalblue' : '#f3f3f3'};
    transition: .2s;
    border-radius: 50%;
  }

  &:active {
    transform: scale(0.9);
  }
`

const ButtonOperation = styled.button`
  padding: 8px 14px;
  background-color: cornflowerblue;
  border: none;
  border-radius: 10px;
  color: white;
  transition: .2s;

  &:active {
    transform: scale(0.9);
    transition: .2s;
  }

  &:disabled {
    opacity: 0.5;
    transform: none;
  }
`