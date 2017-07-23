import createHistory from 'history/createBrowserHistory';
import { applyMiddleware, createStore, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import rootReducer from './reducers';

export const history = createHistory();
const middleware = routerMiddleware(history);

export function configureStore(initialState = {}) {
    const store = createStore(
        rootReducer,
        initialState,
        compose(
            applyMiddleware(middleware)
        )
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
