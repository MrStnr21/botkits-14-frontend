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
import { socketReducer } from './socket/socketReducer';

import { toggleMesPopup } from './popups/messengers-popup';
import errorReducer from './errors/errors';
import { TRootState, TApplicationActions } from '../types';

const appReducer = combineReducers({
  signin: signinReducer,
  signup: signupReducer,
  resetPassword: resetPasswordReducer,
  getUserInfo: getUserInfoReducer,
  logout: logoutReducer,
  bots: botsReducer,
  getTemplatesBots: getTemplatesBotsReducer,
  getPlatforms: getPlatformsReducer,
  websocket: socketReducer,
  toggleMessengersPopup: toggleMesPopup,
  errors: errorReducer,
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
