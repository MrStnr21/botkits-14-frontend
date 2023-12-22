/* eslint-disable import/no-cycle */
import { combineReducers } from 'redux';

import { signupReducer } from './auth/signup';
import { signinReducer } from './auth/signin';
import { resetPasswordReducer } from './auth/reset-password';

import { getUserInfoReducer } from './user/user';

import logoutReducer from './logout/logout';

import { getBotsReducer } from './bots/getBots';
import { addBotReducer } from './bots/addBot';

import { getTemplatesBotsReducer } from './bots/templatesBots';
import { addTemplatesBotReducer } from './bots/addTemplatesBot';

import { getPlatformsReducer } from './platforms/getPlatforms';
import { socketReducer } from './socket/socketReducer';

import { toggleMesPopup } from './popups/messengers-popup';

const rootReducer = combineReducers({
  signin: signinReducer,
  signup: signupReducer,
  resetPassword: resetPasswordReducer,
  getUserInfo: getUserInfoReducer,
  logout: logoutReducer,
  getBots: getBotsReducer,
  addBot: addBotReducer,
  getTemplatesBots: getTemplatesBotsReducer,
  addTemplatesBot: addTemplatesBotReducer,
  getPlatforms: getPlatformsReducer,
  websocket: socketReducer,
  toggleMessengersPopup: toggleMesPopup,
});

export default rootReducer;
