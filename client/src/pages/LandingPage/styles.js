import styled from "styled-components";
import { MOVILE_L, MOVILE_S, TABLET } from "../../styles/global";

export const LandingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 100vh;
  background-image: url("https://wallpapercave.com/wp/wp2566722.jpg");
  background-size: cover;
  background-position: center;
  @media only screen and (max-width:${TABLET}){
    background-position: center;
    background-color: black;
    background-repeat: no-repeat;
    background-size: contain;
  }
`
export const Title = styled.div`
  height: 25vh;
  h1{
    font-size: 5rem;
    box-shadow: inset 0px 0px 7px 8px;
    background-color: #64a8e2b8;
    padding: 2rem;
    border-radius: .5rem;
  } 
  @media only screen and (max-width:${TABLET}){
    h1{
      font-size: 3rem;
    }
  }
  @media only screen and (max-width:${MOVILE_L}){
    h1{
      font-size: 2rem;
    }
  }
  @media only screen and (max-width:${MOVILE_S}){
    h1{
      font-size: 1.5rem;
    }
  }
`
export const BtnAndLoadingContainer = styled.div`
  height: 25vh;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const BtnContainer = styled.div`
  position: absolute;
  animation-name: visiblility1;
  animation-duration: 4s;
  animation-fill-mode: forwards;
  @keyframes visiblility1 {
    0%{
      opacity: 0;
    }
    100%{
      opacity: 1;
    }
  }
  button{
    cursor: pointer;
    font-size: 1rem;
  }
  @media only screen and (max-width:${TABLET}){
    button{
      font-size: .75rem;
    }
  }
  @media only screen and (max-width:${MOVILE_L}){
    button{
      font-size: .5rem;
    }
  }
}
`
export const ImageLoading = styled.div`
  position: absolute;
  animation-name: visiblility;
  animation-duration: 4s;
  animation-fill-mode: forwards;
  @keyframes visiblility {
    0%{
      opacity: 1;
    }
    100%{
      opacity: 0;
    }
  }
  img{
    height: 8rem;
    box-shadow: inset 0px 0px 7px 8px;
    background-color: #64a8e2b8;
    padding: 1rem 1rem;
    border-radius: 50%;
  }
  @media only screen and (max-width:${TABLET}){
    img{
      height: 6rem;
    }
  }
  @media only screen and (max-width:${MOVILE_L}){
    img{
      height: 4rem;
    }
  }
}
`