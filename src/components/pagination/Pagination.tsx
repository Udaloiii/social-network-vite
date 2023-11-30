import {DOTS, usePagination} from "@/components/pagination/usePagination";
import styled from "styled-components";

export type PaginationType = {
    totalCount: number // общее количество данных, доступных из источника
    currentPage: number  // текущая страница
    pageSize: number //  максимальный объем данных, видимых на одной странице
    onPageChange: (page: number) => void // функция обратного вызова, вызываемая с обновленным значением страницы при изменении страницы
    siblingCount: number //представляет минимальное количество кнопок страницы, отображаемых с каждой стороны кнопки текущей страницы. По умолчанию 1
}

export const Pagination = ({
                               totalCount, currentPage, pageSize, onPageChange, siblingCount = 1
                           }: PaginationType) => {
    const paginationRange = usePagination({
        currentPage,
        totalCount,
        siblingCount,
        pageSize
    });

    // If there are less than 2 times in pagination range we shall not render the component
    if (currentPage === 0 || paginationRange && paginationRange.length < 2) {
        return null;
    }

    const onNext = () => {
        onPageChange(currentPage + 1);
    };

    const onPrevious = () => {
        onPageChange(currentPage - 1);
    };

    const lastPage = paginationRange && paginationRange[paginationRange.length - 1];
    return (
        <PaginationContainer>
            {/* Left navigation arrow */}
            <PaginationItem
                disabled={currentPage === 1}
                onClick={onPrevious}
            >
                <ArrowLeft/>
            </PaginationItem>
            {paginationRange?.map((pageNumber, index) => {

                // If the pageItem is a DOT, render the DOTS unicode character
                if (`${pageNumber}` === DOTS) {
                    return <StyleDots key={index}>&#8230;</StyleDots>;
                }

                // Render our Page Pills
                return (
                    <PaginationItem key={index} condition={pageNumber === currentPage}
                                    onClick={() => onPageChange(Number(pageNumber))}
                    >
                        {pageNumber}
                    </PaginationItem>
                );
            })}
            {/*  Right Navigation arrow */}
            <PaginationItem disabled={currentPage === lastPage}
                            onClick={onNext}
            >
                <ArrowRight/>
            </PaginationItem>
        </PaginationContainer>
    )
}

const PaginationItem = styled.li<{ condition?: boolean, disabled?: boolean }>`
  padding: 0 12px;
  height: 32px;
  text-align: center;
  margin: auto 4px;
  display: flex;
  box-sizing: border-box;
  align-items: center;
  letter-spacing: 0.01071em;
  border-radius: 16px;
  line-height: 1.43;
  font-size: 13px;
  min-width: 32px;
  cursor: pointer;
  background-color: ${props => props.condition && "royalblue"};
  color: ${props => props.condition && "whitesmoke"};
  transition: .2s;

  &:hover {
    background-color: ${props => !props.condition && "rgba(0, 0, 0, 0.08)"};
  }

  pointer-events: ${props => props.disabled && "none"};
  opacity: ${props => props.disabled && "0.3"};
`

const PaginationContainer = styled.ul`
  display: flex;
  list-style-type: none;
`

const StyleDots = styled.li`
  display: flex;
  align-items: center;
  user-select: none;
`

const Arrow = styled.div`
  &::before {
    position: relative;
    /* top: 3pt; Uncomment this to lower the icons as requested in comments*/
    content: '';
    /* By using an em scale, the arrows will size with the font */
    display: inline-block;
    width: 0.4em;
    height: 0.4em;
    border-right: 0.12em solid rgba(0, 0, 0, 0.87);
    border-top: 0.12em solid rgba(0, 0, 0, 0.87);
  }
`

const ArrowRight = styled(Arrow)`
  transform: rotate(45deg);
`
const ArrowLeft = styled(Arrow)`
  transform: rotate(-135deg) translate(-50%);
`