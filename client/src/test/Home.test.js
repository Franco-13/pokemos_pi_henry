/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/no-container */
import React from "react";
import "@testing-library/jest-dom/extend-expect";
import {render} from "@testing-library/react";
import { Home } from './../pages/Home/Home';
import { Provider } from 'react-redux';
import store from './../store/index';
import App from './../App';
import { BrowserRouter } from "react-router-dom";

// eslint-disable-next-line testing-library/render-result-naming-convention
describe("Home", () => {
  const {container} = render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
      <Home />
    </BrowserRouter>
  </Provider>
  );
  const el = container.querySelectorAll("option")[0]
  expect(el.innerHTML).toBe("Ordenar Vida");
})
