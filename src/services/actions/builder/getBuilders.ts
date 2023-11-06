/* eslint-disable @typescript-eslint/no-unused-vars */
import { getBuildersDataApi } from '../../../api/index';

// eslint-disable-next-line import/no-cycle
import { AppDispatch, AppThunk } from '../../types';
import { TBuilderData } from '../../types/builder';

const GET_BUILDERS_DATA_REQUEST = 'GET_BUILDERS_DATA_REQUEST';
const GET_BUILDERS_DATA_SUCCESS = 'GET_BUILDERS_DATA_SUCCESS';
const GET_BUILDERS_DATA_ERROR = 'GET_BUILDERS_DATA_ERROR';

export interface IGetBuildersDataRequestAction {
  readonly type: typeof GET_BUILDERS_DATA_REQUEST;
}

export interface IGetBuildersDataSuccesAction {
  readonly type: typeof GET_BUILDERS_DATA_SUCCESS;
  dataBuilders: Array<TBuilderData>;
}

export interface IGetBuilderDataErrorAction {
  readonly type: typeof GET_BUILDERS_DATA_ERROR;
}

export type TGetBuildersDataActions =
  | IGetBuildersDataRequestAction
  | IGetBuildersDataSuccesAction
  | IGetBuilderDataErrorAction;

// Экшн получения данных
const getBuildersDataAction: AppThunk = (token: string) => {
  return (dispatch: AppDispatch) => {
    dispatch({
      type: GET_BUILDERS_DATA_REQUEST,
    });
    getBuildersDataApi(token)
      .then((res: Array<TBuilderData>) => {
        if (res) {
          dispatch({
            type: GET_BUILDERS_DATA_SUCCESS,
            dataBuilders: res,
          });
        }
      })
      .catch((err: { message: string }) => {
        // eslint-disable-next-line no-console
        console.log(err.message);
        dispatch({
          type: GET_BUILDERS_DATA_ERROR,
        });
      });
  };
};

export {
  GET_BUILDERS_DATA_REQUEST,
  GET_BUILDERS_DATA_SUCCESS,
  GET_BUILDERS_DATA_ERROR,
  getBuildersDataAction,
};
