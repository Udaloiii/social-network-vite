import {useEffect} from "react";
import {useSelector} from "react-redux";
import {AppStateType, useAppDispatch} from "@/store/store";
import {setAppErrorAC} from "@/store/reducers/app-reducer";
import styled from "styled-components";


export const Snackbar = () => {
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
            <button onClick={onClickHandler}>x</button>
        </Wrapper>

    )
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  position: fixed;
  bottom: 50px;
  left: 50%;
  transform: translateX(-50%);
  background-color: royalblue;
  color: #FDD835;
  padding: 8px 12px;
  border-radius: 6px;
  transition: opacity 0.5s ease-in-out;
  font-size: 1.4rem;

  & button {
    width: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    background-color: #0a4181;
    color: #FDD835;
    border-radius: 30%;
    transition: 0.2s;
    font-size: 1rem;

    &:hover {
      transform: scale(1.1);
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