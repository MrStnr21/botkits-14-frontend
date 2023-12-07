import { deleteTemplatesBotsApi, getTemplatesBotsApi } from '../../../api/bots';
// eslint-disable-next-line import/no-cycle
import { AppDispatch, AppThunk } from '../../types';
import { TTemplateBotRes } from '../../types/bot';

const GET_TEMPLATES_BOTS_REQUEST = 'GET_TEMPLATES_BOTS_REQUEST';
const GET_TEMPLATES_BOTS_SUCCESS = 'GET_TEMPLATES_BOTS_SUCCESS';
const GET_TEMPLATES_BOTS_ERROR = 'GET_TEMPLATES_BOTS_ERROR';

const DELETEBOTTEMPLATES_REQUEST = 'DELETEBOTTEMPLATES_REQUSET';
const DELETEBOTTEMPLATES_SUCCESS = 'DELETEBOTTEMPLATES_SUCCESS';
const DELETEBOTTEMPLATES_ERROR = 'DELETEBOTTTEMPLATES_ERROR';

export interface IGetTemplatesBotsRequestAction {
  readonly type: typeof GET_TEMPLATES_BOTS_REQUEST;
}

export interface IGetTemplatesBotsSuccessAction {
  readonly type: typeof GET_TEMPLATES_BOTS_SUCCESS;
  templatesBots: Array<TTemplateBotRes>;
}

export interface IGetTemplatesBotsErrorAction {
  readonly type: typeof GET_TEMPLATES_BOTS_ERROR;
}

export interface IDeleteBotTemplatesRequestAction {
  readonly type: typeof DELETEBOTTEMPLATES_REQUEST;
}

export interface IDeleteBotTemplatesSuccessAction {
  readonly type: typeof DELETEBOTTEMPLATES_SUCCESS;
  botTemplates: TTemplateBotRes;
}

export interface IDeleteBotTemplatesErrorAction {
  readonly type: typeof DELETEBOTTEMPLATES_ERROR;
}

export type TGetTemplatesBotsActions =
  | IGetTemplatesBotsRequestAction
  | IGetTemplatesBotsSuccessAction
  | IGetTemplatesBotsErrorAction
  | IDeleteBotTemplatesRequestAction
  | IDeleteBotTemplatesSuccessAction
  | IDeleteBotTemplatesErrorAction;

// экшн получения шаблонов
const getTemplatesBotsAction: AppThunk = (token: string) => {
  return (dispatch: AppDispatch) => {
    dispatch({
      type: GET_TEMPLATES_BOTS_REQUEST,
    });
    getTemplatesBotsApi(token)
      .then((res: Array<TTemplateBotRes>) => {
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

// экшн удаления шаблона

const deleteBotTemplatesAction: AppThunk = (idCard: string, token: string) => {
  return (dispatch: AppDispatch) => {
    dispatch({
      type: DELETEBOTTEMPLATES_REQUEST,
    });
    console.log(idCard);
    deleteTemplatesBotsApi(idCard, token)
      .then((res) => {
        console.log(res);
        if (res) {
          dispatch({
            type: DELETEBOTTEMPLATES_SUCCESS,
            botTemplates: res,
          });
        }
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.log(err);
        dispatch({
          type: DELETEBOTTEMPLATES_ERROR,
        });
      });
  };
};

export {
  GET_TEMPLATES_BOTS_REQUEST,
  GET_TEMPLATES_BOTS_SUCCESS,
  GET_TEMPLATES_BOTS_ERROR,
  DELETEBOTTEMPLATES_REQUEST,
  DELETEBOTTEMPLATES_SUCCESS,
  DELETEBOTTEMPLATES_ERROR,
  deleteBotTemplatesAction,
  getTemplatesBotsAction,
};
