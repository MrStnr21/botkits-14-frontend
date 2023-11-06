import { resetPasswordApi } from '../../../api/auth';

// eslint-disable-next-line import/no-cycle
import { AppDispatch, AppThunk } from '../../types';
import {
  IUserAuthError,
  IUserResetPasswordResponse,
  IUserResetPasswordState,
} from '../../types/user';

const RESET_PASSWORD_REQUEST = 'RESET_PASSWORD_REQUEST';
const RESET_PASSWORD_SUCCESS = 'RESET_PASSWORD_SUCCESS';
const RESET_PASSWORD_ERROR = 'RESET_PASSWORD_ERROR';

export interface IUserResetPasswordRequestAction {
  readonly type: typeof RESET_PASSWORD_REQUEST;
}

export interface IUserResetPasswordSuccessAction {
  readonly type: typeof RESET_PASSWORD_SUCCESS;
  user: IUserResetPasswordResponse;
}

export interface IUserResetPasswordErrorAction {
  readonly type: typeof RESET_PASSWORD_ERROR;
  textError: string;
}

export type TUserResetPasswordActions =
  | IUserResetPasswordRequestAction
  | IUserResetPasswordSuccessAction
  | IUserResetPasswordErrorAction;

// экшн авторизации
const resetPasswordAction: AppThunk = (userInfo: IUserResetPasswordState) => {
  return (dispatch: AppDispatch) => {
    dispatch({
      type: RESET_PASSWORD_REQUEST,
    });
    resetPasswordApi(userInfo)
      .then((res: IUserResetPasswordResponse) => {
        if (res) {
          dispatch({
            type: RESET_PASSWORD_SUCCESS,
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
              type: RESET_PASSWORD_ERROR,
              textError: payload.message,
            });
          });
          // eslint-disable-next-line no-console
        } else console.log(err);
      });
  };
};

export {
  RESET_PASSWORD_REQUEST,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_ERROR,
  resetPasswordAction,
};
