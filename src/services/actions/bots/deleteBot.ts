// import { DeleteBotApi } from '../../../api';

// eslint-disable-next-line import/no-cycle
import { deleteBotApi } from '../../../api/bots';
// eslint-disable-next-line import/no-cycle
import { AppDispatch, AppThunk } from '../../types';
import { IDeleteBotResponse, TBot } from '../../types/bot';

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

// экшн получения шаблонов
const deleteBotAction: AppThunk = (token: string) => {
  return (dispatch: AppDispatch) => {
    dispatch({
      type: DELETE_BOT_REQUEST,
    });
    deleteBotApi(token)
      .then((res: IDeleteBotResponse) => {
        if (res) {
          dispatch({
            type: DELETE_BOT_SUCCESS,
            // eslint-disable-next-line no-underscore-dangle
            id: res._id,
          });
        }
      })
      .catch((err: { message: string }) => {
        // eslint-disable-next-line no-console
        console.log(err.message);
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

// экшн добавления бота - не используется, код в коммите 08ebaab

export {
  DELETE_BOT_REQUEST,
  DELETE_BOT_SUCCESS,
  DELETE_BOT_ERROR,
  deleteBotAction,
};
