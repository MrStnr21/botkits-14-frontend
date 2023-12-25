import { addBotApi } from '../../../api';

// eslint-disable-next-line import/no-cycle
import { AppDispatch, AppThunk } from '../../types';
import { TBot } from '../../types/bot';
import { TResponseError } from '../../types/response';

const ADDBOT_REQUEST = 'ADDBOT_REQUSET';
const ADDBOT_SUCCESS = 'ADDBOT_SUCCESS';
const ADDBOT_ERROR = 'ADDBOTT_ERROR';

export interface IAddBotRequestAction {
  readonly type: typeof ADDBOT_REQUEST;
}

export interface IAddBotSuccessAction {
  readonly type: typeof ADDBOT_SUCCESS;
  bot: TBot;
}

export interface IAddBotErrorAction {
  readonly type: typeof ADDBOT_ERROR;
}

export type TAddBotActions =
  | IAddBotRequestAction
  | IAddBotSuccessAction
  | IAddBotErrorAction;

/**
 * экшн добавления бота
 * @param botinfo объект с типом TBot
 * @param token access token
 */
const addBotAction: AppThunk = (botinfo: TBot) => {
  return (dispatch: AppDispatch) => {
    dispatch({
      type: ADDBOT_REQUEST,
    });
    console.log(botinfo);
    addBotApi(botinfo)
      .then((res) => {
        console.log(res);
        if (res) {
          dispatch({
            type: ADDBOT_SUCCESS,
            bot: res,
          });
        }
      })
      .catch((err: TResponseError) => {
        // eslint-disable-next-line no-console
        console.log(err);
        dispatch({
          type: ADDBOT_ERROR,
        });
      });
  };
};

export { ADDBOT_REQUEST, ADDBOT_SUCCESS, ADDBOT_ERROR, addBotAction };
