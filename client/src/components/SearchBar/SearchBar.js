import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { getPokemonSearchName, reset } from '../../actions';
import { YELLOW_PIKACHU } from '../../styles/global';
import { GlobalButton } from '../GlobalButton/GlobalButton';
import { SearchContainer } from './styles';
import { GlobalInput } from './../GlobalInput/GlobalInput';


export const SearchBar = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");

  const handleChangeSearch = (e) => {
    if (e.target.value === "") {
      dispatch(reset());
    }
    setSearch(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getPokemonSearchName(search))
  }

  return (
    <SearchContainer>
      {/* <input placeholder="Buscar poke" type="text" value={search} onChange={handleChangeSearch}/> */}
      <GlobalInput 
        type="text"
        placeholder="Buscar pokemon..."
        onChange={handleChangeSearch}
        value={search}
      />
      <GlobalButton
        textBtn="Buscar"
        colorBtn={`${YELLOW_PIKACHU}`}
        fontColor="black"
        onClick={handleSubmit}
        type="submit"
      />
      {/* <button type="submit" onClick={handleSubmit}>Buscar</button> */}
    </SearchContainer>
  )
}
