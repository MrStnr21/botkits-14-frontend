import { getUserInfoApi } from '../../../api/user';
import {
  removeAccessToken,
  removeRefreshToken,
  removeUserRole,
} from '../../../auth/authService';

// eslint-disable-next-line import/no-cycle
import { AppDispatch, AppThunk, TApplicationActions } from '../../types';
import { TResponseError } from '../../types/response';
import { TUser } from '../../types/user';
import { getBotsAction } from '../bots/getBot';

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
          dispatch(getBotsAction() as unknown as TApplicationActions);
        }
      })
      .catch((err: TResponseError) => {
        // eslint-disable-next-line no-console
        console.log(err);
        if (err[0] === 'Ошибка 401') {
          removeAccessToken();
          removeRefreshToken();
          removeUserRole();
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
