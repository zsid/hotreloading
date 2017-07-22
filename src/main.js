import React from 'react';
import { render } from 'react-dom';

class Application extends React.Component {
  render () {
    return (
      <div>
        Hello from React refreshed? But whole pageyep
      </div>
    )
  }
};

const rootElement = document.getElementById('root');

const mount = Component => render(
  <Application />,
  rootElement
);

mount(Application);