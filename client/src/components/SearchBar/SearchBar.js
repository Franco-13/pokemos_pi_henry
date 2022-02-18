import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { getNamePokemon } from '../../actions';


export const SearchBar = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");

  const handleChangeSearch = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getNamePokemon(search))
    setSearch("")
  }

  return (
    <div>
      <input placeholder="Buscar poke" type="text" value={search} onChange={handleChangeSearch}/>
      <button type="submit" onClick={handleSubmit}>Buscar</button>
    </div>
  )
}
