import './App.css';
import {LandingPage} from "./pages/LandingPage"
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { getTypes } from './actions'
import { useDispatch } from 'react-redux';
import React, { useEffect } from "react"
import { DetailsPoke } from './pages/DetailsPoke';
import { CreatePokemo } from './pages/CreatePokemo';

function App() {  
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getTypes());
  }, [dispatch])

  return (
      <React.Fragment>
        <Routes>
          <Route path="/" element={<LandingPage/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/home/:id" element={<DetailsPoke/>}/>
          <Route path="/home/createPokemon" element={<CreatePokemo/>} />
        </Routes>
      </React.Fragment>
  );
}

export default App;
