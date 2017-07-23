import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import clickReducer from '../containers/ClickContainer/ClickDucks';

const rootReducer = combineReducers({
    routing,
    timesClicked: clickReducer
});

export default rootReducer;