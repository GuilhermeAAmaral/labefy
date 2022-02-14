import styled from "styled-components";

export const Menu = styled.header`
width: 300px;
height: 100vh;

text-align: center;

background-color: #6933ff;
color: whitesmoke;

.button {
    margin-top: 300px;
}


    h1 {
        margin-top: 20px;
        margin-bottom: 50px;
    }

    button {
        margin: 10px;
        border: none;

        width: 150px;
        height: 35px;

        transition: filter 0.2s;

        &:hover {
        filter: brightness(0.9);
    }

}
`

export const ContainerButton = styled.div`
    display: flex;
    flex-direction: column;

    justify-content: center;
    align-items: center;
`