import styled from "styled-components"

export const Container = styled.main`
width: 100vw;
margin: 0 auto;

}

div {
  display: flex;
  text-align: center;  
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;

  h1 {
   margin: 20px ;
   color: #363f5f;
  }

  .button-modal {
    width: 150px;
    height: 40px;

    border: none;
    margin-left: 510px;

    color: whitesmoke;
    background-color: #6933ff;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }

  }
  
}
`

export const ContainerPlaylist = styled.div`
width: 70vw;
height: 450px;

overflow-y: scroll;

margin: 0 auto;

table {
  width: 100%;
  border-spacing: 0 0.5rem;
  
}

th {
  background-color: #6933FF;
  color: whitesmoke;
  font-weight: bold;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 50px;
  text-align: left;
  line-height: 1.5rem;
  width: 100px;

}

td {
  background-color: white;
  color: #384161;
  text-align: left;
  line-height: 1.5rem;
  width: 185px;

  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 50px;
  
  text-align: left;
  border-bottom: 8px solid #F0F2F5;

  button {
    width: 50px;
    height: 50px;

    font-size: 20px;

    padding-top: 4px;
    text-align: center;
       
    border: none;
    margin-top: -5px;

    color: whitesmoke;
    background-color: #F14949;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }

  }
}
`

export const ContainerAddPlaylistTrack = styled.div`
display: flex;
flex-direction: column;
margin: 20px;

h1 {
  margin-bottom: 30px;
}

justify-content: center;
align-items: center;

input {
    width: 350px;
    height: 40px;

    margin-right: 10px;
    padding-left: 10px;
    margin-bottom: 15px;

    border: none;
    box-shadow: 2px 3px 6px rgba(162, 162, 162, 0.25);
    }

    textarea:focus, input:focus, select:focus {
      outline: 0;
    }

    button {
      width: 350px;
      height: 40px;

      border: none;
      margin-top: 30px;
      margin-right: 10px;
      padding-left: 10px;

      color: whitesmoke;
      background-color: #6933ff;

      transition: filter 0.2s;

      &:hover {
      filter: brightness(0.9);
      }
    }

  }

`

export const NoMusic = styled.div`
display: flex;
flex-direction: column;
width: 70vw;
height: 350px;
margin: 0 auto;

h2 {
  margin: 10px ;
  color: #363f5f;
}

p {
  color: #363f5f;;

}

`