import { addBuilderDataApi } from '../../../api/index';

// eslint-disable-next-line import/no-cycle
import { AppDispatch, AppThunk } from '../../types';
import { TBuilderData } from '../../types/builder';

const ADD_BUILDERDATA_REQUEST = 'ADD_BUILDERDATA_REQUEST';
const ADD_BUILDERDATA_SUCCESS = 'ADD_BUILDERDATA_SUCCESS';
const ADD_BUILDERDATA_ERROR = 'ADD_BUILDERDATA_ERROR';

export interface IAddBuilderDataRequestAction {
  readonly type: typeof ADD_BUILDERDATA_REQUEST;
}

export interface IAddBuilderDataSuccessAction {
  readonly type: typeof ADD_BUILDERDATA_SUCCESS;
  dataBuilder: TBuilderData;
}

export interface IAddBuilderDataErrorAction {
  readonly type: typeof ADD_BUILDERDATA_ERROR;
}

export type TAddBuilderDataActions =
  | IAddBuilderDataRequestAction
  | IAddBuilderDataSuccessAction
  | IAddBuilderDataErrorAction;

// экшн добавления бота
const addBuilderDataAction: AppThunk = (data: TBuilderData, token: string) => {
  return (dispatch: AppDispatch) => {
    dispatch({
      type: ADD_BUILDERDATA_REQUEST,
    });
    addBuilderDataApi(data, token)
      .then((res: TBuilderData) => {
        if (res) {
          dispatch({
            type: ADD_BUILDERDATA_SUCCESS,
            dataBuilder: res,
          });
        }
      })
      .catch((err: { message: string }) => {
        // eslint-disable-next-line no-console
        console.log(err.message);
        dispatch({
          type: ADD_BUILDERDATA_ERROR,
        });
      });
  };
};

export {
  ADD_BUILDERDATA_REQUEST,
  ADD_BUILDERDATA_SUCCESS,
  ADD_BUILDERDATA_ERROR,
  addBuilderDataAction,
};
