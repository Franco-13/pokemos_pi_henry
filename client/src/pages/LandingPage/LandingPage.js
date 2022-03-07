import React from 'react'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { BtnAndLoadingContainer, BtnContainer, ImageLoading, LandingContainer, Title } from './styles';
import { GlobalButton } from './../../components/GlobalButton/GlobalButton';
import { YELLOW_PIKACHU } from '../../styles/global';

export const LandingPage = () => {
  const allPokemons = useSelector((state) => state.pokemons)

  return (
    <LandingContainer>
        <Title>
          <h1>BIENVENIDOS</h1>
        </Title>
        <BtnAndLoadingContainer>
          <ImageLoading isVisible={allPokemons.length} >
            <img src="https://i.imgur.com/XLJxE8S.gif" alt="loading" />
          </ImageLoading>
          {
            allPokemons.length &&
            <BtnContainer >
              <Link to="/home">
                <GlobalButton
                  textBtn="INGRESAR"
                  fontColor="black"
                  colorBtn={YELLOW_PIKACHU}
                />
              </Link>
            </BtnContainer>
          }
        </BtnAndLoadingContainer>
    </LandingContainer>
  )
}