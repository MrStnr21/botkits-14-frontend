import { getUserInfoApi } from '../../../api/index';
import {
  removeAccessToken,
  removeRefreshToken,
} from '../../../auth/authService';

// eslint-disable-next-line import/no-cycle
import { AppDispatch, AppThunk } from '../../types';
import { TUser } from '../../types/user';

const GET_USER_INFO_REQUEST = 'GET_USER_INFO_REQUEST';
const GET_USER_INFO_SUCCESS = 'GET_USER_INFO_SUCCESS';
const GET_USER_INFO_ERROR = 'GET_USER_INFO_ERROR';

export interface IGetUserInfoRequestAction {
  readonly type: typeof GET_USER_INFO_REQUEST;
}

export interface IGetUserInfoSuccesAction {
  readonly type: typeof GET_USER_INFO_SUCCESS;
  user: TUser;
}

export interface IGetUserInfoErrorAction {
  readonly type: typeof GET_USER_INFO_ERROR;
}

export type TGetUserInfoActions =
  | IGetUserInfoRequestAction
  | IGetUserInfoSuccesAction
  | IGetUserInfoErrorAction;

/**
 * Экшн получения данных пользователя
 * @param token access token
 */
const getUserInfoAction: AppThunk = () => {
  return (dispatch: AppDispatch) => {
    dispatch({
      type: GET_USER_INFO_REQUEST,
    });
    getUserInfoApi()
      .then((res: TUser) => {
        if (res) {
          dispatch({
            type: GET_USER_INFO_SUCCESS,
            user: res,
          });
        }
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.log(err);
        if (err[0] === 'Ошибка 401') {
          removeAccessToken();
          removeRefreshToken();
        }
        dispatch({
          type: GET_USER_INFO_ERROR,
        });
      });
  };
};

export {
  GET_USER_INFO_REQUEST,
  GET_USER_INFO_SUCCESS,
  GET_USER_INFO_ERROR,
  getUserInfoAction,
};
