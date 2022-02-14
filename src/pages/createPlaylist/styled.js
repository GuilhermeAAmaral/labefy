import styled from "styled-components"

export const Container = styled.main`
width: 100vw;

h1 {
   text-align: center;
   margin: 20px auto;

   color: #363f5f;
}
`

export const ContainerInputButton = styled.div`
text-align: center;
margin-top: 50px;


    input {
        width: 350px;
        height: 35px;

        margin-right: 10px;
        padding-left:10px;

        border: none;
        box-shadow: 2px 3px 6px rgba(162, 162, 162, 0.25);
    }

    textarea:focus, input:focus, select:focus {
        outline: 0;
    }

    button {
        width: 100px;
        height: 35px;

        border: none;

        color: whitesmoke;
        background-color: #6933ff;

        transition: filter 0.2s;

        &:hover {
        filter: brightness(0.9);
        }
    }
`