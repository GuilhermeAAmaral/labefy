import { createGlobalStyle } from "styled-components";

import 'react-toastify/dist/ReactToastify.css';

export const GlobalStyle = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-color: #f0f2f5;
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button {
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 600px;
    }

    button {
        cursor: pointer;
    }

    //Estilização do modal 

    .react-modal-overlay{
        background: rgba(0, 0, 0, 0.5);

        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;

        display: flex;
        align-items: center;
        justify-content: center;

    }
    
    .react-modal-content{
        width:100%;
        max-width: 550px;
        background: #f0f2f5;
        padding: 3rem;
        position: relative;
        border-radius: 0.25rem;
    }

    .react-modal-close {
        position: absolute;
        right: 1.5rem;
        top: 1.5rem;
        border: 0;
        background: transparent;

        font-size: 20px;
        color: #F14949;

        transition: filter 0.2s;

        &:hover {
            filter: brightness(0.8);
        }
    }


`