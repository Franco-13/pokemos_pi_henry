import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { getPokemonsById } from '../actions';

/* 
[ ] Los campos mostrados en la ruta principal para cada pokemon (imagen, nombre y tipos)
[ ] Número de Pokemon (id)
[ ] Estadísticas (vida, fuerza, defensa, velocidad)
[ ] Altura y peso
*/


export const DetailsPoke = () => {
  const dispatch = useDispatch()
  const detailPokemon = useSelector((state) => state.detailsPoke)
  console.log(detailPokemon);
  
  let {id} = useParams()
  
  return (
    <div>
      <h1>ALGO{id}</h1>
      <button onClick={() => dispatch(getPokemonsById(id))} ></button>
    </div>
  )
}
