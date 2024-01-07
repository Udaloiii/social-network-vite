import {FC, useEffect} from "react";
import {useSelector} from "react-redux";
import {AppStateType, useAppDispatch} from "@/store/store";
import {setAppErrorAC} from "@/store/reducers/app-reducer";
import styled from "styled-components";
import {Icon} from "@/components/icon/Icon";


export const Snackbar:FC = () => {
    const error = useSelector<AppStateType, string | null>(state => state.app.error)
    const dispatch = useAppDispatch()

    useEffect(() => {
        if (error) {
            const timer = setTimeout(() => {
                dispatch(setAppErrorAC(null))
            }, 6000);
            return () => clearTimeout(timer);
        }
    }, [dispatch, error]);

    const onClickHandler = () => {
        dispatch(setAppErrorAC(null))
    }

    return (
        error &&
        <Wrapper>
            <span>{error}</span>
            <button onClick={onClickHandler}>
                <Icon iconId={"delete"} vkIcons width="18" height="18" viewBox="0 0 24 24"/>
            </button>
        </Wrapper>

    )
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px 16px;
  gap: 20px;
  position: fixed;
  bottom: 50px;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 8px;
  border: 0.5px solid rgba(0, 0, 0, 0.08);
  background: rgba(0, 0, 0, 0.8);
  z-index: 1;

  box-shadow: 0 8px 10px 0 rgba(0, 0, 0, 0.8);

  color: #ff3a62;
  font-feature-settings: 'clig' off, 'liga' off;
  font-family: Roboto, sans-serif;
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0.2px;

  & button {
    width: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    background-color: transparent;
    border-radius: 30%;
    transition: 0.2s;
    font-size: 1rem;
    color: whitesmoke;

    &:hover {
      transform: scale(1.6) rotate(90deg);
      transition: 0.2s;
    }

    &:active {
      transform: scale(0.9);
      transition: 0.1s;
    }
  }
}

@media (max-width: 768px) {
  width: 80%;
}

@media (max-width: 500px) {
  top: 85%;
  padding: 10px;
  font-size: 1.2rem;
  gap: 10px;
`