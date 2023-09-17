import { combineReducers } from 'redux';
// eslint-disable-next-line import/no-cycle
import { authorizationReducer } from './authorization';

const rootReducer = combineReducers({
  auth: authorizationReducer,
});

export default rootReducer;
