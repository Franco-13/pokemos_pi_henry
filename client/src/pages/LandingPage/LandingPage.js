import React from 'react'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ImageLoading, LandingContainer, Title } from './styles';
import { GlobalButton } from './../../components/GlobalButton/GlobalButton';
import { COLOR_SECONDARY } from '../../styles/global';


export const LandingPage = () => {
  const allPokemons = useSelector((state) => state.pokemons)

  return (
    <LandingContainer>
      <Title>
        <h1>BIENVENIDOS</h1>
      </Title>
      {
        allPokemons.length 
        ? 
        <ImageLoading>
          <Link to="/home">
              <GlobalButton
                  textBtn="INGRESAR"
                  colorBtn={`${COLOR_SECONDARY}`}
                  fontSize="1.5rem"
                  disabled={allPokemons.length ? false : true}
                />
            </Link>
        </ImageLoading>
        :<ImageLoading>
            <img src="https://www.gifsanimados.org/data/media/1446/pokemon-imagen-animada-0098.gif" alt='Loading'/>
          </ImageLoading>
      }
    </LandingContainer>
  )
}



/* <button disabled={allPokemons.length ? false : true}>
  INGRESAR
</button> */