import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './store/index';
import { LandingPage } from './pages/LandingPage/LandingPage';

describe('App', () => {
  // eslint-disable-next-line testing-library/render-result-naming-convention
  const wrapper = render( 
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>);
  //expect(wrapper.getByText(LandingPage)).toHaveLength(1);
  //expect(wrapper.container).getByText(LandingPage).toHaveLength(1);
});
