import React, { useState }from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { Container, ContentBtn, DeatilContainer, DetailSection, HeaderDetail, ImageLoading, Modal, SectionStatsAndType, Stats, Type } from './styles';
import { GlobalButton } from './../../components/GlobalButton/GlobalButton';
import { COLOR_RED_TRANSPARENT, YELLOW_PIKACHU } from '../../styles/global';
import { deletePokeDB, getPokemons, reset } from '../../actions';
import { useDispatch } from 'react-redux';

export const DetailsPoke = () => {
  const {name, hp, attack, defense, speed, height, weight, image, types} = useSelector((state) => state.detailsPoke)

  const det = useSelector((state) => state.detailsPoke)
  let {id} = useParams()
  const dispatch = useDispatch()
  const [infoDeletePokeModal, setInfoDeletePokeModal] = useState(false)
  let navigate = useNavigate();
  const clickReturn = (e) => {
    dispatch(reset())
    dispatch(getPokemons())
  }

  const clickDelete = async (e) => {
    e.preventDefault()
    dispatch(deletePokeDB(id))
    dispatch(reset())
    dispatch(getPokemons())
    navigate("/home")
  }
  const clickOpenCloseModal = (e) => {
    if (infoDeletePokeModal) {
      setInfoDeletePokeModal(false)
    }else{
      setInfoDeletePokeModal(true)
    }
  }
  return (
    <Container>
      <HeaderDetail>
        <Link to="/home">
          <GlobalButton 
            onClick={clickReturn}
            textBtn="Regresar"
            fontColor="black"
            colorBtn={YELLOW_PIKACHU}
          />
        </Link>
        {
          det.pokemonCreadoDB &&
          <>
            <Link to={`/detail/updatePokemon/${id}`}>
            <GlobalButton 
              textBtn="Editar poke"
              fontColor="black"
              colorBtn={YELLOW_PIKACHU}
            />
            </Link>
            <GlobalButton
              onClick={clickOpenCloseModal} 
              textBtn="Eliminar poke"
              fontColor="black"
              colorBtn={YELLOW_PIKACHU}
            />
          </>
        }
      </HeaderDetail>
      { det.name 
        ?<DeatilContainer>
          <h1>{name.toUpperCase()}</h1>
          <span>ID: {id}</span>
          <DetailSection>
            <div className="imgPoke">
              <div className="line"></div>
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
                  <h2>TIPO: </h2>
                  {
                    types?.map((el,i) => el.name ? <h2 key={el.id+i.toString()+id}>{el.name.toUpperCase()}</h2> : <h2 className="h2-types" key={el.id+i.toString()+id}>{el.toUpperCase()} </h2>)
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
      <Modal  visible={infoDeletePokeModal}  className ="active">
        <div>
          <h3>{"¿Está seguro en eliminar el pokemon?"}</h3>
          <ContentBtn>
            <GlobalButton
              onClick={clickDelete}
              textBtn="SI"
              colorBtn={COLOR_RED_TRANSPARENT}
              fontColor="black"
              />
            <GlobalButton
              onClick={clickOpenCloseModal}
              textBtn="NO"
              colorBtn={YELLOW_PIKACHU}
              fontColor="black"
            />
          </ContentBtn>
        </div>
      </Modal>
    </Container>
  )
}