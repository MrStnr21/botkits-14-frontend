import { combineReducers } from 'redux';
// eslint-disable-next-line import/no-cycle
import { signupReducer } from './signup';
import { signinReducer } from './signin';

const rootReducer = combineReducers({
  signin: signinReducer,
  signup: signupReducer,
});

export default rootReducer;
