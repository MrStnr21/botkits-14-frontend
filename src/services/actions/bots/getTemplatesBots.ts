import { getTemplatesBotsApi } from '../../../api/bots';
// eslint-disable-next-line import/no-cycle
import { AppDispatch, AppThunk } from '../../types';
import { TTemplateBot } from '../../types/bot';

const GET_TEMPLATES_BOTS_REQUEST = 'GET_TEMPLATES_BOTS_REQUEST';
const GET_TEMPLATES_BOTS_SUCCESS = 'GET_TEMPLATES_BOTS_SUCCESS';
const GET_TEMPLATES_BOTS_ERROR = 'GET_TEMPLATES_BOTS_ERROR';

export interface IGetTemplatesBotsRequestAction {
  readonly type: typeof GET_TEMPLATES_BOTS_REQUEST;
}

export interface IGetTemplatesBotsSuccessAction {
  readonly type: typeof GET_TEMPLATES_BOTS_SUCCESS;
  templatesBots: Array<TTemplateBot>;
}

export interface IGetTemplatesBotsErrorAction {
  readonly type: typeof GET_TEMPLATES_BOTS_ERROR;
}

export type TGetTemplatesBotsActions =
  | IGetTemplatesBotsRequestAction
  | IGetTemplatesBotsSuccessAction
  | IGetTemplatesBotsErrorAction;

/**
 * экшн получения шаблонов
 * @param token access token
 */
const getTemplatesBotsAction: AppThunk = (token: string) => {
  return (dispatch: AppDispatch) => {
    dispatch({
      type: GET_TEMPLATES_BOTS_REQUEST,
    });
    getTemplatesBotsApi(token)
      .then((res: Array<TTemplateBot>) => {
        if (res) {
          dispatch({
            type: GET_TEMPLATES_BOTS_SUCCESS,
            templatesBots: res,
          });
        }
      })
      .catch((err: { message: string }) => {
        // eslint-disable-next-line no-console
        console.log(err.message);
        dispatch({
          type: GET_TEMPLATES_BOTS_ERROR,
        });
      });
  };
};

export {
  GET_TEMPLATES_BOTS_REQUEST,
  GET_TEMPLATES_BOTS_SUCCESS,
  GET_TEMPLATES_BOTS_ERROR,
  getTemplatesBotsAction,
};
