import React, { useState } from 'react'

export const SearchBar = () => {
  const [search, setSearch] = useState("")

  const handleSearch = (e) => {
    setSearch(e.target.value)
  }

  return (
    <div>
      <label htmlFor="search">Buscar pokemon</label>
      <input type="text" value={search} onChange={handleSearch}/>
      <button>Buscar</button>
    </div>
  )
}
