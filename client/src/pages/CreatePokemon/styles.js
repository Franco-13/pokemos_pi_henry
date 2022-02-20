import styled from 'styled-components';

export const HeaderCreatePokemon = styled.header`     
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 3.5rem;
  background-color: #b81613a6;
`
export const FormPoke = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 40rem;
  margin: 0 auto;
`
export const InputSection = styled.section`
  width: 40rem;
  height: 20rem;
  margin: 3rem auto;
  display: grid;
  grid-template-columns: 1fr 1fr; 
  grid-template-rows: 1fr 1fr 1fr;
`
export const CheckSection = styled.section`
  display: grid;
  justify-content: center;
  width: 35rem;
  margin: 0 auto;
  margin-bottom: 2rem;
  grid-template-columns: 1fr 1fr 1fr 1fr; 
  grid-template-rows: 1fr 1fr 1fr;
`