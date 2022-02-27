import styled from 'styled-components';
import { COLOR_RED, COLOR_RED_TRANSPARENT, SMOOTH_WHITE_POKEBALL } from '../../styles/global';

export const ContainerCreated = styled.div`
  background-image: url("https://img.wallpapersafari.com/desktop/1366/768/13/63/7zrbm6.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  button{
    height: 2.5rem;
    cursor: pointer;
  }
`
export const HeaderCreatePokemon = styled.header`     
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 3.5rem;
  background-color: ${COLOR_RED_TRANSPARENT};
`
export const FormPoke = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 40rem;
  height: 38rem;
  margin: 0 auto;
  margin-top: 1rem;
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
  margin: 0 auto;
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
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr; 
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
          padding: 3rem;
          border-radius: 5px;
          background-size: cover;
          position: relative;
          width:30%;
          height:20%;
          >h3{
            position: absolute;
            top: 2rem;
            padding-bottom: 2rem;
            font-size: 1rem;
            color: black;
          }
        }
        &.active{
            display: ${({visible})=>visible?"flex":"none"};
        }
`