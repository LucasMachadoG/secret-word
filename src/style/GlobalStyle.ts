import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
    }
    
    body{
        width: 100%;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        background: linear-gradient(180deg, rgba(9, 35, 175, 1) 0%, rgba(0, 0, 0 , 1) 100%);
        color: white;
    }

    button{
        background: #1646a0;
        color: white;
        padding: 0 45px;
        border: 2px solid white;
        border-radius: 25px;
        height: 50px;
        text-transform: uppercase;
        font-weight: bold;
        font-size: 1.2em;
        cursor: pointer;
        transition: 0.4s;
    }

    button:hover{
        background: #0923af;
    }
`

export default GlobalStyle