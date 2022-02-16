import React from 'react'

export const Paginado = ({pokemonsPerPage, allPokemons, pagination}) => {
  const pageNumber = []
  
  for (let i = 0; i < Math.ceil(allPokemons/pokemonsPerPage); i++) {
    pageNumber.push(i+1)
  }
  
  return (
    <nav>
      <ul>
        {
          pageNumber && pageNumber.map(num =>{
            return (
              <li>
                <a onClick={()=>pagination(num)}>{num}</a>
              </li>
            )
          })
        }
      </ul>
    </nav>
  )
}
