import styled from "styled-components";
import { COLOR_RED_TRANSPARENT, LAPTOP, SMOOTH_WHITE_POKEBALL, TABLET } from "../../styles/global";

export const HomeContainer = styled.div`
    
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
  @media only screen and (max-width:${LAPTOP}){
    button, input, select{
      font-size: .60rem;
    }
  }
  @media only screen and (max-width:${TABLET}){
    position: fixed;
    z-index:100;
    width: 100%;
  } 
`
export const SelectSection = styled.div`
  button{
    display: none;
  }
  @media only screen and (max-width:${TABLET}){
    display: flex;
    flex-direction: column;
    //padding-top: 10rem;
    button{
      display: flex;
      width: 10rem;
      margin-left: 0.5rem;
    }
  }
`
export const SelectOptions = styled.div`
  @media only screen and (max-width:${TABLET}){
    option{
      font-size: .5rem;
    }
    select{
      display: ${({show}) => show ? "flex" : "none"};
      width: 10rem;
    }
    select:nth-child(1){
      position: absolute;
      top: 3.5rem;
    }
    select:nth-child(2){
      position: absolute;
      top: 6rem;
    }
    select:nth-child(3){
      position: absolute;
      top: 8.5rem;
    }
    select:last-child{
      position: absolute;
      top: 11rem;
    }
  }
`
export const PokemonsContainer = styled.div`
  height: ${({al})=> al ? "" : "100vh"};
  background: radial-gradient(circle, rgba(98,98,98,1) 0%, rgba(65,66,68,1) 30%, rgba(27,27,27,1) 100%);
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  @media only screen and (max-width:${TABLET}){
    padding-top:4rem;
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