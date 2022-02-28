import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { MemoryRouter, Routes, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './store/index';
import { LandingPage } from './pages/LandingPage/LandingPage';

describe('App', () => {
  // eslint-disable-next-line testing-library/render-result-naming-convention
  const wrapper = render( 
    <Provider store={store}>
      <MemoryRouter initialEntries={["/"]}>
        <App />
      </MemoryRouter>
    </Provider>);
  expect(wrapper.getByText(LandingPage)).toHaveLength(1);
});
