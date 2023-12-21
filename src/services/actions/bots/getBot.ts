import { getBotsApi } from '../../../api';

// eslint-disable-next-line import/no-cycle
import { AppDispatch, AppThunk } from '../../types';
import { TBot } from '../../types/bot';

const GETBOTS_REQUEST = 'GETBOT_REQUSET';
const GETBOTS_SUCCESS = 'GETBOT_SUCCESS';
const GETBOTS_ERROR = 'GETBOT_ERROR';

export interface IGetBotsRequestAction {
  readonly type: typeof GETBOTS_REQUEST;
}

export interface IGetBotsSuccessAction {
  readonly type: typeof GETBOTS_SUCCESS;
  bot: Array<TBot>;
}

export interface IGetBotsErrorAction {
  readonly type: typeof GETBOTS_ERROR;
}

export type TGetBotsActions =
  | IGetBotsRequestAction
  | IGetBotsSuccessAction
  | IGetBotsErrorAction;

/**
 * экшн получения ботов
 * @param token access token
 */
const getBotsAction: AppThunk = () => {
  return (dispatch: AppDispatch) => {
    dispatch({
      type: GETBOTS_REQUEST,
    });
    getBotsApi()
      .then((res) => {
        console.log(res);
        if (res) {
          dispatch({
            type: GETBOTS_SUCCESS,
            bot: res,
          });
        }
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.log(err);
        dispatch({
          type: GETBOTS_ERROR,
        });
      });
  };
};

export { GETBOTS_REQUEST, GETBOTS_SUCCESS, GETBOTS_ERROR, getBotsAction };
