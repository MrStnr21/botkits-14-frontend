import { addTemplatesBotsApi, deleteTemplatesBotsApi } from '../../../api/bots';

// eslint-disable-next-line import/no-cycle
import { AppDispatch, AppThunk } from '../../types';
import { TTemplateBotRes } from '../../types/bot';

const ADDBOTTEMPLATES_REQUEST = 'ADDBOTTEMPLATES_REQUSET';
const ADDBOTTEMPLATES_SUCCESS = 'ADDBOTTEMPLATES_SUCCESS';
const ADDBOTTEMPLATES_ERROR = 'ADDBOTTTEMPLATES_ERROR';

const DELETEBOTTEMPLATES_REQUEST = 'DELETEBOTTEMPLATES_REQUSET';
const DELETEBOTTEMPLATES_SUCCESS = 'DELETEBOTTEMPLATES_SUCCESS';
const DELETEBOTTEMPLATES_ERROR = 'DELETEBOTTTEMPLATES_ERROR';

export interface IAddBotTemplatesRequestAction {
  readonly type: typeof ADDBOTTEMPLATES_REQUEST;
}

export interface IAddBotTemplatesSuccessAction {
  readonly type: typeof ADDBOTTEMPLATES_SUCCESS;
  botTemplates: Array<TTemplateBotRes>;
}

export interface IAddBotTemplatesErrorAction {
  readonly type: typeof ADDBOTTEMPLATES_ERROR;
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

export type TAddTemplatesBotActions =
  | IAddBotTemplatesRequestAction
  | IAddBotTemplatesSuccessAction
  | IAddBotTemplatesErrorAction
  | IDeleteBotTemplatesRequestAction
  | IDeleteBotTemplatesSuccessAction
  | IDeleteBotTemplatesErrorAction;

// экшн добавления шаблона
const addBotTemplatesAction: AppThunk = (
  botinfo: TTemplateBotRes,
  token: string
) => {
  return (dispatch: AppDispatch) => {
    dispatch({
      type: ADDBOTTEMPLATES_REQUEST,
    });
    console.log(botinfo);
    addTemplatesBotsApi(botinfo, token)
      .then((res) => {
        console.log(res);
        if (res) {
          dispatch({
            type: ADDBOTTEMPLATES_SUCCESS,
            botTemplates: res,
          });
        }
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.log(err);
        dispatch({
          type: ADDBOTTEMPLATES_ERROR,
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
  ADDBOTTEMPLATES_REQUEST,
  ADDBOTTEMPLATES_SUCCESS,
  ADDBOTTEMPLATES_ERROR,
  DELETEBOTTEMPLATES_REQUEST,
  DELETEBOTTEMPLATES_SUCCESS,
  DELETEBOTTEMPLATES_ERROR,
  deleteBotTemplatesAction,
  addBotTemplatesAction,
};
