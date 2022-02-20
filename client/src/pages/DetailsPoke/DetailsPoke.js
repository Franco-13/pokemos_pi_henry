import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { Container, DeatilContainer, DetailSection, HeaderDetail, ImageLoading, SectionStatsAndType, Stats, Type } from './styles';
import { GlobalButton } from './../../components/GlobalButton/GlobalButton';
import { COLOR_SECONDARY } from '../../styles/global';

/* 
[ ] Los campos mostrados en la ruta principal para cada pokemon (imagen, nombre y tipos)
[ ] Número de Pokemon (id)
[ ] Estadísticas (vida, fuerza, defensa, velocidad)
[ ] Altura y peso
*/


export const DetailsPoke = () => {
  const {name, hp, attack, defense, speed, height, weight, image, types} = useSelector((state) => state.detailsPoke)
  const obj = useSelector((state) => state.detailsPoke)
  console.log("NAMEEEE",obj.name);
  let {id} = useParams()

  
  return (
    <Container>
      <HeaderDetail>
        <Link to="/home">
          <GlobalButton 
            textBtn="Regresar"
            colorBtn={`${COLOR_SECONDARY}`}
          />
        </Link>
      </HeaderDetail>
        { 
          <DeatilContainer>
            <h1>{name}</h1>
            <DetailSection>
              <img src={image} alt={name} />
              <SectionStatsAndType>
                <Stats>
                  <h2>ATAQUE: {attack}</h2>
                  <h2>DEFENSA: {defense}</h2>
                  <h2>ALTURA: {height}</h2>
                  <h2>PESO: {weight}</h2>
                  <h2>VIDA: {hp}</h2>
                  <h2>VELOCIDAD: {speed}</h2>
                </Stats>
                <Type>
                  {
                    types?.map((el,i) => el.name ? <h2 key={el.id+i.toString()+id}>{el.name}</h2> : <h2 key={el.id+i.toString()+id}>{el} </h2>)
                  }
                </Type>
              </SectionStatsAndType>
            </DetailSection>
          </DeatilContainer>
          /* : <ImageLoading>
              <img src="https://www.gifsanimados.org/data/media/1446/pokemon-imagen-animada-0098.gif" alt='Loading'/>
            </ImageLoading>  */
        }
    </Container>
  )
}
