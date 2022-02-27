import React from 'react'
import { CardContainer, SpanContainer } from './styles'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getPokemonsById } from './../../actions/index';

export const Card = ({name, image, types, id}) => {
  const dispatch = useDispatch()
  return (
    <CardContainer>
      <div className="line"></div>
      <h1 >{name}</h1>
      {
        id==="ERROR_SIN_RESULTADO" 
        ? <img src={image} alt={name} />
        :<Link to={`/detail/${id}`} >
          <img src={image} alt={name} onClick={()=>dispatch(getPokemonsById(id))}/>
        </Link>
      }
      <SpanContainer>
        {
          types?.map((el,i) => el.name 
            ?<div  key={el.id+el.name+id}>
              <span>{el.name}</span> 
            </div> 
            :<span key={el.id+i.toString()+id}>{el} </span>)
        }
      </SpanContainer>
    </CardContainer>
  )
}
