import {
  addBotTemplateApi,
  deleteBotTemplateApi,
  getBotTemplatesApi,
  updateBotTemplateApi,
} from '../../../api/bots';
// eslint-disable-next-line import/no-cycle
import { AppDispatch, AppThunk } from '../../types';
import { TBotTemplate, TBotTemplateReq } from '../../types/bot';
import { TResponseError } from '../../types/response';

const GET_TEMPLATES_BOTS_REQUEST = 'GET_TEMPLATES_BOTS_REQUEST';
const GET_TEMPLATES_BOTS_SUCCESS = 'GET_TEMPLATES_BOTS_SUCCESS';
const GET_TEMPLATES_BOTS_ERROR = 'GET_TEMPLATES_BOTS_ERROR';

const DELETEBOTTEMPLATES_REQUEST = 'DELETEBOTTEMPLATES_REQUSET';
const DELETEBOTTEMPLATES_SUCCESS = 'DELETEBOTTEMPLATES_SUCCESS';
const DELETEBOTTEMPLATES_ERROR = 'DELETEBOTTTEMPLATES_ERROR';

const UPDATEBOTTEMPLATES_REQUEST = 'UPDATEBOTTEMPLATES_REQUSET';
const UPDATEBOTTEMPLATES_SUCCESS = 'UPDATEBOTTEMPLATES_SUCCESS';
const UPDATEBOTTEMPLATES_ERROR = 'UPDATEBOTTTEMPLATES_ERROR';

const ADD_BOT_TEMPLATE_REQUEST = 'ADD_BOT_TEMPLATE_REQUSET';
const ADD_BOT_TEMPLATE_SUCCESS = 'ADD_BOT_TEMPLATE_SUCCESS';
const ADD_BOT_TEMPLATE_ERROR = 'ADD_BOT_TEMPLATE_ERROR';

export interface IGetTemplatesBotsRequestAction {
  readonly type: typeof GET_TEMPLATES_BOTS_REQUEST;
}

export interface IGetTemplatesBotsSuccessAction {
  readonly type: typeof GET_TEMPLATES_BOTS_SUCCESS;
  botTemplates: Array<TBotTemplate>;
}

export interface IGetTemplatesBotsErrorAction {
  readonly type: typeof GET_TEMPLATES_BOTS_ERROR;
}

export interface IDeleteBotTemplatesRequestAction {
  readonly type: typeof DELETEBOTTEMPLATES_REQUEST;
}

export interface IDeleteBotTemplatesSuccessAction {
  readonly type: typeof DELETEBOTTEMPLATES_SUCCESS;
  id: TBotTemplate['_id'];
}

export interface IDeleteBotTemplatesErrorAction {
  readonly type: typeof DELETEBOTTEMPLATES_ERROR;
}

export interface IUpdateBotTemplatesRequestAction {
  readonly type: typeof UPDATEBOTTEMPLATES_REQUEST;
}

export interface IUpdateBotTemplatesSuccessAction {
  readonly type: typeof UPDATEBOTTEMPLATES_SUCCESS;
  template: TBotTemplate;
}

export interface IUpdateBotTemplatesErrorAction {
  readonly type: typeof UPDATEBOTTEMPLATES_ERROR;
}
export interface IABotTemplatesErrorAction {
  readonly type: typeof ADD_BOT_TEMPLATE_ERROR;
}

export interface IAddBotTemplatesRequestAction {
  readonly type: typeof ADD_BOT_TEMPLATE_REQUEST;
}

export interface IAddBotTemplatesSuccessAction {
  readonly type: typeof ADD_BOT_TEMPLATE_SUCCESS;
  template: TBotTemplate;
}

export type TGetTemplatesBotsActions =
  | IGetTemplatesBotsRequestAction
  | IGetTemplatesBotsSuccessAction
  | IGetTemplatesBotsErrorAction
  | IDeleteBotTemplatesRequestAction
  | IDeleteBotTemplatesSuccessAction
  | IDeleteBotTemplatesErrorAction
  | IUpdateBotTemplatesRequestAction
  | IUpdateBotTemplatesSuccessAction
  | IUpdateBotTemplatesErrorAction
  | IABotTemplatesErrorAction
  | IAddBotTemplatesRequestAction
  | IAddBotTemplatesSuccessAction;

// экшн получения шаблонов
const getTemplatesBotsAction: AppThunk = () => {
  return (dispatch: AppDispatch) => {
    dispatch({
      type: GET_TEMPLATES_BOTS_REQUEST,
    });
    getBotTemplatesApi()
      .then((res) => {
        if (res) {
          dispatch({
            type: GET_TEMPLATES_BOTS_SUCCESS,
            botTemplates: res,
          });
        }
      })
      .catch((err: TResponseError) => {
        // eslint-disable-next-line no-console
        console.log(err[0]);
        dispatch({
          type: GET_TEMPLATES_BOTS_ERROR,
        });
      });
  };
};

// экшн удаления шаблонов

const deleteBotTemplatesAction: AppThunk = (idCard: string) => {
  return (dispatch: AppDispatch) => {
    dispatch({
      type: DELETEBOTTEMPLATES_REQUEST,
    });
    deleteBotTemplateApi(idCard)
      .then((res) => {
        dispatch({
          type: DELETEBOTTEMPLATES_SUCCESS,
          // eslint-disable-next-line no-underscore-dangle
          id: res._id,
        });
      })
      .catch((err: TResponseError) => {
        // eslint-disable-next-line no-console
        console.log(err);
        dispatch({
          type: DELETEBOTTEMPLATES_ERROR,
        });
      });
  };
};

const updateBotTemplatesAction: AppThunk = (
  botTemplates: TBotTemplateReq,
  id: string
) => {
  return (dispatch: AppDispatch) => {
    dispatch({
      type: UPDATEBOTTEMPLATES_REQUEST,
    });
    updateBotTemplateApi(botTemplates, id)
      .then((res) => {
        dispatch({
          type: UPDATEBOTTEMPLATES_SUCCESS,
          template: res,
        });
      })
      .catch((err: TResponseError) => {
        // eslint-disable-next-line no-console
        console.log(err);
        dispatch({
          type: UPDATEBOTTEMPLATES_ERROR,
        });
      });
  };
};

const addBotTemplateAction: AppThunk = (
  template: TBotTemplateReq,
  callback: (id: string) => void
) => {
  return (dispatch: AppDispatch) => {
    dispatch({
      type: ADD_BOT_TEMPLATE_REQUEST,
    });
    addBotTemplateApi(template)
      .then((res) => {
        if (res) {
          dispatch({
            type: ADD_BOT_TEMPLATE_SUCCESS,
            template: res,
          });
          // eslint-disable-next-line no-underscore-dangle
          callback(res._id);
        }
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.log(err);
        dispatch({
          type: ADD_BOT_TEMPLATE_ERROR,
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
  UPDATEBOTTEMPLATES_REQUEST,
  UPDATEBOTTEMPLATES_SUCCESS,
  UPDATEBOTTEMPLATES_ERROR,
  ADD_BOT_TEMPLATE_REQUEST,
  ADD_BOT_TEMPLATE_SUCCESS,
  ADD_BOT_TEMPLATE_ERROR,
  deleteBotTemplatesAction,
  getTemplatesBotsAction,
  updateBotTemplatesAction,
  addBotTemplateAction,
};
