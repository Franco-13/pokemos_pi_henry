import styled from 'styled-components';
import { COLOR_RED, COLOR_RED_TRANSPARENT, SMOOTH_WHITE_POKEBALL } from '../../styles/global';

export const ContainerCreated = styled.div`
height: 100vh;
  button{
    height: 2.5rem;
    cursor: pointer;
  }
`
export const HeaderCreatePokemon = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 7%;
  background-color: ${COLOR_RED_TRANSPARENT};
`
export const FormContainer = styled.div`
  background-image: url("https://img.wallpapersafari.com/desktop/1366/768/13/63/7zrbm6.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  height: 93%;
`
export const FormPoke = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 40rem;
  height: 38rem;
  margin: auto;
  background: #000000db;
  span{
    color: ${COLOR_RED};
    font-size: .65rem;
    margin-left: 0.75rem;
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
  grid-template-rows: 1fr 1fr 1fr 1fr ;
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
`