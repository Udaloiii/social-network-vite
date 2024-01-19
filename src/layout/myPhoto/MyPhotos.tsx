import {FC, useEffect, useState} from "react";
import styled from "styled-components";
import {AppStateType, useAppDispatch} from "@/store/store";
import {setAppStatusAC} from "@/store/reducers/app-reducer";
import {getPhotosTC} from "@/store/reducers/photos-reducer";
import {useSelector} from "react-redux";
import {PhotoType} from "@/api/photo-api";
import {CustomSelect} from "@/components/customSelect/CustomSelect";


export const MyPhotos: FC = () => {
    const photos = useSelector<AppStateType, PhotoType[]>(state => state.photos.hits)
    const dispatch = useAppDispatch()
    const [pageSize, setPageSize] = useState(10)

    const setPageSizeHandler = (pageSize: number) => {
        setPageSize(pageSize)
    }

    useEffect(() => {
        setAppStatusAC("loading")
        dispatch(getPhotosTC(pageSize))
    }, [dispatch, pageSize]);

    return (
        <StyledContaner>
            <CustomSelect title={"фотографий"} value={pageSize} options={[10, 25, 50]}
                          changePageSize={setPageSizeHandler}
            />
            <PhotosWrap>{photos?.map(el => <Photo src={el.largeImageURL}/>)}</PhotosWrap>
        </StyledContaner>
    )
}

const StyledContaner = styled.section`
    position: relative;
    flex-grow: 1;
    //width: calc(100vw - 150px);
    padding: 20px;
    border-radius: 12px;
    background-color: white;
`

const PhotosWrap = styled.div`
    margin-top: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 20px;
`
const Photo = styled.img`
    width: 150px;
    height: 150px;
    object-fit: cover;
    border-radius: 10px;
`