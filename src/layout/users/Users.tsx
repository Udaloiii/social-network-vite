import {FC, useEffect, useState} from "react";
import styled from "styled-components";
import {FlexWrapper} from "@/components/flexWrapper/FlexWrapper";
import {usersApi, UserType} from "@/api/users-api";
import {User} from "@/layout/users/user/User";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "@/store/store";
import {setUsersAC, setUsersCountAC} from "@/store/reducers/users-reducer";
import {CustomSelect} from "@/components/customSelect/CustomSelect";
import {Pagination} from "@/components/pagination/Pagination";
import {Loader} from "@/components/loader/Loader";


export const Users: FC = () => {
    const users = useSelector<AppStateType, UserType[]>(state => state.users.items)
    const usersCount = useSelector<AppStateType, number>(state => state.users.totalCount)
    const dispatch = useDispatch()

    const [currentPage, setCurrentPage] = useState<number>(1)
    const [pageSize, setPageSize] = useState(10)
    const [totalCount, setTotalCount] = useState(usersCount)


    // const currentTableData = useMemo(() => {
    //     const firstPageIndex = (currentPage - 1) * pageSize;
    //     const lastPageIndex = firstPageIndex + pageSize;
    //     return users?.slice(firstPageIndex, lastPageIndex);
    // }, [users, currentPage, pageSize])

    const setPageSizeHandler = (pageSize: number) => {
        setPageSize(pageSize)
        setCurrentPage(1)
    }

    useEffect(() => {
        usersApi.getUser(pageSize, currentPage)
            .then(res => {
                console.log(res.data)
                setTotalCount(res.data.totalCount)
                dispatch(setUsersAC((res.data.items)))
                dispatch(setUsersCountAC((res.data.totalCount)))
            })
    }, [pageSize, currentPage, dispatch]);


    return (
        users ?
            <StyleUsers>
                <CustomSelect title={"юзеров"} value={pageSize} options={[10, 25, 50]}
                              changePageSize={setPageSizeHandler}/>
                <FlexWrapper direction={"column"} gap={"30px"}>
                    {users?.map(el => <User key={el.id} id={el.id} name={el.name} followed={el.followed}/>
                    )}
                </FlexWrapper>
                <PaginationWrapper>
                    <Pagination totalCount={totalCount} currentPage={currentPage} pageSize={pageSize}
                                onPageChange={setCurrentPage} siblingCount={2}/>
                </PaginationWrapper>
            </StyleUsers>
            : <Loader/>
    )
}

const StyleUsers = styled.section`
  background-color: #c9ffeb;
  flex-grow: 1;
  padding: 15px;
`
const PaginationWrapper = styled.div`
  margin-top: 50px;
`