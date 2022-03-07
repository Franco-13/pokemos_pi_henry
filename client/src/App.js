import React, { useEffect } from "react"
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getTypes, getPokemons } from './actions'
import {LandingPage} from "./pages/LandingPage/LandingPage"
import { Home } from './pages/Home/Home';
import { DetailsPoke } from './pages/DetailsPoke/DetailsPoke';
import { CreatePokemon } from './pages/CreatePokemon/CreatePokemon';
import {EditPokemon} from "./pages/EditPokemon/EditPokemon"

function App() {  
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getTypes());
  }, [dispatch])

  useEffect(() => {
    dispatch(getPokemons());
  }, [dispatch])

  return (
      <React.Fragment>
        <Routes>
          <Route path="/" element={<LandingPage/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/detail/:id" element={<DetailsPoke/>}/>
          <Route path="/createPokemon" element={<CreatePokemon/>} />
          <Route path="/detail/updatePokemon/:id" element={<EditPokemon/>} />
        </Routes>
      </React.Fragment>
  );
}

export default App;
