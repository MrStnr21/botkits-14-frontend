/* eslint-disable import/no-cycle */
import { combineReducers } from 'redux';

import { signupReducer } from './auth/signup';
import { signinReducer } from './auth/signin';

import { getUserInfoReducer } from './user/user';

import logoutReducer from './logout/logout';

import { getBotsReducer } from './bots/getBots';
import { addBotReducer } from './bots/addBot';

const rootReducer = combineReducers({
  signin: signinReducer,
  signup: signupReducer,
  getUserInfo: getUserInfoReducer,
  logout: logoutReducer,
  getBots: getBotsReducer,
  addBot: addBotReducer,
});

export default rootReducer;
