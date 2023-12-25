import { deleteBotApi } from '../../../api/bots';
// eslint-disable-next-line import/no-cycle
import { AppDispatch, AppThunk } from '../../types';
import { IDeleteBotResponse, TBot } from '../../types/bot';
import { TResponseError } from '../../types/response';

const DELETE_BOT_REQUEST = 'DELETE_BOT_REQUSET';
const DELETE_BOT_SUCCESS = 'DELETE_BOT_SUCCESS';
const DELETE_BOT_ERROR = 'DELETE_BOT_ERROR';

export interface IDeleteBotRequestAction {
  readonly type: typeof DELETE_BOT_REQUEST;
}

export interface IDeleteBotSuccessAction {
  readonly type: typeof DELETE_BOT_SUCCESS;
  id: TBot['_id'];
}

export interface IDeleteBotErrorAction {
  readonly type: typeof DELETE_BOT_ERROR;
}

/**
 * экшн удаления бота
 * @param id id удялемого бота
 */
const deleteBotAction: AppThunk = (id: string) => {
  return (dispatch: AppDispatch) => {
    dispatch({
      type: DELETE_BOT_REQUEST,
    });
    deleteBotApi(id)
      .then((res: IDeleteBotResponse) => {
        if (res) {
          dispatch({
            type: DELETE_BOT_SUCCESS,
            // eslint-disable-next-line no-underscore-dangle
            id: res._id,
          });
        }
      })
      .catch((err: TResponseError) => {
        // eslint-disable-next-line no-console
        console.log(err);
        dispatch({
          type: DELETE_BOT_ERROR,
        });
      });
  };
};

export type TDeleteBotActions =
  | IDeleteBotRequestAction
  | IDeleteBotSuccessAction
  | IDeleteBotErrorAction;

export {
  DELETE_BOT_REQUEST,
  DELETE_BOT_SUCCESS,
  DELETE_BOT_ERROR,
  deleteBotAction,
};
