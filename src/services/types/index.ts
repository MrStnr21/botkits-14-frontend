/* eslint-disable import/no-cycle */
import { ThunkAction } from 'redux-thunk';
import { Action, ActionCreator, Dispatch } from 'redux';

import { TSignupState } from '../reducers/signup';
import { TSigninState } from '../reducers/signin';

import { TSignupActions } from '../actions/signup';
import { TSigninActions } from '../actions/signin';

import store from '../store';

export type TStore = { signup: TSignupState; signin: TSigninState };

export type RootState = ReturnType<typeof store.getState>;

export type TApplicationActions = TSignupActions | TSigninActions;

export type AppThunk<TReturn = void> = ActionCreator<
  ThunkAction<TReturn, Action, RootState, TApplicationActions>
>;

export type AppDispatch = Dispatch<TApplicationActions>;
