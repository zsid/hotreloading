import PropTypes from 'prop-types';
import React from 'react';
import {Provider} from 'react-redux';
import {Route} from 'react-router-dom';

import {ConnectedRouter} from 'react-router-redux';

import AboutPage from './pages/AboutPage/';
import App from './App';

export default function Root({store, history}) {
    return (
        <Provider store={store}>
            <div>
                <ConnectedRouter history={history}>
                    <div>
                        <Route exact path="/" component={App}/>
                        <Route exact path="/about" component={AboutPage}/>
                    </div>
                </ConnectedRouter>
            </div>
        </Provider>
    );
}

Root.propTypes = {
    store: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
};