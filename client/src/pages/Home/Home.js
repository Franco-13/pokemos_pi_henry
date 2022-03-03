import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { sortPokes, sortPokesHP, filterPokesByType, filterPokesByOrigin, filterSearchByOrigin, getPokemonSearchName, reset } from '../../actions';
import { Card } from '../../components/Card/Card';
import { Paginado } from '../../components/Paginado/Paginado';
import { SearchBar } from '../../components/SearchBar/SearchBar';
import { YELLOW_PIKACHU } from '../../styles/global';
import { GlobalButton } from './../../components/GlobalButton/GlobalButton';
import { Header, HomeContainer, Loading, Modal, PokemonsContainer, Select } from './styles';

export const Home = () => {  
  const dispatch = useDispatch()
  let pokemons = useSelector((state) => state.pokemons)
  let searchPokemon = useSelector((state) => state.searchPokemon)
  let typeSortHp = useSelector((state) => state.typeSortHp)
  let typeSortName = useSelector((state) => state.typeSortName)
  let typeFilterOrigin = useSelector((state) => state.typeFilterOrigin)
  const pokemonOrSearch = searchPokemon.length === 0 ? pokemons : searchPokemon;
  const types = useSelector((state) => state.types)

  const [currentPage, setCurrentPage] = useState(1)
  const [pokesPerPage, /* setPokesPerPage */] = useState(12)
  const indexLastPoke = currentPage * pokesPerPage
  const indexFirstPoke = indexLastPoke - pokesPerPage

  let currentPoke = pokemonOrSearch?.slice(indexFirstPoke, indexLastPoke)
  
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
    dispatch(filterPokesByType(e.target.value))
    setCurrentPage(1)
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
  const loading = useSelector((state) => state.loading)
  const [search, setSearch] = useState("");
  const [infoSearchModal, setInfoSearchModal] = useState(false)
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
      setInfoSearchModal(true)
    }else{
      dispatch(getPokemonSearchName(search.toLowerCase()))
      setCurrentPage(1)
    }
  }

  return (
    <HomeContainer al = {pokemonOrSearch.length < 4 ? false : true}>
      <Header>
        <Link to="/createPokemon">
          <GlobalButton
            textBtn="Crear Pokemon"
            colorBtn={YELLOW_PIKACHU}
            fontColor="black"
          />
        </Link>
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
        <SearchBar handleChangeSearch={handleChangeSearch} handleSubmit={handleSubmit} search={search}/>
      </Header>
      <Paginado pokemonsPerPage={pokesPerPage} pokemons={pokemonOrSearch.length} currentPage = {currentPage} pagination={pagination}/>

      {loading 
        ?
        <PokemonsContainer>
          {pokemonOrSearch.length
            ?currentPoke?.map((el) => el.id === "ERROR_SIN_RESULTADO" 
              ?<h1 key={"ERROR_SIN_RESULTADO"}  className="error">{"Sin resultados, verifique el nombre"}</h1>
              :<Card key={el.id} name={el.name.toUpperCase()} image={el.image} id={el.id} types={el.types} />
            )
            :<h1 className="error">{"Sin resultados"}</h1>}
        </PokemonsContainer>
        : <Loading>
          <img src="https://i.imgur.com/XLJxE8S.gif" alt="loading" /> 
        </Loading>   
      }
      <Modal onClick={closeModal} visible={infoSearchModal}  className ="active">
              <div>
                  <h3>Ingrese un nombre para buscar</h3>
              </div>
      </Modal>
    </HomeContainer>
  )
}