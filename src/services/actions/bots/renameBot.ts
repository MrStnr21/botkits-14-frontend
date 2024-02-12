import { renameBotApi } from '../../../api/bots';
// eslint-disable-next-line import/no-cycle
import { AppDispatch, AppThunk } from '../../types';
import { IRenameBotResponse, TBot } from '../../types/bot';
import { TResponseError } from '../../types/response';
import { createAddErrorAction } from '../errors/errors';

const RENAME_BOT_REQUEST = 'RENAME_BOT_REQUEST';
const RENAME_BOT_SUCCESS = 'RENAME_BOT_SUCCESS';
const RENAME_BOT_ERROR = 'RENAME_BOT_ERROR';

export interface IRenameBotRequestAction {
  readonly type: typeof RENAME_BOT_REQUEST;
}

export interface IRenameBotSuccessAction {
  readonly type: typeof RENAME_BOT_SUCCESS;
  id: TBot['_id'];
  title: TBot['title'];
}

export interface IRenameBotErrorAction {
  readonly type: typeof RENAME_BOT_ERROR;
}

/**
 * Экшн переименования бота
 * @param id ID изменяемого бота
 * @param title новое имя бота
 */
const renameBotAction: AppThunk = (id: TBot['_id'], title: TBot['title']) => {
  return (dispatch: AppDispatch) => {
    dispatch({
      type: RENAME_BOT_REQUEST,
    });
    renameBotApi(id, title)
      .then((res: IRenameBotResponse) => {
        if (res) {
          dispatch({
            type: RENAME_BOT_SUCCESS,
            // eslint-disable-next-line no-underscore-dangle
            id: res._id,
            title: res.title,
          });
        }
      })
      .catch((err: TResponseError) => {
        console.error(err);
        dispatch(createAddErrorAction('Не удалось переименовать бот'));
        dispatch({
          type: RENAME_BOT_ERROR,
        });
      });
  };
};

export type TRenameBotActions =
  | IRenameBotRequestAction
  | IRenameBotSuccessAction
  | IRenameBotErrorAction;

export {
  RENAME_BOT_REQUEST,
  RENAME_BOT_SUCCESS,
  RENAME_BOT_ERROR,
  renameBotAction,
};
