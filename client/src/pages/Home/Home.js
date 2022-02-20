import React, { /* useEffect, */ useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { /* getPokemons, */ sortPokes, sortPokesHP, filterPokesByType, getPokemonsById, reset } from '../../actions';
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
  console.log("2",currentPoke);
  const [order, setOrder] = useState("")

  const handleSortAlpha = (e) => {
    dispatch(sortPokes(e.target.value))
    setCurrentPage(1)
    setOrder(e)
  }

  const handleType = (e) => {
    dispatch(filterPokesByType(e.target.value))
    setCurrentPage(1)
    setOrder(e)
  }

  const handleHP = (e) => {
    dispatch(sortPokesHP(e.target.value))
    setCurrentPage(1)
    setOrder(e)
  }

  const handleClickDetails = (el) => {
    dispatch(reset())
    dispatch(getPokemonsById(el.id))

  }
  
  return (
    <HomeContainer>
      <Header>
        <Link to="/home/createPokemon">
          <GlobalButton
            textBtn="Crear Pokemon"
            colorBtn={`${COLOR_SECONDARY}`}
          />
        </Link>
        <Select defaultValue={""} onChange={(e) => handleHP(e)}>
        <option value="" disabled>Filtrar</option>
          <option value="HP_ASC">HP ASC</option>
          <option value="HP_DESC">HP DESC</option>
        </Select>
        <Select onChange={(e) => handleSortAlpha(e)}>
          <option value="A-Z">A-Z</option>
          <option value="Z-A">Z-A</option>
        </Select>
        <Select onChange={(e) => handleType(e)}>
          <option value="All">All</option>
          {
            types?.map((el) => <option key={el.name} value={el.name}>{el.name}</option> )
          }
        </Select>
        <SearchBar/>
      </Header>
      <Paginado pokemonsPerPage={pokesPerPage} pokemons={pokemonOrSearch.length} currentPage = {currentPage} pagination={pagination}/>
      <PokemonsContainer>
        {
          currentPoke?.map((el) => el.id === "ERROR_SIN_RESULTADO" 
            ? <Card  name={el.name.toUpperCase()} image={el.image} id={el.id} types={el.types} />
            : 
            <div key={el.id} onClick={()=>dispatch(getPokemonsById(el.id))}>
                <Card  name={el.name.toUpperCase()} image={el.image} id={el.id} types={el.types} />
            </div>
          )
        } 
      </PokemonsContainer>
      <Paginado pokemonsPerPage={pokesPerPage} pokemons={pokemonOrSearch.length} currentPage = {currentPage} pagination={pagination}/>
    </HomeContainer>
  )
}
/* {el.types?.map((el,i) => el.name ? <span key={el.id+i.toString()}>{el.name}</span> : <span key={el.id+i.toString()}>{el} </span>)} */
