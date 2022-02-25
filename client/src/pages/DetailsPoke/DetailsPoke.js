import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { Container, DeatilContainer, DetailSection, HeaderDetail, ImageLoading, SectionStatsAndType, Stats, Type } from './styles';
import { GlobalButton } from './../../components/GlobalButton/GlobalButton';
import { COLOR_SECONDARY } from '../../styles/global';
import { reset } from '../../actions';
import { useDispatch } from 'react-redux';

export const DetailsPoke = () => {
  const {name, hp, attack, defense, speed, height, weight, image, types} = useSelector((state) => state.detailsPoke)
  const det = useSelector((state) => state.detailsPoke)
  //console.log("Details",det.name);
  let {id} = useParams()
  const dispatch = useDispatch()
  const click = (e) => {
    dispatch(reset())
  }

  return (
    <Container>
      <HeaderDetail>
        <Link to="/home">
          <GlobalButton 
            onClick={click}
            textBtn="Regresar"
            colorBtn={`${COLOR_SECONDARY}`}
          />
        </Link>
      </HeaderDetail>
        { det.name 
          ?<DeatilContainer>
            <h1>{name.toUpperCase()}</h1>
            <span>ID: {id}</span>
            <DetailSection>
              <div className="imgPoke">
                <img src={image} alt={name} />
              </div>
              <SectionStatsAndType>
                <Stats>
                  <h2>VIDA: {hp}</h2>
                  <h2>ATAQUE: {attack}</h2>
                  <h2>DEFENSA: {defense}</h2>
                  <h2>VELOCIDAD: {speed}</h2>
                  <h2>ALTURA: {height}</h2>
                  <h2>PESO: {weight}</h2>
                  <Type>
                    {
                      types?.map((el,i) => el.name ? <h2 key={el.id+i.toString()+id}>{el.name.toUpperCase()}</h2> : <h2 key={el.id+i.toString()+id}>{el.toUpperCase()} </h2>)
                    }
                  </Type>
                </Stats>
              </SectionStatsAndType>
            </DetailSection>
          </DeatilContainer>
          : <ImageLoading>
              <img src="https://i.imgur.com/XLJxE8S.gif" alt='Loading'/>
            </ImageLoading> 
        }
    </Container>
  )
}
//https://www.gifsanimados.org/data/media/1446/pokemon-imagen-animada-0098.gif