/* eslint-disable import/no-cycle */
import { ThunkAction } from 'redux-thunk';
import { Action, ActionCreator, Dispatch } from 'redux';

import { TAuthState } from '../reducers/signup';

import { TAuthorizationActions } from '../actions/signup';

import store from '../store';

export type TStore = { auth: TAuthState };

export type RootState = ReturnType<typeof store.getState>;

export type TApplicationActions = TAuthorizationActions;

export type AppThunk<TReturn = void> = ActionCreator<
  ThunkAction<TReturn, Action, RootState, TApplicationActions>
>;

export type AppDispatch = Dispatch<TApplicationActions>;
