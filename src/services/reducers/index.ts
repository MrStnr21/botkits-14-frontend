/* eslint-disable import/no-cycle */
import { combineReducers } from 'redux';

import { signupReducer } from './auth/signup';
import { signinReducer } from './auth/signin';

import { getBotsReducer } from './bots/getBots';
import { addBotReducer } from './bots/addBot';

const rootReducer = combineReducers({
  signin: signinReducer,
  signup: signupReducer,
  getBot: getBotsReducer,
  addBot: addBotReducer,
});

export default rootReducer;
