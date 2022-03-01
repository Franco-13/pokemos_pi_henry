import React from "react";
import "@testing-library/jest-dom/extend-expect";
import {render} from "@testing-library/react";
import {LandingPage} from "./../pages/LandingPage/LandingPage";
import { Provider } from 'react-redux';
import store from './../store/index';
import App from './../App';
import { BrowserRouter } from "react-router-dom";

test("render", () => {
    // eslint-disable-next-line testing-library/render-result-naming-convention
    const component = render(
    <Provider store={store}>
      <BrowserRouter>
        <App/>
        <LandingPage />
      </BrowserRouter>
    </Provider>
    );
    /* const el = component.getByText("BIENVENIDOS");
    console.log(prettyDOM(component.container)); */
    expect(component.container).toHaveTextContent("BIENVENIDOS");
})