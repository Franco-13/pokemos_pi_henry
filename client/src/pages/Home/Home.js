import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { sortPokes, sortPokesHP, filterPokesByType, filterPokesByOrigin, filterSearchByOrigin, getPokemonSearchName, reset } from '../../actions';
import { Card } from '../../components/Card/Card';
import { Modal } from '../../components/Modal/Modal';
import { Paginado } from '../../components/Paginado/Paginado';
import { SearchBar } from '../../components/SearchBar/SearchBar';
import { YELLOW_PIKACHU } from '../../styles/global';
import { GlobalButton } from './../../components/GlobalButton/GlobalButton';
import { Header, HomeContainer, Loading, PokemonsContainer, Select, SelectSection } from './styles';

export const Home = () => {  
  const dispatch = useDispatch()
  let pokemons = useSelector((state) => state.pokemons)
  let searchPokemon = useSelector((state) => state.searchPokemon)
  
  let typeSortHp = useSelector((state) => state.typeSortHp)
  let typeSortName = useSelector((state) => state.typeSortName)
  let typeFilterOrigin = useSelector((state) => state.typeFilterOrigin)
  const loading = useSelector((state) => state.loading)

  const pokemonOrSearch = searchPokemon.length === 0 ? pokemons : searchPokemon;
  const types = useSelector((state) => state.types)

  const [currentPage, setCurrentPage] = useState(1)
  const [pokesPerPage] = useState(12)
  const indexLastPoke = currentPage * pokesPerPage
  const indexFirstPoke = indexLastPoke - pokesPerPage
  let currentPoke = pokemonOrSearch?.slice(indexFirstPoke, indexLastPoke)
  
  const [modalMessage, setModalMessage] = useState("")
  const [search, setSearch] = useState("");
  const [infoSearchModal, setInfoSearchModal] = useState(false)

  const pagination = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

  const handleSortAlpha = (e) => {
    dispatch(sortPokes(e.target.value))
    setCurrentPage(1)
  }

  const handleHP = (e) => {
    dispatch(sortPokesHP(e.target.value))
    setCurrentPage(1)
  }

  const handleType = (e) => {
    if( typeFilterOrigin !== "" ){
      dispatch(filterPokesByType(e.target.value))
      setCurrentPage(1)
    } else {
      setModalMessage("Seleccione un origen")
      setInfoSearchModal(true)
    }
  }

  const handleOrigin = (e) => {
    if (searchPokemon.length) {
      dispatch(filterSearchByOrigin(e.target.value))
      setCurrentPage(1)
    }else{
      dispatch(filterPokesByOrigin(e.target.value))
      setCurrentPage(1)
    }
  }
  
  //search
  const handleChangeSearch = (e) => {
    if (e.target.value === "") {
      dispatch(reset());
    }
    setSearch(e.target.value);
  }

  const closeModal = () => {
    setInfoSearchModal(false)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (search === "") {
      setModalMessage("Ingrese un nombre para buscar")
      setInfoSearchModal(true)
    }else{
      dispatch(getPokemonSearchName(search.toLowerCase()))
      setCurrentPage(1)
    }
  }

  return (
    <HomeContainer>
      <Header>
        <Link to="/createPokemon">
          <GlobalButton
            textBtn="Crear Pokemon"
            colorBtn={YELLOW_PIKACHU}
            fontColor="black"
          />
        </Link>
        <SelectSection>
          <Select value={typeSortHp} onChange={handleHP}>
            <option value="" disabled>Orden de Ataque</option>
            <option value="ATTACK_ASC">Ascendente</option>
            <option value="ATTACK_DESC">Descendente</option>
          </Select>
          <Select value={typeSortName} onChange={handleSortAlpha}>
            <option value="" disabled>Orden Alfabético</option>
            <option value="A-Z">A-Z</option>
            <option value="Z-A">Z-A</option>
          </Select>
          <Select value={typeFilterOrigin} onChange={handleOrigin}>
            <option value="" disabled>Seleciona origen</option>
            <option value="allOrigin">Todos los orígenes</option>
            <option value="created">Creados</option>
            <option value="API">Originales</option>
          </Select>
          <Select onChange={handleType}>
            <option value="All">Todos los tipos</option>
            {
              types?.sort((a, b) => a.name.localeCompare(b.name)).map((el) => <option key={el.name} value={el.name}>{el.name}</option>)
            }
          </Select >
        </SelectSection>
        <SearchBar handleChangeSearch={handleChangeSearch} handleSubmit={handleSubmit} search={search}/>
      </Header>
      <Paginado pokemonsPerPage={pokesPerPage} pokemons={pokemonOrSearch.length} currentPage = {currentPage} pagination={pagination}/>

      {loading 
        ?<PokemonsContainer al = {pokemonOrSearch.length < 5 ? false : true}>
          {
          pokemonOrSearch.length && !pokemonOrSearch[0]?.hasOwnProperty("message")
            ? currentPoke?.map((el) => 
              <Card key={el.id} name={el.name.toUpperCase()} image={el.image} id={el.id} types={el.types} />
            )
            : <h1>Sin pokemons para mostrar</h1> 
          }
        </PokemonsContainer>

        :<Loading>
          <img src="https://i.imgur.com/XLJxE8S.gif" alt="loading" /> 
        </Loading>   
      }
      <Modal 
        onClick={closeModal} 
        visible={infoSearchModal}
        modalMessage={modalMessage}
      />
    </HomeContainer>
  )
}