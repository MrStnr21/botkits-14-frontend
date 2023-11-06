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

import { TGetBotsState } from '../reducers/bots/getBots';
import { TGetBotsActions } from '../actions/bots/getBot';

import { TAddBotState } from '../reducers/bots/addBot';
import { TAddBotActions } from '../actions/bots/addBot';

import { TGetTemplatesBotsState } from '../reducers/bots/getTemplatesBots';
import { TGetTemplatesBotsActions } from '../actions/bots/getTemplatesBots';

import { TUserResetPasswordActions } from '../actions/auth/reset-password';
import { TResetPasswordState } from '../reducers/auth/reset-password';

import { TGetPlatformsState } from '../reducers/platforms/getPlatforms';
import { TGetPlatformsActions } from '../actions/platforms/getPlatforms';

import { TGetBuildersDataState } from '../reducers/builder/getBuilders';
import { TGetBuildersDataActions } from '../actions/builder/getBuilders';
import { TAddBuilderDataState } from '../reducers/builder/addBuilder';
import { TAddBuilderDataActions } from '../actions/builder/addBuilder';

import store from '../store';

export type TStore = {
  signup: TSignupState;
  signin: TSigninState;
  resetPassword: TResetPasswordState;
  getUserInfo: TGetUserInfoState;
  logout: TLogoutState;
  getBots: TGetBotsState;
  addBot: TAddBotState;
  getTemplatesBots: TGetTemplatesBotsState;
  getPlatforms: TGetPlatformsState;
  getBuildersData: TGetBuildersDataState;
  addBuilderData: TAddBuilderDataState;
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
  | TGetTemplatesBotsActions
  | TGetPlatformsActions
  | TGetBuildersDataActions
  | TAddBuilderDataActions;

export type AppThunk<TReturn = void> = ActionCreator<
  ThunkAction<TReturn, Action, RootState, TApplicationActions>
>;

export type AppDispatch = Dispatch<TApplicationActions>;
