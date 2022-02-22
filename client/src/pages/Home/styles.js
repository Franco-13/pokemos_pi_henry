import styled from "styled-components";
import { COLOR_RED_TRANSPARENT } from "../../styles/global";

export const HomeContainer = styled.div`     
  background-image: url("https://img.wallpapersafari.com/desktop/1366/768/84/98/Af4vaS.jpg");
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  padding-bottom: 1rem
  //height: ${(view)=>view.length ? "100vh" : ""};
`
export const Header = styled.header`     
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 3.5rem;
  background-color: ${COLOR_RED_TRANSPARENT};
`
export const PokemonsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
`
export const Select = styled.select`
  margin: 0 .5rem;
  height: 1.75rem;
  border-radius: .25rem;
  padding-left: .5rem;
`