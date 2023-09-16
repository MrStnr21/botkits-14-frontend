import signupApi from '../../utils/api';

import { AppDispatch, AppThunk } from '../types';
import { TUser } from '../types/data';

const SIGNUP_REQUEST = 'SIGNUP_REQUEST';
const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
const SIGNUP_ERROR = 'SIGNUP_ERROR';

const SIGNIN_REQUSET = 'SIGNIN_REQUSET';
const SIGNIN_SUCCESS = 'SIGNIN_SUCCESS';
const SIGNIN_ERROR = 'SIGNIN_ERROR';

export interface ISignupRequestAction {
  readonly type: typeof SIGNUP_REQUEST;
}

export interface ISignupSuccesAction {
  readonly type: typeof SIGNUP_SUCCESS;
  user: TUser;
}

export interface ISignupErrorAction {
  readonly type: typeof SIGNUP_ERROR;
}

export interface ISigninRequestAction {
  readonly type: typeof SIGNIN_REQUSET;
}

export interface ISigninSuccessAction {
  readonly type: typeof SIGNIN_SUCCESS;
  user: TUser;
}

export interface ISigninErrorAction {
  readonly type: typeof SIGNIN_ERROR;
}

export type TAuthorizationActions =
  | ISignupRequestAction
  | ISignupSuccesAction
  | ISignupErrorAction
  | ISigninRequestAction
  | ISigninSuccessAction
  | ISigninErrorAction;

// экшн регистрации
const signupAction: AppThunk = (userInfo: { [name: string]: string }) => {
  return (dispatch: AppDispatch) => {
    dispatch({
      type: SIGNUP_REQUEST,
    });
    signupApi(userInfo)
      .then((res) => {
        if (res) {
          dispatch({
            type: SIGNUP_SUCCESS,
            user: res.user,
          });
        }
      })
      .catch((err: { message: string }) => {
        console.log(err.message);
        dispatch({
          type: SIGNUP_ERROR,
        });
      });
  };
};
export {
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_ERROR,
  SIGNIN_REQUSET,
  SIGNIN_SUCCESS,
  SIGNIN_ERROR,
  signupAction,
};
