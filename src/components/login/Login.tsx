import {FC, useState} from "react";
import styled from "styled-components";
import {useForm} from "react-hook-form";
import {z} from "zod";
import {zodResolver} from "@hookform/resolvers/zod";
import {LoginRequestType} from "@/api/auth-api";
import {logInTC} from "@/store/reducers/auth-reducer";
import {AppStateType, useAppDispatch} from "@/store/store";
import {useSelector} from "react-redux";
import {Navigate} from "react-router-dom";
import background from '../../assets/backgrounds/background-login.webp'
import {Icon} from "@/components/icon/Icon";
import {FlexWrapper} from "@/components/flexWrapper/FlexWrapper";


const loginSchema = z.object({
    email: z.string().email(),
    password: z.string().min(3),
    rememberMe: z.boolean().default(false),
})
// export type FormValues = z.infer<typeof loginSchema>
export const Login: FC = () => {
    const [show, setShow] = useState(false)
    const isInitialized = useSelector<AppStateType, boolean>(state => state.auth.isLoggedIn)
    const dispatch = useAppDispatch()
    const {register, handleSubmit, formState: {errors}, reset} = useForm<LoginRequestType>({
        resolver: zodResolver(loginSchema),
    })

    const onSubmit = (data: LoginRequestType) => {
        dispatch(logInTC(data))
        reset()
    }

    if (isInitialized) {
        return <Navigate to={'/'}/>
    }


    return (
        <LoginWrap>
            <StyleLogin>
                <StyleForm onSubmit={handleSubmit(onSubmit)}>
                    <UserBox>
                        <StyleInput {...register('email')} required/>
                        <StyleLabel>Username</StyleLabel>
                        <ErrorMessage>{errors.email?.message}</ErrorMessage>
                    </UserBox>
                    <UserBox>
                        <StyleInput {...register('password')} type={show ? "text" : "password"} required/>
                        {show ? <Icon iconId={"noSee"} width={"20px"} height={"20px"}
                                      viewBox={"0 0 20 20"}
                                      onClick={() => setShow(prevState => !prevState)}/> :
                            <Icon iconId={"see"} width={"20px"} height={"20px"}
                                  viewBox={"0 0 24 24"}
                                  onClick={() => setShow(prevState => !prevState)}/>}
                        <StyleLabel>Password</StyleLabel>
                        <ErrorMessage>{errors.password?.message}</ErrorMessage>
                    </UserBox>
                    <CheckboxWrapper>
                        <input {...register('rememberMe')} type={"checkbox"} id={"rememberMe"}/>
                        <label htmlFor={"rememberMe"}>remember me</label>
                    </CheckboxWrapper>
                    <center>
                        <StyleButton type={"submit"}>
                            SEND
                            <span></span>
                        </StyleButton>
                    </center>
                </StyleForm>
                <p>
                    Don't have an account? Use a free:
                </p>
                <FlexWrapper direction={"column"} gap={"5px"}>
                    <span>Email: <span>free@samuraijs.com</span></span>
                    <span>Password: <span>free</span></span>
                </FlexWrapper>
            </StyleLogin>
        </LoginWrap>
    )
}

const LoginWrap = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: url(${background}) 100% 55%/ cover no-repeat;
`
const StyleLogin = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 400px;
  padding: 40px;
  transform: translate(-50%, -50%);
  background: rgba(0, 0, 0, 0.8);
  box-sizing: border-box;
  box-shadow: 0 15px 25px rgba(0, 0, 0, .6);
  border-radius: 10px;

  p {
    font-family: Josephin Sans, sans-serif;
    margin-top: 30px;
    color: rgba(255, 255, 255, 0.5);
    font-size: 0.9rem;
  }


  ${FlexWrapper} {
    margin-top: 5px;
    color: rgba(65, 105, 225, 0.4);
    font-size: 0.9rem;

    span {
      :nth-child(1) {
        color: rgba(128, 128, 128, 0.5);
        font-size: 0.8rem;
      }
    }
  }

  @keyframes btn-anim1 {
    0% {
      left: -100%;
    }

    50%, 100% {
      left: 100%;
    }
  }
`
const StyleForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

const UserBox = styled.div`
  position: relative;
  display: flex;

  svg {
    position: absolute;
    top: 12px;
    right: 0;
    color: royalblue;
    margin-bottom: 15px;
    cursor: pointer;
    transition: .1s;

    :active {
      transform: scale(0.9);
      transition: .1s;
    }
  }
`

const StyleInput = styled.input`
  width: 100%;
  padding: 10px 0;
  font-size: 16px;
  color: #fff;
  margin-bottom: 30px;
  border: none;
  border-bottom: 1px solid royalblue;
  outline: none;
  background: transparent;

  &:focus ~ label, &:valid ~ label {
    top: -20px;
    left: 0;
    color: royalblue;
    font-size: 12px;
  }
`

const StyleLabel = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  padding: 10px 0;
  font-size: 16px;
  color: grey;
  pointer-events: none;
  transition: .5s;
`

const StyleButton = styled.button`
  position: relative;
  display: inline-block;
  padding: 10px 20px;
  color: #ffffff;
  font-size: 16px;
  text-decoration: none;
  text-transform: uppercase;
  overflow: hidden;
  transition: .3s;
  margin-top: 40px;
  letter-spacing: 4px;
  border: none;
  outline: none;
  background-color: transparent;

  &:hover {
    background: royalblue;
    color: #fff;
    border-radius: 5px;
    box-shadow: 0 0 5px royalblue,
    0 0 10px royalblue,
    0 0 20px royalblue,
    0 0 40px royalblue;
  }

  &:active {
    transform: scale(0.9);
    transition: .2s;
    background: cornflowerblue;
    color: #fff;
    border-radius: 5px;
    box-shadow: 0 0 5px cornflowerblue,
    0 0 12px cornflowerblue,
    0 0 25px cornflowerblue,
    0 0 50px cornflowerblue;
    letter-spacing: 3px;
  }

  span {
    position: absolute;
    display: block;

    &:nth-child(1) {
      bottom: 2px;
      left: -100%;
      width: 100%;
      height: 2px;
      background: linear-gradient(90deg, transparent, royalblue);
      animation: btn-anim1 2s linear infinite;
    }
  }
  
  &:focus {
    box-shadow: 0 0 5px 2px rgb(65, 105, 225);
    transition: border-color 0.3s;
  }
`

const CheckboxWrapper = styled.div`
  display: flex;
  gap: 15px;

  & input {
    width: 20px;
    height: 20px;
    border: none;
    outline: none;

    &:focus {
      box-shadow: 0 0 7px 5px rgba(65, 105, 225, 0.5);
      transition: border-color 0.3s;
    }
  }

  & label {
    color: lightgrey;
    align-self: flex-end;
    user-select: none;
    transition: .3s;

    &:hover {
      transform: scale(1.02);
      transition: .5s;
    }
  }
`

const ErrorMessage = styled.div`
  position: absolute;
  color: #880000;
  bottom: 5px;
  font-size: 0.8rem;
`