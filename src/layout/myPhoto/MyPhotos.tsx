import {FC, useEffect, useMemo, useState} from "react";
import styled from "styled-components";
import {AppStateType, useAppDispatch} from "@/store/store";
import {useSelector} from "react-redux";
import {PhotoType} from "@/api/photo-api";
import {CustomSelect} from "@/components/customSelect/CustomSelect";
import {Pagination} from "@/components/pagination/Pagination";
import {getPhotosTC} from "@/store/reducers/photos-reducer";
import {AnimatePresence} from "framer-motion";
import {Modal} from "@/components/modal/Modal";


export const MyPhotos: FC = () => {
    const photos = useSelector<AppStateType, PhotoType[]>(state => state.photos.hits)
    const arrOfUrlPhotos = photos?.map(el => el.largeImageURL)
    const dispatch = useAppDispatch()
    const [pageSize, setPageSize] = useState(10)
    const [currentPage, setCurrentPage] = useState<number>(1)
    const [selectedImg, setSelectedImg] = useState<null | string>(null);

    const currentTableData = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * pageSize;
        const lastPageIndex = firstPageIndex + pageSize;
        return photos?.slice(firstPageIndex, lastPageIndex);
    }, [photos, currentPage, pageSize])


    const setPageSizeHandler = (pageSize: number) => {
        setPageSize(pageSize)
        setCurrentPage(1)
    }

    const handlerSwitcherUp = () => {
        const result = photos.find(el => el.largeImageURL === selectedImg)
        if (result) {
            setSelectedImg((photos[photos.indexOf(result) + 1]).largeImageURL)
        } else return photos[0]
    }
    const handlerSwitcherDown = () => {
        const result = photos.find(el => el.largeImageURL === selectedImg)
        if (result) {
            setSelectedImg((photos[photos.indexOf(result) - 1]).largeImageURL)
        } else return photos[0]
    }

    useEffect(() => {
        !photos?.length && dispatch(getPhotosTC())
    }, [dispatch, pageSize]);


    return (
        <StyledContainer>
            <CustomSelect title={"фотографий"} value={pageSize} options={[10, 25, 50]}
                          changePageSize={setPageSizeHandler}
            />
            <PhotosWrap>
                {currentTableData?.map(el => {
                    const onClickHandler = () => setSelectedImg(el.largeImageURL)

                    return <Photo key={el.id} src={el.webformatURL}
                                  onClick={onClickHandler}
                    />
                })}
            </PhotosWrap>
            <AnimatePresence initial={false} >
                {selectedImg && (
                    <Modal selectedImg={selectedImg} onClickClosed={() => setSelectedImg(null)}
                           onClickLeft={handlerSwitcherDown} onClickRight={handlerSwitcherUp}
                           arrOfImage={arrOfUrlPhotos}
                    />
                )}</AnimatePresence>
            <PaginationBottomWrapper>
                <Pagination totalCount={photos?.length} currentPage={currentPage}
                            pageSize={pageSize}
                            onPageChange={setCurrentPage}
                            siblingCount={2}/>
            </PaginationBottomWrapper>
        </StyledContainer>
    )
}

const StyledContainer = styled.section`
    position: relative;
    flex-grow: 1;
    padding: 20px;
    border-radius: 12px;
    background-color: white;

    &:last-child {
        padding-bottom: 100px;
    }
`

const PhotosWrap = styled.div`
    margin-top: 20px;
    display: flex;
    justify-content: center;
    //align-items: center;
    flex-wrap: wrap;
    gap: 20px;
`
const Photo = styled.img`
    width: 150px;
    height: 150px;
    object-fit: cover;
    border-radius: 10px;
    cursor: pointer;
`

const PaginationBottomWrapper = styled.div`
    position: absolute;
    bottom: 20px;
    left: 0;
`