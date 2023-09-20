/* eslint-disable import/no-cycle */
import { combineReducers } from 'redux';

import { signupReducer } from './auth/signup';
import { signinReducer } from './auth/signin';

import logoutReducer from './logout/logout';

import { getBotsReducer } from './bots/getBots';
import { addBotReducer } from './bots/addBot';

const rootReducer = combineReducers({
  signin: signinReducer,
  signup: signupReducer,
  logout: logoutReducer,
  getBot: getBotsReducer,
  addBot: addBotReducer,
});

export default rootReducer;
