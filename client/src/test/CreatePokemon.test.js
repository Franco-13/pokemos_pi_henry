/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/no-container */
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../store/index'
import { render } from '@testing-library/react';
import App from '../App';
import { CreatePokemon } from './../pages/CreatePokemon/CreatePokemon';


describe('CreatePokemon', () => {

           //-----------------------label--------------------//
  it('El form debe tener un label "Nombre"', () => {
    const { container } = render(<Provider store={store}><BrowserRouter><App/><CreatePokemon/></BrowserRouter></Provider>)
    const element = container.querySelectorAll('label')[0]
    expect(element.innerHTML).toBe('Nombre');
  });
  it('El form debe tener un label "Imagen"', () => {
    const { container } = render(<Provider store={store}> <BrowserRouter><App/><CreatePokemon/></BrowserRouter></Provider>)
    const element = container.querySelectorAll('label')[1]
    expect(element.innerHTML).toBe('Imagen');
  });
    it('El form debe tener un label "Vida"', () => {
      const { container } = render(<Provider store={store}> <BrowserRouter><App/><CreatePokemon/></BrowserRouter></Provider>)
      const element = container.querySelectorAll('label')[2]
      expect(element.innerHTML).toBe('Vida');
    });
    it('El form debe tener un label "Ataque"', () => {
      const { container } = render(<Provider store={store}> <BrowserRouter><App/><CreatePokemon/></BrowserRouter></Provider>)
      const element = container.querySelectorAll('label')[3]
      expect(element.innerHTML).toBe('Ataque');
    });
    it('El formulario debe tener un label que diga: "Defense:"', () => {
      const { container } = render(<Provider store={store}> <BrowserRouter><App/><CreatePokemon/></BrowserRouter></Provider>)
      const element = container.querySelectorAll('label')[4]
      expect(element.innerHTML).toBe('Defensa');
    });
    it('El form debe tener un label "Velocidad"', () => {
      const { container } = render(<Provider store={store}> <BrowserRouter><App/><CreatePokemon/></BrowserRouter></Provider>)
      const element = container.querySelectorAll('label')[5]
      expect(element.innerHTML).toBe('Velocidad');
    });
    it('El form debe tener un label "Altura"', () => {
      const { container } = render(<Provider store={store}> <BrowserRouter><App/><CreatePokemon/></BrowserRouter></Provider>)
      const element = container.querySelectorAll('label')[6]
      expect(element.innerHTML).toBe('Altura');
    });
    it('El form debe tener un label "Peso"', () => {
      const { container } = render(<Provider store={store}> <BrowserRouter><App/><CreatePokemon/></BrowserRouter></Provider>)
      const element = container.querySelectorAll('label')[7]
      expect(element.innerHTML).toBe('Peso');
    });
              //---------------------inputs------------------------//
   it('El form debe tener un input con name "name" y type "text"', () => {
      const { container } = render(<Provider store={store}> <BrowserRouter><App/><CreatePokemon/></BrowserRouter></Provider>)
      const element = container.querySelectorAll('input')[0]
      expect(element.type).toBe('text');
      expect(element.name).toBe('name');
    });
    it('El form debe tener un input con name "image" y type "text"', () => {
       const { container } = render(<Provider store={store}> <BrowserRouter><App/><CreatePokemon/></BrowserRouter></Provider>)
       const element = container.querySelectorAll('input')[1]
       expect(element.type).toBe('text');
       expect(element.name).toBe('image');
     });
     it('El form debe tener un input con name "hp" y type "number"', () => {
      const { container } = render(<Provider store={store}> <BrowserRouter><App/><CreatePokemon/></BrowserRouter></Provider>)
      const element = container.querySelectorAll('input')[2]
      expect(element.type).toBe('number');
      expect(element.name).toBe('hp');
    });
    it('El form debe tener un input con name "attack" y type "number"', () => {
      const { container } = render(<Provider store={store}> <BrowserRouter><App/><CreatePokemon/></BrowserRouter></Provider>)
      const element = container.querySelectorAll('input')[3]
      expect(element.type).toBe('number');
      expect(element.name).toBe('attack');
    });
    it('El form debe tener un input con name "defense" y type "number"', () => {
      const { container } = render(<Provider store={store}> <BrowserRouter><App/><CreatePokemon/></BrowserRouter></Provider>)
      const element = container.querySelectorAll('input')[4]
      expect(element.type).toBe('number');
      expect(element.name).toBe('defense');
    });
    it('El form debe tener un input con name "speed" y type "number"', () => {
      const { container } = render(<Provider store={store}> <BrowserRouter><App/><CreatePokemon/></BrowserRouter></Provider>)
      const element = container.querySelectorAll('input')[5]
      expect(element.type).toBe('number');
      expect(element.name).toBe('speed');
    });
    it('El form debe tener un input con name "height" y type "number"', () => {
      const { container } = render(<Provider store={store}> <BrowserRouter><App/><CreatePokemon/></BrowserRouter></Provider>)
      const element = container.querySelectorAll('input')[6]
      expect(element.type).toBe('number');
      expect(element.name).toBe('height');
    });
    it('El form debe tener un input con name "weight" y type "number"', () => {
      const { container } = render(<Provider store={store}> <BrowserRouter><App/><CreatePokemon/></BrowserRouter></Provider>)
      const element = container.querySelectorAll('input')[7]
      expect(element.type).toBe('number');
      expect(element.name).toBe('weight');
    });
})