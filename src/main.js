import React from 'react';
import { AppContainer } from 'react-hot-loader';
import { render } from 'react-dom';
import { store, history } from './store';

import App from './components/App';

const mount = Component => (
  render(
    <AppContainer>
      <Component store={store} history={history} />
    </AppContainer>,
    document.getElementById('root'),
  )
);

mount(App);

if (module.hot) {
  module.hot.accept('./components/App', () => {
    const NewApp = require('./components/App').default;
    mount(NewApp);
  });
}
