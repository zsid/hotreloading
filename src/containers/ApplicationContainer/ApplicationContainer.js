import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { ConnectedRouter } from 'react-router-redux';
import { Provider } from 'react-redux';
import routes from '../../routes';

const ApplicationContainer = ({store, history}) => {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        { routes }
      </ConnectedRouter>
    </Provider>
  );
}

ApplicationContainer.propTypes = {
  history: PropTypes.object.isRequired,
  store: PropTypes.object.isRequired,
};

export default ApplicationContainer;
