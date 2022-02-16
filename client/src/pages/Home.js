import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card } from './../components/Card/Card';
import { Link } from 'react-router-dom';
import { Paginado } from './../components/Paginado/Paginado';
import { getPokemons, getTypes, sortPokesAZ } from '../actions';

export const Home = () => {  
  const dispatch = useDispatch()
  const allPokemons = useSelector((state) => state.pokemons)
  const [currentPage, setCurrentPage] = useState(1)
  const [pokesPerPage, setPokesPerPage] = useState(12)
  const indexLastPoke = currentPage * pokesPerPage
  const indexFirstPoke = indexLastPoke - pokesPerPage
  const currentPoke = allPokemons.slice(indexFirstPoke, indexLastPoke)
  const pagination = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

/*   useEffect(() => {
    dispatch(getTypes());
  }, [dispatch])

  useEffect(() => {
    dispatch(getPokemons());
  }, [dispatch]) */

  const handleSort = (e) => {
    dispatch(sortPokesAZ(e.target.value))
  }
  
  return (
    <div>
      <h1>POKEMONS</h1>
      <select onChange={(e) => handleSort(e)}>
        <option value="--">--</option>
        <option value="A-Z">A-Z</option>
        <option value="Z-A">Z-A</option>
      </select>
      <Paginado pokemonsPerPage={pokesPerPage} allPokemons={allPokemons.length} pagination={pagination}/>
        {
          currentPoke?.map((el) => {
            return (
              <div key={el.id}>
                <Link to={`/home/${el.id}`}>
                  <Card  name={el.name} image={el.image} id={el.id} />
                  {el.types?.map((el,i) => el.nombre ? <span key={el.id+i.toString()}>{el.nombre}</span> : <span key={el.id+i.toString()}>{el} </span>)}
                </Link>
              </div>
            )
          })
        }
      <br />
      <br />
      <br />
      <br />

    </div>
  )
}
