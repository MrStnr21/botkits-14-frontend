import { socialAuth } from '../../../api/auth';
import { signinApi } from '../../../api/index';

import { saveAccessToken, saveRefreshToken } from '../../../auth/authService';

// eslint-disable-next-line import/no-cycle
import { AppDispatch, AppThunk } from '../../types';
import { IUserAuthError, IUserSigninState, TUser } from '../../types/user';

const SIGNIN_REQUEST = 'SIGNIN_REQUSET';
const SIGNIN_SUCCESS = 'SIGNIN_SUCCESS';
const SIGNIN_ERROR = 'SIGNIN_ERROR';

export interface ISigninRequestAction {
  readonly type: typeof SIGNIN_REQUEST;
}

export interface ISigninSuccessAction {
  readonly type: typeof SIGNIN_SUCCESS;
  user: TUser;
}

export interface ISigninErrorAction {
  readonly type: typeof SIGNIN_ERROR;
  textError: string;
}

export type TSigninActions =
  | ISigninRequestAction
  | ISigninSuccessAction
  | ISigninErrorAction;

// экшн авторизации
const signinAction: AppThunk = (userInfo: IUserSigninState) => {
  return (dispatch: AppDispatch) => {
    dispatch({
      type: SIGNIN_REQUEST,
    });
    signinApi(userInfo)
      .then((res: TUser) => {
        if (res) {
          saveAccessToken(res.credentials.accessToken);
          saveRefreshToken(res.credentials.refreshToken);

          dispatch({
            type: SIGNIN_SUCCESS,
            user: res,
          });
        }
      })
      .catch((err: [string, Promise<IUserAuthError>]) => {
        // eslint-disable-next-line no-console
        console.log(err[0]);
        err[1].then((payload: IUserAuthError) => {
          dispatch({
            type: SIGNIN_ERROR,
            textError: payload.message,
          });
        });
      });
  };
};

const socialAuthAction: AppThunk = (code: string, social: string) => {
  return (dispatch: AppDispatch) => {
    dispatch({
      type: SIGNIN_REQUEST,
    });
    socialAuth(code, social)
      .then((res: any) => {
        if (res) {
          saveAccessToken(res.credentials.accessToken);
          saveRefreshToken(res.credentials.refreshToken);

          dispatch({
            type: SIGNIN_SUCCESS,
            user: res,
          });
        }
      })
      .catch((err: { message: string }) => {
        // eslint-disable-next-line no-console
        console.log(err.message);
        dispatch({
          type: SIGNIN_ERROR,
          textError: err.message,
        });
      });
  };
};

export {
  SIGNIN_REQUEST,
  SIGNIN_SUCCESS,
  SIGNIN_ERROR,
  signinAction,
  socialAuthAction,
};
