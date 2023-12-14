import {FC} from "react";
import styled from "styled-components";

export const Login: FC = () => {
    return (
        <StyleLogin>
            <form>
                <UserBox>
                    <StyleInput type="text" name="" required/>
                    <StyleLabel>Username</StyleLabel>
                </UserBox>
                <UserBox>
                    <StyleInput type="password" name="" required/>
                    <StyleLabel>Password</StyleLabel>
                </UserBox>
                <center>
                    <StyleLink href="#">
                        SEND
                        <span></span>
                    </StyleLink>
                </center>
            </form>
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
  border-bottom: 1px solid #fff;
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
  color: #fff;
  pointer-events: none;
  transition: .5s;
`

const StyleLink = styled.a`
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

  &:hover {
    background: royalblue;
    color: #fff;
    border-radius: 5px;
    box-shadow: 0 0 5px royalblue,
    0 0 25px royalblue,
    0 0 50px royalblue,
    0 0 100px royalblue;
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