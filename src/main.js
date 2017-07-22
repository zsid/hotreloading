import React from 'react';
import { AppContainer } from 'react-hot-loader';
import { render } from 'react-dom';
import App from './App';

const rootElement = document.getElementById('root');

const mount = Component => render(
  <AppContainer>
    <App />
  </AppContainer>,
  rootElement
);

mount(App);

if (module.hot) {
  module.hot.accept('./App', () => { mount(App) })
}
