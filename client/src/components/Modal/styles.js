import styled from "styled-components";
import { LAPTOP, MOVILE_L, MOVILE_S, TABLET } from "../../styles/global";

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
    //width: 20rem;
    height: 0;
    margin-top: 5rem;
    button{
      z-index: 2;
      width: 4rem;
      height: 2.5rem;
      cursor: pointer;
    }
  }
  @media only screen and (max-width:${LAPTOP}){
    background-position-x: center;
    background-position-y: bottom;
    background-size: contain;
    background-repeat: no-repeat;
    width: 25%;
    height: 18%;
  }
  @media only screen and (max-width:${TABLET}){
    width: 34%;
    height: 18%;
  }
  @media only screen and (max-width:${MOVILE_L}){
    width: 64%;
    height: 25%;
    padding: 1rem;
  }
  @media only screen and (max-width:${MOVILE_S}){
    width: 89%;
    height: 27%;
    padding: .5rem;
  }
}
&.active{
    display: ${({visible})=>visible?"flex":"none"};
}
`