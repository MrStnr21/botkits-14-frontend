import { signupApi } from '../../../api/index';

import { saveAccessToken, saveRefreshToken } from '../../../auth/authService';

// eslint-disable-next-line import/no-cycle
import { AppDispatch, AppThunk } from '../../types';
import { IUserAuthError, IUserSignupState, TUser } from '../../types/user';
import { ILogoutAction } from '../logout/logout';

const SIGNUP_REQUEST = 'SIGNUP_REQUEST';
const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
const SIGNUP_ERROR = 'SIGNUP_ERROR';

export interface ISignupRequestAction {
  readonly type: typeof SIGNUP_REQUEST;
}

export interface ISignupSuccesAction {
  readonly type: typeof SIGNUP_SUCCESS;
  user: TUser;
}

export interface ISignupErrorAction {
  readonly type: typeof SIGNUP_ERROR;
  textError: string;
}

export type TSignupActions =
  | ISignupRequestAction
  | ISignupSuccesAction
  | ISignupErrorAction
  | ILogoutAction;

// экшн регистрации
const signupAction: AppThunk = (userInfo: IUserSignupState) => {
  return (dispatch: AppDispatch) => {
    dispatch({
      type: SIGNUP_REQUEST,
    });
    signupApi(userInfo)
      .then((res: TUser) => {
        if (res) {
          saveAccessToken(res.credentials.accessToken);
          saveRefreshToken(res.credentials.refreshToken);

          dispatch({
            type: SIGNUP_SUCCESS,
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
              type: SIGNUP_ERROR,
              textError: payload.message,
            });
          });
          // eslint-disable-next-line no-console
        } else console.log(err);
      });
  };
};

export { SIGNUP_REQUEST, SIGNUP_SUCCESS, SIGNUP_ERROR, signupAction };
