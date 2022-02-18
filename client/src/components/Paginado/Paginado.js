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
              <li key={num}>
                <button onClick={()=>pagination(num)}>{num}</button>
              </li>
            )
          })
        }
      </ul>
    </nav>
  )
}
