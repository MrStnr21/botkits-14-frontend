import { signupApi } from '../../../api/index';

import { saveAccessToken, saveRefreshToken } from '../../../auth/authService';

// eslint-disable-next-line import/no-cycle
import { AppDispatch, AppThunk } from '../../types';
import { IUserSignupError, IUserSignupState, TUser } from '../../types/user';

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
  | ISignupErrorAction;

// экшн регистрации
const signupAction: AppThunk = (userInfo: IUserSignupState) => {
  return (dispatch: AppDispatch) => {
    dispatch({
      type: SIGNUP_REQUEST,
    });
    signupApi(userInfo)
      .then((res: TUser) => {
        if (res) {
          saveAccessToken(res.accounts[0].credentials.accessToken);
          saveRefreshToken(res.accounts[0].credentials.refreshToken);

          dispatch({
            type: SIGNUP_SUCCESS,
            user: res,
          });
        }
      })
      .catch((err: [string, Promise<IUserSignupError>]) => {
        // eslint-disable-next-line no-console
        console.log(err[0]);
        err[1].then((payload: IUserSignupError) => {
          dispatch({
            type: SIGNUP_ERROR,
            textError: payload.message,
          });
        });
      });
  };
};

export { SIGNUP_REQUEST, SIGNUP_SUCCESS, SIGNUP_ERROR, signupAction };
