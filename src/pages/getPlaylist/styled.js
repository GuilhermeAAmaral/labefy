import styled from "styled-components"

export const Container = styled.main`
width: 100vw;


h1 {
   text-align: center;
   margin: 20px auto;

   color: #363f5f;
}
`

export const ContainerPlaylist = styled.div`
text-align: center;
margin-top: 50px;


    button {
        display: flex;
      
        box-shadow: 2px 3px 6px rgba(162, 162, 162, 0.25);
        border: none;

        width: 700px;
        margin: 20px auto;
        padding: 20px;

        color: #363f5f;
        background-color: white;

        transition: ease 0.2s;

        &:hover {
        transform: scale(1.05);
        border-bottom: solid 1px #6933ff;
        cursor: pointer
        }
    }

    div {
        display: flex;
        

        p {
            font-size: 25px;
            padding-left: 10.5px;
            padding-bottom: 7px;
            padding-top: 13.5px;
            padding-right: 0px;

        }

        .ButtonDelete {
        position: absolute;
        left: 86.5vw;

        box-shadow: 2px 3px 6px rgba(162, 162, 162, 0.25);
        border: none;

        width: 50px;

        margin: 20px auto;
        padding: 0.95px;

        color: white;
        background-color: #F14949;

        transition: ease 0.2s;

        &:hover {
        transform: scale(1.05);
        cursor: pointer
        }
    }
    }


`
