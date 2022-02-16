import './App.css';
import {LandingPage} from "./pages/LandingPage"
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { getPokemons } from './actions';
import { getTypes } from './actions'
import { useDispatch } from 'react-redux';
import React, { useEffect } from "react"
import { SearchBar } from './components/SearchBar/SearchBar';

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
        <SearchBar/>
        <Routes>
          <Route path="/" element={<LandingPage/>}/>
          <Route path="/home" element={<Home/>}/>
        </Routes>
      </React.Fragment>
  );
}

export default App;
