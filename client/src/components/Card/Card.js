import React from 'react'

export const Card = ({name, image, types, id}) => {
  
  return (
    <div>
      <h1 >{name}</h1>
      <img src={image} alt={name} />
      {
        //types?.map(el => el.nombre ? <span>{el.nombre}</span> : <span>{el} </span>)
      }
    </div>
  )
}
