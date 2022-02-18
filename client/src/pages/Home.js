import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card } from './../components/Card/Card';
import { Link } from 'react-router-dom';
import { Paginado } from './../components/Paginado/Paginado';
import { sortPokes, sortPokesHP } from '../actions';
import { SearchBar } from './../components/SearchBar/SearchBar';
import { filterPokesByType } from './../actions/index';
import { getPokemons } from './../actions';

export const Home = () => {  
  const dispatch = useDispatch()
  let allPokemons = useSelector((state) => state.pokemons)
  const types = useSelector((state) => state.types)

  const [currentPage, setCurrentPage] = useState(1)
  const [pokesPerPage, setPokesPerPage] = useState(12)
  const indexLastPoke = currentPage * pokesPerPage
  const indexFirstPoke = indexLastPoke - pokesPerPage
  const currentPoke = allPokemons.length ? allPokemons.slice(indexFirstPoke, indexLastPoke) : [""]

  const pagination = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

  useEffect(() => {
    dispatch(getPokemons());
  }, [dispatch])

  const [order, setOrder] = useState("")

  const handleSort = (e) => {
    e.preventDefault(e)
    dispatch(sortPokes(e.target.value))
    setCurrentPage(1)
    setOrder(e)
  }

  const handleType = (e) => {
    e.preventDefault(e)
    dispatch(filterPokesByType(e.target.value))
    setCurrentPage(1)
    setOrder(e)
  }

  const handleHP = (e) => {
    e.preventDefault(e)
    dispatch(sortPokesHP(e.target.value))
    setCurrentPage(1)
    setOrder(e)
  }
  
  return (
    <div>
      <SearchBar/>
      <Link to="/home/createPokemon">
        <button>CREATE POKE</button>
      </Link>
      <h1>POKEMONS</h1>
      <select onChange={(e) => handleHP(e)}>
        <option value="RESET">HP</option>
        <option value="HP_ASC">HP ASC</option>
        <option value="HP_DESC">HP DESC</option>
      </select>
      <select onChange={(e) => handleSort(e)}>
        <option value="RESET_AZ">or</option>
        <option value="A-Z">A-Z</option>
        <option value="Z-A">Z-A</option>
      </select>
      <select onChange={(e) => handleType(e)}>
        <option value="All">All</option>
        {
          types?.map((el) => <option key={el.name} value={el.name}>{el.name}</option> )
        }
      </select>
      <Paginado pokemonsPerPage={pokesPerPage} allPokemons={allPokemons.length} pagination={pagination}/>
        {
          currentPoke?.map((el) => {
            return (
              <div key={el.id}>
                <Link to={`/home/${el.id}`}>
                  <Card  name={el.name} image={el.image} id={el.id} />
                  {el.types?.map((el,i) => el.name ? <span key={el.id+i.toString()}>{el.name}</span> : <span key={el.id+i.toString()}>{el} </span>)}
                </Link>
              </div>
            )
          })
        }
      <br />

    </div>
  )
}
