import { addBotApi } from '../../../api';

// eslint-disable-next-line import/no-cycle
import { AppDispatch, AppThunk } from '../../types';
import { TBot } from '../../types/bot';
import { TResponseError } from '../../types/response';

const ADD_BOT_REQUEST = 'ADD_BOT_REQUSET';
const ADD_BOT_SUCCESS = 'ADD_BOT_SUCCESS';
const ADD_BOT_ERROR = 'ADD_BOTT_ERROR';

export interface IAddBotRequestAction {
  readonly type: typeof ADD_BOT_REQUEST;
}

export interface IAddBotSuccessAction {
  readonly type: typeof ADD_BOT_SUCCESS;
  bot: TBot;
}

export interface IAddBotErrorAction {
  readonly type: typeof ADD_BOT_ERROR;
}

export type TAddBotActions =
  | IAddBotRequestAction
  | IAddBotSuccessAction
  | IAddBotErrorAction;

/**
 * экшн добавления бота
 * @param botinfo объект с типом TBot
 */
const addBotAction: AppThunk = (
  bot: TBot,
  templateId: string | null,
  callback: (id: string) => void
) => {
  return (dispatch: AppDispatch) => {
    dispatch({
      type: ADD_BOT_REQUEST,
    });
    addBotApi(bot, templateId)
      .then((res) => {
        if (res) {
          dispatch({
            type: ADD_BOT_SUCCESS,
            bot: res,
          });
          // eslint-disable-next-line no-underscore-dangle
          callback(res._id);
        }
      })
      .catch((err: TResponseError) => {
        // eslint-disable-next-line no-console
        console.log(err);
        dispatch({
          type: ADD_BOT_ERROR,
        });
      });
  };
};

export { ADD_BOT_REQUEST, ADD_BOT_SUCCESS, ADD_BOT_ERROR, addBotAction };
