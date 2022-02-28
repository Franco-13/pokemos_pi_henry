import React from "react";
import "@testing-library/jest-dom/extend-expect";
import {render, screen} from "@testing-library/react";
import { CreatePokemon } from './../pages/CreatePokemon/CreatePokemon';
import { Provider } from 'react-redux';
import store from './../store/index';

test("render", () => {
  // eslint-disable-next-line testing-library/render-result-naming-convention
  render(
    <Provider store={store}>
      <CreatePokemon />
    </Provider>
  );
  const name = screen.getByText(/nombre/i);
  expect(name).toBeInDocument();
})