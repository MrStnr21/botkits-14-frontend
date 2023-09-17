/* eslint-disable import/no-cycle */
import { ThunkAction } from 'redux-thunk';
import { Action, ActionCreator, Dispatch } from 'redux';

import { TSignupState } from '../reducers/auth/signup';
import { TSigninState } from '../reducers/auth/signin';
import { TSignupActions } from '../actions/auth/signup';
import { TSigninActions } from '../actions/auth/signin';

import { TGetBotsState } from '../reducers/bots/getBots';
import { TAddBotState } from '../reducers/bots/addBot';
import { TGetBotsActions } from '../actions/bots/getBot';
import { TAddBotActions } from '../actions/bots/addBot';

import store from '../store';

export type TStore = {
  signup: TSignupState;
  signin: TSigninState;
  getBots: TGetBotsState;
  addBot: TAddBotState;
};

export type RootState = ReturnType<typeof store.getState>;

export type TApplicationActions =
  | TSignupActions
  | TSigninActions
  | TGetBotsActions
  | TAddBotActions;

export type AppThunk<TReturn = void> = ActionCreator<
  ThunkAction<TReturn, Action, RootState, TApplicationActions>
>;

export type AppDispatch = Dispatch<TApplicationActions>;
