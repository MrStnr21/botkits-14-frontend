import getPlatformsApi from '../../../api/platforms';
// eslint-disable-next-line import/no-cycle
import { AppDispatch, AppThunk } from '../../types';
import { TPlatform } from '../../types/platform';
import { TResponseError } from '../../types/response';

const GET_PLATFORMS_REQUEST = 'GET_PLATFORMS_REQUEST';
const GET_PLATFORMS_SUCCESS = 'GET_PLATFORMS_SUCCESS';
const GET_PLATFORMS_ERROR = 'GET_PLATFORMS_ERROR';

export interface IGetPlatformsRequestAction {
  readonly type: typeof GET_PLATFORMS_REQUEST;
}

export interface IGetPlatformsSuccessAction {
  readonly type: typeof GET_PLATFORMS_SUCCESS;
  platforms: Array<TPlatform>;
}

export interface IGetPlatformsErrorAction {
  readonly type: typeof GET_PLATFORMS_ERROR;
}

export type TGetPlatformsActions =
  | IGetPlatformsRequestAction
  | IGetPlatformsSuccessAction
  | IGetPlatformsErrorAction;

const getPlatformsAction: AppThunk = () => {
  return (dispatch: AppDispatch) => {
    dispatch({
      type: GET_PLATFORMS_REQUEST,
    });
    getPlatformsApi()
      .then((res: Array<TPlatform>) => {
        if (res) {
          dispatch({
            type: GET_PLATFORMS_SUCCESS,
            platforms: res,
          });
        }
      })
      .catch((err: TResponseError) => {
        // eslint-disable-next-line no-console
        console.log(err[0]);
        dispatch({
          type: GET_PLATFORMS_ERROR,
        });
      });
  };
};

export {
  GET_PLATFORMS_REQUEST,
  GET_PLATFORMS_SUCCESS,
  GET_PLATFORMS_ERROR,
  getPlatformsAction,
};
