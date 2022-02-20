import React from 'react'
import { CardContainer, SpanContainer } from './styles'
import { Link } from 'react-router-dom';

export const Card = ({name, image, types, id}) => {
  
  return (
    <CardContainer>
      <h1 >{name}</h1>
      {
        id==="no_found" 
        ? <img src={image} alt={name} />
        :<Link to={`/home/${id}`}>
          <img src={image} alt={name} />
        </Link>
      }
      <SpanContainer>
        {
          types?.map((el,i) => el.name 
            ? <span key={el.id+i.toString()+id}>{el.name}</span> 
            : <span key={el.id+i.toString()+id}>{el} </span>)
        }
      </SpanContainer>
    </CardContainer>
  )
}
