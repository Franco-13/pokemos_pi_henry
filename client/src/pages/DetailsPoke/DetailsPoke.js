import React, { useState }from 'react'
import { Link, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { Container, DeatilContainer, DetailSection, HeaderDetail, ImageLoading, /* Modal, */ SectionStatsAndType, Stats, Type } from './styles';
import { GlobalButton } from './../../components/GlobalButton/GlobalButton';
import { YELLOW_PIKACHU } from '../../styles/global';
import { deletePokeDB, getPokemons, reset } from '../../actions';
import { useDispatch } from 'react-redux';
import { Modal } from '../../components/Modal/Modal';

export const DetailsPoke = () => {
  const det = useSelector((state) => state.detailsPoke)
  const loading = useSelector((state) => state.loading)
  const dispatch = useDispatch()
  let {id} = useParams()
  
  const [infoDeletePokeModal, setInfoDeletePokeModal] = useState(false)
  
  let evento = window.event?.target
  
  const clickReturn = (e) => {
    dispatch(reset())
    if(evento?.innerHTML ==="SI"){
      dispatch(getPokemons())
    }
  }
  
  const clickDelete = (e) => {
    e.preventDefault()
    dispatch(deletePokeDB(id))
    setInfoDeletePokeModal(false)
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
          det?.pokemonCreadoDB &&
          <>
            <Link to={`/detail/updatePokemon/${id}`}>
            <GlobalButton 
              textBtn="Editar pokemon"
              fontColor="black"
              colorBtn={YELLOW_PIKACHU}
            />
            </Link>
            <GlobalButton
              onClick={clickOpenCloseModal} 
              textBtn="Eliminar pokemon"
              fontColor="black"
              colorBtn={YELLOW_PIKACHU}
            />
          </>
        }
      </HeaderDetail>
      { loading 
        ?<DeatilContainer>
          <h1>{det.name.toUpperCase()}</h1>
          <span>ID: {id}</span>
          <DetailSection>
            <div className="imgPoke">
              <div className="line"></div>
              <img src={det.image} alt={det.name} />
            </div>
            <SectionStatsAndType>
              <Stats>
                <h2>VIDA: {det.hp}</h2>
                <h2>ATAQUE: {det.attack}</h2>
                <h2>DEFENSA: {det.defense}</h2>
                <h2>VELOCIDAD: {det.speed}</h2>
                <h2>ALTURA: {det.height}</h2>
                <h2>PESO: {det.weight}</h2>
                <Type>
                  <h2>TIPO: </h2>
                  {
                    det.types?.map((el,i) => el.name ? <h2 className="h2-types" key={el.id+i.toString()+id}>{el.name.toUpperCase()}</h2> : <h2 className="h2-types" key={el.id+i.toString()+id}>{el.toUpperCase()} </h2>)
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
      <Modal 
        visible={infoDeletePokeModal} 
        modalMessage="¿Está seguro en eliminar el pokemon?"
        buttons={true}
        onClickBtn1={clickDelete}
        onClickBtn2={clickOpenCloseModal}
      />

{/*       <Modal  visible={infoDeletePokeModal}  className ="active">
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
      </Modal> */}
    </Container>
  )
}