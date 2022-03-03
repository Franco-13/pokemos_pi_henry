import styled from "styled-components";
import { COLOR_RED_TRANSPARENT, SMOOTH_WHITE_POKEBALL } from "../../styles/global";

export const HomeContainer = styled.div`
  ${({al})=> {
    return`
      background-image: url("https://img.wallpapersafari.com/desktop/1366/768/84/98/Af4vaS.jpg");
      background-attachment: fixed;
      background-repeat: no-repeat;
      background-size: cover;
      height: ${al ? "" : "100vh"};
      background: rgb(98,98,98);
      background: radial-gradient(circle, rgba(98,98,98,1) 0%, rgba(65,66,68,1) 30%, rgba(27,27,27,1) 100%);
    `
  }}     
`
export const Header = styled.header`     
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 4rem;
  background-color: ${COLOR_RED_TRANSPARENT};
  button{
    height: 2.5rem;
    cursor: pointer;
  }
`
export const PokemonsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  .error{
    //height:100vh;
    color: white;
  }
`
export const Select = styled.select`
  margin: 0 .5rem;
  height: 2.5rem;
  border-radius: .25rem;
  padding-left: .5rem;
  font-size: .75rem;
  background-color: ${SMOOTH_WHITE_POKEBALL};
`
export const Modal = styled.div`
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
    justify-content: center;
    background-image: url("https://www.molaunhuevo.com/wp-content/uploads/fondo-pokemon.jpg");
    padding: 4rem;
    border-radius: 5px;
    background-size: cover;
    position: absolute;
    width:20%;
    height:20%;
    >h3{
      padding-bottom: 2rem;
      font-size: 1rem;
      color: black;
      text-align: center;
    }
  }
  &.active{
      display: ${({visible})=>visible?"flex":"none"};
  }
`
export const Loading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  width: 100vw;
  height: 100%;
  background: radial-gradient(circle,rgba(98,98,98,1) 0%,rgba(65,66,68,1) 30%,rgba(27,27,27,1) 100%);
  img{
    height: 9.2rem;
    box-shadow: inset 0px 0px 7px 8px;
    background-color: #64a8e2b8;
    padding: 1rem 1rem;
    border-radius: 50%;
  }
`