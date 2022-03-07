import styled from 'styled-components';
import { COLOR_RED, COLOR_RED_TRANSPARENT, LAPTOP, MOVILE_L, MOVILE_S, SMOOTH_WHITE_POKEBALL, TABLET } from '../../styles/global';

export const ContainerCreated = styled.div`
/*   background-image: url("https://img.wallpapersafari.com/desktop/1366/768/13/63/7zrbm6.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh; */
  button{
    height: 2.5rem;
    cursor: pointer;
  }
`
export const HeaderEditPokemon = styled.header`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 3.5rem;
  background-color: ${COLOR_RED_TRANSPARENT};
  @media only screen and (max-width:${LAPTOP}){
    button{
      font-size: .60rem;
    }
  }
`
export const FormContainer = styled.div`
  background-image: url("https://img.wallpapersafari.com/desktop/1366/768/13/63/7zrbm6.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  @media only screen and (max-width:${TABLET}){
    background-color: black;
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
  }
`
export const FormPoke = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 40rem;
  height: 38rem;
  margin: 0 auto;
  //margin-top: 1rem;
  background: #000000db;
  span{
    color: ${COLOR_RED};
    font-size: .65rem;
    margin-left: 0.75rem;
  }
  @media only screen and (max-width:${TABLET}){
    height: auto;
    width: auto;
    padding: 1rem 0;
  }
  @media only screen and (max-width:${MOVILE_L}){
    height: auto;
    width: auto;
    padding: 1rem 0;
  }
  @media only screen and (max-width:${MOVILE_S}){
    button{
      margin: .25rem .5rem;
    }
  }
`
export const InputSection = styled.section`
  width: 40rem;
  height: 22rem;
  margin: .25rem auto;
  display: grid;
  grid-template-columns: 1fr 1fr; 
  grid-template-rows: 1fr 1fr 1fr;
  grid-auto-rows: 3rem;
  input{
    background-color: ${SMOOTH_WHITE_POKEBALL};
  }
  label{
    font-size: 1rem;
    color: white;
    width: 10rem;
  }
  @media only screen and (max-width:${TABLET}){
    height: auto;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(8, 5rem);
    grid-auto-rows: 3rem;
  }
  @media only screen and (max-width:${MOVILE_L}){
    height: auto;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(8, 5rem);
    grid-auto-rows: 3rem;
    width: 20rem;
  }
`
export const CheckSection = styled.section`
  position: relative;
  padding: 1rem 1rem;
  border-radius: .5rem;
  display: grid;
  justify-content: center;
  width: 38rem;
  height: 7rem;
  margin: 0 auto;
  grid-template-columns: 1fr 1fr 1fr 1fr; 
  grid-template-rows: 1fr 1fr 1fr 1fr;
  label{
    padding-left: 1rem;
    color: white;
    font-size: 1rem;
  }
  span{
    position: absolute;
    width: max-content;
    margin-left: 2.25rem;
    bottom:-4px;
  }
  @media only screen and (max-width:${TABLET}){
    margin-bottom: 1.5rem;
  }
  @media only screen and (max-width:${MOVILE_L}){
    height: auto;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(10, 2rem);
    grid-auto-rows: 3rem;
    width: 20rem;
    padding: 0;
  }
`