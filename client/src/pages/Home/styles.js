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