import { addBotApi } from '../../../api';

// eslint-disable-next-line import/no-cycle
import { AppDispatch, AppThunk } from '../../types';
import { TBot } from '../../types/bot';

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

// экшн добавления бота
const addBotAction: AppThunk = (botinfo: TBot, token: string) => {
  return (dispatch: AppDispatch) => {
    dispatch({
      type: ADDBOT_REQUEST,
    });
    addBotApi(botinfo, token)
      .then((res: any) => {
        if (res) {
          dispatch({
            type: ADDBOT_SUCCESS,
            bot: res,
          });
        }
      })
      .catch((err: { message: string }) => {
        // eslint-disable-next-line no-console
        console.log(err.message);
        dispatch({
          type: ADDBOT_ERROR,
        });
      });
  };
};

export { ADDBOT_REQUEST, ADDBOT_SUCCESS, ADDBOT_ERROR, addBotAction };
