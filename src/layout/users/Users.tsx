import {FC, useEffect, useState} from "react";
import styled from "styled-components";
import {FlexWrapper} from "@/components/flexWrapper/FlexWrapper";
import {User} from "@/layout/users/user/User";
import {useSelector} from "react-redux";
import {AppStateType, useAppDispatch} from "@/store/store";
import {changePageSizeAC, getUsersTC, UserItemType} from "@/store/reducers/users-reducer";
import {CustomSelect} from "@/components/customSelect/CustomSelect";
import {Pagination} from "@/components/pagination/Pagination";
import {Loader} from "@/components/loader/Loader";
import {Navigate} from "react-router-dom";


export const Users: FC = () => {
    const isInitialized = useSelector<AppStateType, boolean>(state => state.auth.isLoggedIn)
    const users = useSelector<AppStateType, UserItemType[]>(state => state.users.items)
    const pageSize = useSelector<AppStateType, number>(state => state.users.pageSize)
    const usersCount = useSelector<AppStateType, number>(state => state.users.totalCount)
    const dispatch = useAppDispatch()

    const [currentPage, setCurrentPage] = useState<number>(1)
    // const [totalCount, setTotalCount] = useState(usersCount)


    // const currentTableData = useMemo(() => {
    //     const firstPageIndex = (currentPage - 1) * pageSize;
    //     const lastPageIndex = firstPageIndex + pageSize;
    //     return users?.slice(firstPageIndex, lastPageIndex);
    // }, [users, currentPage, pageSize])

    const setPageSizeHandler = (pageSize: number) => {
        dispatch(changePageSizeAC(pageSize))
        setCurrentPage(1)
    }

    useEffect(() => {
        dispatch(getUsersTC(pageSize, currentPage))
    }, [pageSize, usersCount, currentPage, dispatch]);

    if (!isInitialized) {
        return <Navigate to={'/login'}/>
    }
    return (
        <StyleUsers>
            <CustomSelect title={"юзеров"} value={pageSize} options={[10, 25, 50]}
                          changePageSize={setPageSizeHandler}/>
            {users.length ? <>
                    <PaginationTopWrapper>
                        <Pagination totalCount={usersCount} currentPage={currentPage} pageSize={pageSize}
                                    onPageChange={setCurrentPage}
                                    siblingCount={2}/>
                    </PaginationTopWrapper>
                    <FlexWrapper direction={"column"} gap={"30px"}>
                        {users?.map(el => <User key={el.id} userId={el.id} name={el.name} followed={el.followed}
                                                icon={el.icon}/>
                        )}
                    </FlexWrapper>
                    <PaginationBottomWrapper>
                        <Pagination totalCount={usersCount} currentPage={currentPage} pageSize={pageSize}
                                    onPageChange={setCurrentPage} siblingCount={2}/>
                    </PaginationBottomWrapper>
                </>
                : <Loader/>
            }
        </StyleUsers>

    )
}

const StyleUsers = styled.section`
  position: relative;
  //width: calc(100vw - 150px);
  flex-grow: 1;
  padding: 20px;
  border-radius: 12px;
  background-color: white;

  &:last-child {
    padding-bottom: 100px;
  }
`
const PaginationTopWrapper = styled.div`
  margin-left: -20px;
  padding-top: 20px;
  padding-bottom: 50px;
`

const PaginationBottomWrapper = styled.div`
  position: absolute;
  bottom: 20px;
  left: 0;
`