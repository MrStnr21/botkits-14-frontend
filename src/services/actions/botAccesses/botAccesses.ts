/* eslint-disable @typescript-eslint/no-unused-vars */
import { getAllBotAccessesApi } from '../../../api/botAccess';
// eslint-disable-next-line import/no-cycle
import { AppDispatch, AppThunk } from '../../types';
import { TBotAccess } from '../../types/botAccesses';
import { TResponseError } from '../../types/response';

const GET_BOT_ACCESSES_REQUEST = 'GET_BOT_ACCESSES_REQUSET';
const GET_BOT_ACCESSES_SUCCESS = 'GET_BOT_ACCESSES_SUCCESS';
const GET_BOT_ACCESSES_ERROR = 'GET_BOT_ACCESSES_ERROR';

export interface IGetBotAccessRequestAction {
  readonly type: typeof GET_BOT_ACCESSES_REQUEST;
}

export interface IGetBotAccessSuccessAction {
  readonly type: typeof GET_BOT_ACCESSES_SUCCESS;
  botAccesses: TBotAccess[] | [];
}

export interface IGetBotAccessErrorAction {
  readonly type: typeof GET_BOT_ACCESSES_ERROR;
}

export type TGetBotAccessesActions =
  | IGetBotAccessRequestAction
  | IGetBotAccessSuccessAction
  | IGetBotAccessErrorAction;

const getBotAccesses: AppThunk = () => {
  return (dispatch: AppDispatch) => {
    dispatch({
      type: GET_BOT_ACCESSES_REQUEST,
    });
    getAllBotAccessesApi()
      .then((res) => {
        if (res) {
          dispatch({
            type: GET_BOT_ACCESSES_SUCCESS,
            botAccesses: res,
          });
        }
      })
      .catch((err: TResponseError) => {
        // eslint-disable-next-line no-console
        console.log(err);
        dispatch({
          type: GET_BOT_ACCESSES_ERROR,
        });
      });
  };
};

export {
  GET_BOT_ACCESSES_ERROR,
  GET_BOT_ACCESSES_REQUEST,
  GET_BOT_ACCESSES_SUCCESS,
  getBotAccesses,
};
