import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import clickReducer from '../containers/Click/ClickDucks';

const rootReducer = combineReducers({
    routing,
    click: clickReducer
});

export default rootReducer;