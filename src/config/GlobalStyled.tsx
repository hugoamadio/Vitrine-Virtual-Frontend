import { createGlobalStyle } from "styled-components";

const GlobalStyled = createGlobalStyle`
    body{
        font-family: "Work Sans";
        border: 0px;
        margin: 0px;
        padding: 0px;
    }

    .title-login{
        margin: 0px;
        color: white;
        font-size: 46px;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
        font-weight: 500;
    }

    .title-login-second{
        margin: 0px;
        margin-left: 28px;
        color: white;
        font-size: 43px;
        line-height: auto;
        letter-spacing: 25px;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
        font-weight: 300
    }

    .form-login {
    width: 395px;
    height: 562px;
    border: 0.1px solid rgba(255, 255, 255, 0.1);
    border-radius: 14px;
    backdrop-filter: blur(20px);
    background: linear-gradient(282deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.2) 35%, rgba(0,0,0,0.2) 100%);
    box-sizing: border-box;
    padding: 40px;
    display: flex;
    flex-direction: column;
    
    }


`

export default GlobalStyled