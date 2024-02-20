import { socialAuth } from '../../../api/auth';
import { signinApi } from '../../../api/index';

import { saveAccessToken, saveRefreshToken } from '../../../auth/authService';

// eslint-disable-next-line import/no-cycle
import { AppDispatch, AppThunk, TApplicationActions } from '../../types';
import { TResponseError } from '../../types/response';
import { IUserAuthError, IUserSigninState, TUser } from '../../types/user';
import { ILogoutAction } from '../logout/logout';
import { getUserInfoAction } from '../user/user';

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
  | ISigninErrorAction
  | ILogoutAction;

/**
 * экшн авторизации
 * @param userInfo объект формата `{password: string, email: string}`
 */
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
          dispatch(getUserInfoAction() as unknown as TApplicationActions);

          dispatch({
            type: SIGNIN_SUCCESS,
            user: res,
          });
        }
      })
      .catch((err: [string, Promise<IUserAuthError> | undefined]) => {
        if (err[1]) {
          // eslint-disable-next-line no-console
          console.log(err[0]);
          err[1].then((payload: IUserAuthError) => {
            dispatch({
              type: SIGNIN_ERROR,
              textError: payload.message,
            });
          });
          // eslint-disable-next-line no-console
        } else console.log(err);
      });
  };
};

/**
 * экшн для авторизации через социальную сеть
 * @param code строка
 * @param social строка
 * @param cookieData строка
 */
const socialAuthAction: AppThunk = (
  code: string,
  social: string,
  cookieData?: string
) => {
  return (dispatch: AppDispatch) => {
    dispatch({
      type: SIGNIN_REQUEST,
    });
    if (cookieData && social === 'cookie') {
      const data = JSON.parse(cookieData);

      saveAccessToken(data.credentials.accessToken);
      saveRefreshToken(data.credentials.refreshToken);

      dispatch({
        type: SIGNIN_SUCCESS,
        user: data,
      });
    } else {
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
        .catch((err: TResponseError) => {
          // eslint-disable-next-line no-console
          console.log(err[0]);
          dispatch({
            type: SIGNIN_ERROR,
            textError: err[0],
          });
        });
    }
  };
};

export {
  SIGNIN_REQUEST,
  SIGNIN_SUCCESS,
  SIGNIN_ERROR,
  signinAction,
  socialAuthAction,
};
