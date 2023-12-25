/* eslint-disable import/no-cycle */
import { ThunkAction } from 'redux-thunk';
import { Action, ActionCreator, Dispatch } from 'redux';

import { TSignupState } from '../reducers/auth/signup';
import { TSignupActions } from '../actions/auth/signup';

import { TSigninState } from '../reducers/auth/signin';
import { TSigninActions } from '../actions/auth/signin';

import { TGetUserInfoState } from '../reducers/user/user';
import { TGetUserInfoActions } from '../actions/user/user';

import { TLogoutState } from '../reducers/logout/logout';
import { TLogoutActions } from '../actions/logout/logout';

import { TBotsState } from '../reducers/bots/bots';
import { TGetBotsActions } from '../actions/bots/getBot';

import { TAddBotActions } from '../actions/bots/addBot';

import { TGetTemplatesBotsState } from '../reducers/bots/templatesBots';
import { TGetTemplatesBotsActions } from '../actions/bots/templatesBots';

import { TUserResetPasswordActions } from '../actions/auth/reset-password';
import { TResetPasswordState } from '../reducers/auth/reset-password';

import { TGetPlatformsState } from '../reducers/platforms/getPlatforms';
import { TGetPlatformsActions } from '../actions/platforms/getPlatforms';

import store from '../store';
import { TDeleteBotActions } from '../actions/bots/deleteBot';

export type TStore = {
  signup: TSignupState;
  signin: TSigninState;
  resetPassword: TResetPasswordState;
  getUserInfo: TGetUserInfoState;
  logout: TLogoutState;
  bots: TBotsState;
  getTemplatesBots: TGetTemplatesBotsState;
  getPlatforms: TGetPlatformsState;
};

export type RootState = ReturnType<typeof store.getState>;

export type TApplicationActions =
  | TSignupActions
  | TSigninActions
  | TUserResetPasswordActions
  | TGetUserInfoActions
  | TLogoutActions
  | TGetBotsActions
  | TAddBotActions
  | TDeleteBotActions
  | TGetTemplatesBotsActions
  | TGetPlatformsActions;

export type AppThunk<TReturn = void> = ActionCreator<
  ThunkAction<TReturn, Action, RootState, TApplicationActions>
>;

export type AppDispatch = Dispatch<TApplicationActions>;
