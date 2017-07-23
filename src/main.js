import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { store, history } from './store/configureStore';
import ApplicationContainer from './containers/ApplicationContainer';

render(
    <AppContainer>
        <ApplicationContainer store={store} history={history} />
    </AppContainer>,
    document.getElementById('root')
);

if (module.hot) {
    module.hot.accept('./containers/ApplicationContainer', () => {
        const NewApp = require('./containers/ApplicationContainer').default;
        render(
            <AppContainer>
                <NewApp store={store} history={history} />
            </AppContainer>,
            document.getElementById('root')
        );
    });
}
