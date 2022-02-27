import React from "react";
import {LandingPage} from "./../pages/LandingPage/LandingPage";
import { configure, mount} from "enzyme";
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { Provider } from "react-redux"
import store from './../store/index'

configure({adapter: new Adapter()});

describe("LandingPage", () => {
  const wrapper = mount(
    <Provider store={store}>
      <LandingPage />
    </Provider>
  )

  it("should renderLandingPage", () => {
    mount(<LandingPage/>)
  })
})