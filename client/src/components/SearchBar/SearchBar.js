import React from 'react'
import { YELLOW_PIKACHU } from '../../styles/global';
import { GlobalButton } from '../GlobalButton/GlobalButton';
import { SearchContainer } from './styles';
import { GlobalInput } from './../GlobalInput/GlobalInput';


export const SearchBar = ({handleChangeSearch, handleSubmit, search}) => {

  return (
    <SearchContainer>
      <GlobalInput 
        type="text"
        placeholder="Buscar pokemon..."
        onChange={handleChangeSearch}
        value={search}
      />
      <GlobalButton
        textBtn="Buscar"
        colorBtn={YELLOW_PIKACHU}
        fontColor="black"
        onClick={handleSubmit}
        type="submit"
      />
    </SearchContainer>
  )
}
