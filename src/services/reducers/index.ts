/* eslint-disable import/no-cycle */
import { combineReducers } from 'redux';

import { signupReducer } from './auth/signup';
import { signinReducer } from './auth/signin';
import { resetPasswordReducer } from './auth/reset-password';

import { getUserInfoReducer } from './user/user';

import logoutReducer from './logout/logout';

import { botsReducer } from './bots/bots';

import { getTemplatesBotsReducer } from './bots/templatesBots';

import { getPlatformsReducer } from './platforms/getPlatforms';

import { toggleMesPopup } from './popups/messengers-popup';
import errorReducer from './errors/errors';
import { TRootState, TApplicationActions } from '../types';
import chatReducer from './chat/chat';

const appReducer = combineReducers({
  signin: signinReducer,
  signup: signupReducer,
  resetPassword: resetPasswordReducer,
  getUserInfo: getUserInfoReducer,
  logout: logoutReducer,
  bots: botsReducer,
  getTemplatesBots: getTemplatesBotsReducer,
  getPlatforms: getPlatformsReducer,
  toggleMessengersPopup: toggleMesPopup,
  errors: errorReducer,
  chat: chatReducer,
});

const rootReducer = (
  state: TRootState | undefined,
  action: TApplicationActions
) => {
  if (action.type === 'LOGOUT') {
    return appReducer(undefined, action);
  }

  return appReducer(state, action);
};

export default rootReducer;
