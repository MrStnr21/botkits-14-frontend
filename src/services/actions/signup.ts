import { signupApi } from '../../api/index';

// eslint-disable-next-line import/no-cycle
import { AppDispatch, AppThunk } from '../types';
import { TUser } from '../types/data';

const SIGNUP_REQUEST = 'SIGNUP_REQUEST';
const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
const SIGNUP_ERROR = 'SIGNUP_ERROR';

const SIGNIN_REQUEST = 'SIGNIN_REQUSET';
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
  readonly type: typeof SIGNIN_REQUEST;
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
const signupAction: AppThunk = (userInfo: any) => {
  return (dispatch: AppDispatch) => {
    dispatch({
      type: SIGNUP_REQUEST,
    });
    signupApi(userInfo)
      .then((res: any) => {
        if (res) {
          dispatch({
            type: SIGNUP_SUCCESS,
            user: res.user,
          });
        }
      })
      .catch((err: { message: string }) => {
        // eslint-disable-next-line no-console
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
  SIGNIN_REQUEST,
  SIGNIN_SUCCESS,
  SIGNIN_ERROR,
  signupAction,
};
