/* eslint-disable import/no-cycle */
import { combineReducers } from 'redux';

import { signupReducer } from './auth/signup';
import { signinReducer } from './auth/signin';
import { resetPasswordReducer } from './auth/reset-password';

import { getUserInfoReducer } from './user/user';

import logoutReducer from './logout/logout';

import { getBotsReducer } from './bots/getBots';
import { addBotReducer } from './bots/addBot';

import { getTemplatesBotsReducer } from './bots/getTemplatesBots';

import { getPlatformsReducer } from './platforms/getPlatforms';

import { getBuilderDataReducer } from './builder/getBuilder';

const rootReducer = combineReducers({
  signin: signinReducer,
  signup: signupReducer,
  resetPassword: resetPasswordReducer,
  getUserInfo: getUserInfoReducer,
  logout: logoutReducer,
  getBots: getBotsReducer,
  addBot: addBotReducer,
  getTemplatesBots: getTemplatesBotsReducer,
  getPlatforms: getPlatformsReducer,
  getBuilderData: getBuilderDataReducer,
});

export default rootReducer;
