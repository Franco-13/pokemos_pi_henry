import styled from 'styled-components';
import { COLOR_RED_TRANSPARENT } from '../../styles/global';
import { COLOR_SUCCESS } from './../../styles/global';

export const ContainerCreated = styled.div`
  background-image: url("https://img.wallpapersafari.com/desktop/1366/768/13/63/7zrbm6.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
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
  height: 40rem;
  margin: 0 auto;
  span{
    color: ${COLOR_SUCCESS};
    font-size: .85rem;
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
  span{
    font-size: .85rem;
  }
`
export const CheckSection = styled.section`
  box-shadow: inset 0px 0px 7px 8px;
  background-color: #69696999;
  padding: 1rem 1rem;
  border-radius: .5rem;
  display: grid;
  justify-content: center;
  width: 35rem;
  margin: 0 auto;
  grid-template-columns: 1fr 1fr 1fr 1fr; 
  grid-template-rows: 1fr 1fr 1fr;
  label{
    padding-left: 1rem;
    color: yellowgreen;
    font-weight: bolder;
    font-size: larger;
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
            top: 0;
            padding-bottom: 2rem;
            font-size: 2rem;
            color: darkslateblue;
          }
        }
        &.active{
            display: ${({visible})=>visible?"flex":"none"};
        }
`