import React from 'react'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const LandingPage = () => {
  const allPokemons = useSelector((state) => state.types)

  return (
    <div>
      <h1>Bienvenidos</h1>
      <Link to="/home">
        <button disabled={allPokemons.length ? false : true}>
          INGRESAR
        </button>
      </Link>
    </div>
  )
}