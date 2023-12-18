import {FC} from "react";
import styled from "styled-components";
import {useForm} from "react-hook-form";
import {z} from "zod";
import {zodResolver} from "@hookform/resolvers/zod";
import {LoginRequestType} from "@/api/auth-api";
import {logInTC} from "@/store/reducers/auth-reducer";
import {AppStateType, useAppDispatch} from "@/store/store";
import {useSelector} from "react-redux";
import {Navigate} from "react-router-dom";


const loginSchema = z.object({
    email: z.string().email(),
    password: z.string().min(3),
    rememberMe: z.boolean().default(false),
})
// export type FormValues = z.infer<typeof loginSchema>
export const Login: FC = () => {
    const isInitialized = useSelector<AppStateType, boolean>(state => state.auth.isLoggedIn)
    const dispatch = useAppDispatch()
    const {register, handleSubmit, formState: {errors}, reset} = useForm<LoginRequestType>({
        resolver: zodResolver(loginSchema),
    })

    const onSubmit = (data: LoginRequestType) => {
        console.log(data)
        dispatch(logInTC(data))
        reset()
    }

    if (isInitialized) {
        return <Navigate to={'/'}/>
    }


    return (
        <StyleLogin>
            <StyleForm onSubmit={handleSubmit(onSubmit)}>
                <UserBox>
                    <StyleInput {...register('email')} required/>
                    <StyleLabel>Username</StyleLabel>
                    <ErrorMessage>{errors.email?.message}</ErrorMessage>
                </UserBox>
                <UserBox>
                    <StyleInput {...register('password')} type={"password"} required/>
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
        </StyleLogin>
    )
}

const StyleLogin = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 400px;
  padding: 40px;
  transform: translate(-50%, -50%);
  background: rgba(24, 20, 20, 0.987);
  box-sizing: border-box;
  box-shadow: 0 15px 25px rgba(0, 0, 0, .6);
  border-radius: 10px;

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
`

const CheckboxWrapper = styled.div`
  display: flex;
  gap: 15px;

  & input {
    width: 20px;
    border: none;
    outline: transparent;
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
  color: darkred;
  bottom: 10px;
`