import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { sortPokes, sortPokesHP, filterPokesByType, /* getPokemonsById, */ filterPokesByOrigin, filterSearchByOrigin } from '../../actions';
import { Card } from '../../components/Card/Card';
import { Paginado } from '../../components/Paginado/Paginado';
import { SearchBar } from '../../components/SearchBar/SearchBar';
import { COLOR_SECONDARY } from '../../styles/global';
import { GlobalButton } from './../../components/GlobalButton/GlobalButton';
import { Header, HomeContainer, PokemonsContainer, Select } from './styles';

export const Home = () => {  
  const dispatch = useDispatch()
  let pokemons = useSelector((state) => state.pokemons)
  let searchPokemon = useSelector((state) => state.searchPokemon)
  const pokemonOrSearch = searchPokemon.length === 0 ? pokemons : searchPokemon;
  const types = useSelector((state) => state.types)

  const [currentPage, setCurrentPage] = useState(1)
  const [pokesPerPage, setPokesPerPage] = useState(12)
  const indexLastPoke = currentPage * pokesPerPage
  const indexFirstPoke = indexLastPoke - pokesPerPage
  let currentPoke = pokemonOrSearch.length 
                        ? pokemonOrSearch?.slice(indexFirstPoke, indexLastPoke) 
                        : pokemons?.slice(indexFirstPoke, indexLastPoke)
  
  const pagination = (pageNumber) => {
    setCurrentPage(pageNumber)
  }
  
  const [order, setOrder] = useState("")

  const handleSortAlpha = (e) => {
    dispatch(sortPokes(e.target.value))
    setCurrentPage(1)
    setOrder(e)
  }

  const handleHP = (e) => {
    dispatch(sortPokesHP(e.target.value))
    setCurrentPage(1)
    setOrder(e)
  }
  
  const handleType = (e) => {
    dispatch(filterPokesByType(e.target.value))
    setCurrentPage(1)
    setOrder(e)
  }

  const handleOrigin = (e) => {
    if (searchPokemon.length) {
      dispatch(filterSearchByOrigin(e.target.value))
      setCurrentPage(1)
      setOrder(e)
    }else{
      dispatch(filterPokesByOrigin(e.target.value))
      setCurrentPage(1)
      setOrder(e)
    }
  }
  
  return (
    <HomeContainer al = {pokemons.length ? true : false}>
      <Header>
        <Link to="/createPokemon">
          <GlobalButton
            textBtn="Crear Pokemon"
            colorBtn={`${COLOR_SECONDARY}`}
          />
        </Link>
        <Select defaultValue={""} onChange={handleHP}>
          <option value="" disabled>Filtrar Vida</option>
          <option value="HP_ASC">HP ASC</option>
          <option value="HP_DESC">HP DESC</option>
        </Select>
        <Select defaultValue={""} onChange={handleSortAlpha}>
          <option value="" disabled>Filtro Alfabético</option>
          <option value="A-Z">A-Z</option>
          <option value="Z-A">Z-A</option>
        </Select>
        <Select onChange={handleOrigin}>
          <option value="allOrigin">Todos los orígenes</option>
          <option value="created">Creados</option>
          <option value="API">Originales</option>
        </Select>
        <Select onChange={handleType}>
          <option value="All">Todos los tipos</option>
          {
            types?.map((el) => <option key={el.name} value={el.name}>{el.name}</option> )
          }
        </Select>
        <SearchBar/>
      </Header>
      <Paginado pokemonsPerPage={pokesPerPage} pokemons={pokemonOrSearch.length} currentPage = {currentPage} pagination={pagination}/>
      <PokemonsContainer>
        {
          currentPoke.length && currentPoke.map((el) => el.id === "ERROR_SIN_RESULTADO" ?
            <h1 className="error">{"Sin resultados"}</h1>
            :<div key={el.id} >
              <Card  name={el.name.toUpperCase()} image={el.image} id={el.id} types={el.types} />
            </div>
          )
        } 
        {pokemonOrSearch.length ? null : <h1 className="error">{"Sin resultados"}</h1>}
      </PokemonsContainer>
    </HomeContainer>
  )
}