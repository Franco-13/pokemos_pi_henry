import styled from "styled-components";
import { COLOR_RED_TRANSPARENT, SMOOTH_WHITE_POKEBALL } from "../../styles/global";

export const HomeContainer = styled.div`
  height: 100vh;
`
export const Header = styled.header`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 7%;
  background-color: ${COLOR_RED_TRANSPARENT};
  button{
    height: 2.5rem;
    cursor: pointer;
  }
`
export const SelectSection = styled.div`
  display: flex;
`
export const PokemonsContainer = styled.div`
  height: ${({al})=> al ? "" : "93%"};
  background: radial-gradient(circle, rgba(98,98,98,1) 0%, rgba(65,66,68,1) 30%, rgba(27,27,27,1) 100%);
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`
export const Select = styled.select`
  margin: 0 .5rem;
  height: 2.5rem;
  border-radius: .25rem;
  padding-left: .5rem;
  font-size: .75rem;
  background-color: ${SMOOTH_WHITE_POKEBALL};
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