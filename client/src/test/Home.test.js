import React from "react";
import "@testing-library/jest-dom/extend-expect";
import {render} from "@testing-library/react";
//import { prettyDOM } from "@testing-library/dom";
import { Home } from './../pages/Home/Home';
import { Provider } from 'react-redux';
import store from './../store/index';

test("render", () => {
  // eslint-disable-next-line testing-library/render-result-naming-convention
  const component = render(
  <Provider store={store}>
    <Home />
  </Provider>
  );
  expect(component.container).toHaveTextContent("BIENVENIDOS");
})