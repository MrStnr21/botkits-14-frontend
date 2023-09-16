import { combineReducers } from 'redux';
import { authorizationReducer } from './authorization';

const rootReducer = combineReducers({
  auth: authorizationReducer,
});

export default rootReducer;
