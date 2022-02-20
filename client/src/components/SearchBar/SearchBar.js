import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { getPokemonSearchName, reset } from '../../actions';
import { COLOR_SECONDARY } from '../../styles/global';
import { GlobalButton } from '../GlobalButton/GlobalButton';
import { SearchContainer } from './styles';
import { GlobalInput } from './../GlobalInput/GlobalInput';


export const SearchBar = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");

  const handleChangeSearch = (e) => {
    console.log(e.target.value);
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
        placeholder="Buscar poke"
        onChange={handleChangeSearch}
        value={search}
      />
      <GlobalButton
        textBtn="Buscar"
        colorBtn={`${COLOR_SECONDARY}`}
        onClick={handleSubmit}
        type="submit"
      />
      {/* <button type="submit" onClick={handleSubmit}>Buscar</button> */}
    </SearchContainer>
  )
}
