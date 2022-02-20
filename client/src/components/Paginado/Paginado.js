import React, { useState } from 'react'
import { Navigation } from './styles';
import { GlobalButton } from './../GlobalButton/GlobalButton';
import { COLOR_PRIMARY } from '../../styles/global';

export const Paginado = ({pokemonsPerPage, pokemons, pagination, currentPage}) => {
  const pageNumber = Array(Math.ceil(pokemons/pokemonsPerPage)).fill(0)
 console.log(currentPage);
  return (
    <Navigation>
      <ul>
        {
          pageNumber.length > 0 && pageNumber.map(( e, index) =>{
            return (
              <li key={index+1}>
                <GlobalButton
                onClick={()=>pagination(index+1)}
                textBtn={index+1}
                colorBtn={COLOR_PRIMARY}
                fontSize="1.5rem"
                radius="50%"
                active={currentPage===index+1 ? true : false}
                />
              </li>
            )
          })
        }
      </ul>
    </Navigation>
  )
}
