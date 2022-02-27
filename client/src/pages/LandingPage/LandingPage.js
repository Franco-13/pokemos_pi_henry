import React from 'react'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { BtnContainer, ImageLoading, LandingContainer, Title } from './styles';
import { GlobalButton } from './../../components/GlobalButton/GlobalButton';
import { COLOR_RED, COLOR_SECONDARY } from '../../styles/global';


export const LandingPage = () => {
  const allPokemons = useSelector((state) => state.pokemons)

  return (
    <LandingContainer>
      <Title>
        <h1>BIENVENIDOS</h1>
      </Title>
      {
        allPokemons.length ?
        <BtnContainer>
          <Link to="/home">
              <GlobalButton
                  textBtn="INGRESAR"
                  colorBtn={COLOR_RED}
                  fontSize="1.5rem"
                />
            </Link>
        </BtnContainer>
         : 
        <ImageLoading>
          <img src="https://i.imgur.com/XLJxE8S.gif" alt="loading" />
        </ImageLoading>
      }
    </LandingContainer>
  )
}