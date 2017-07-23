import createHistory from 'history/createBrowserHistory';
import { applyMiddleware, createStore, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import rootReducer from './reducers';
import thunk from 'redux-thunk';

export const history = createHistory();

const configureStore = (initialState = {}) => {
    const enhancers = [];
    const middleware = [
        thunk,
        routerMiddleware(history)
    ];

    if (process.env.NODE_ENV === 'development') {
        const devToolsExtension = window.devToolsExtension;

        if (typeof devToolsExtension === 'function') {
            enhancers.push(devToolsExtension());
        }
    }

    const composedEnhancers = compose(
        applyMiddleware(...middleware),
        ...enhancers
    );

    const store = createStore(
        rootReducer,
        initialState,
        composedEnhancers
    );

    if (module.hot) {
        // Enable webpack hot module replacement for reducers
        module.hot.accept('./reducers', () => {
            const nextRootReducer = require('./reducers');
            store.replaceReducer(nextRootReducer)
        })
    }

    return store;
}

export const store = configureStore();