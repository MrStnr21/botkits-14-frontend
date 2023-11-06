/* eslint-disable @typescript-eslint/no-unused-vars */
import { getBuilderDataApi } from '../../../api/index';

// eslint-disable-next-line import/no-cycle
import { AppDispatch, AppThunk } from '../../types';
import { TBuilderData } from '../../types/builder';

const GET_BUILDER_DATA_REQUEST = 'GET_BUILDER_DATA_REQUEST';
const GET_BUILDER_DATA_SUCCESS = 'GET_BUILDER_DATA_SUCCESS';
const GET_BUILDER_DATA_ERROR = 'GET_BUILDER_DATA_ERROR';

export interface IGetBuilderDataRequestAction {
  readonly type: typeof GET_BUILDER_DATA_REQUEST;
}

export interface IGetBuilderDataSuccesAction {
  readonly type: typeof GET_BUILDER_DATA_SUCCESS;
  dataBuilder: TBuilderData;
}

export interface IGetBuilderDataErrorAction {
  readonly type: typeof GET_BUILDER_DATA_ERROR;
}

export type TGetBuilderDataActions =
  | IGetBuilderDataRequestAction
  | IGetBuilderDataSuccesAction
  | IGetBuilderDataErrorAction;

// Экшн получения данных
const getBuilderDataAction: AppThunk = (token: string) => {
  return (dispatch: AppDispatch) => {
    dispatch({
      type: GET_BUILDER_DATA_REQUEST,
    });
    getBuilderDataApi(token)
      .then((res: TBuilderData) => {
        if (res) {
          dispatch({
            type: GET_BUILDER_DATA_SUCCESS,
            dataBuilder: res,
          });
        }
      })
      .catch((err: { message: string }) => {
        // eslint-disable-next-line no-console
        console.log(err.message);
        dispatch({
          type: GET_BUILDER_DATA_ERROR,
        });
      });
  };
};

export {
  GET_BUILDER_DATA_REQUEST,
  GET_BUILDER_DATA_SUCCESS,
  GET_BUILDER_DATA_ERROR,
  getBuilderDataAction,
};
