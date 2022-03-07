import styled from "styled-components";

export const ModalContainer = styled.div`
position: fixed;
width: 100vw;
height: 100%;
top: 0;
left: 0;
z-index: 500;
background-color: #2d312da1;
justify-content: center;
align-items: center;
display: none;
color: black;
>div{
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-image: url("https://www.molaunhuevo.com/wp-content/uploads/fondo-pokemon.jpg");
  padding: 4rem;
  border-radius: 5px;
  background-size: cover;
  position: absolute;
  width:20%;
  height:20%;
  >h3{
    font-size: 1rem;
    color: black;
    text-align: center;
  }
  section{
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 0;
    margin-top: 5rem;
    button{
      z-index: 2;
      width: 4rem;
      height: 2.5rem;
      cursor: pointer;
    }
  }
}
&.active{
    display: ${({visible})=>visible?"flex":"none"};
}
`