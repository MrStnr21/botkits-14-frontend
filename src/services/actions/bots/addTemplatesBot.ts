import { addTemplatesBotsApi } from '../../../api/bots';

// eslint-disable-next-line import/no-cycle
import { AppDispatch, AppThunk } from '../../types';
import { TTemplateBotRes } from '../../types/bot';

const ADDBOTTEMPLATES_REQUEST = 'ADDBOTTEMPLATES_REQUSET';
const ADDBOTTEMPLATES_SUCCESS = 'ADDBOTTEMPLATES_SUCCESS';
const ADDBOTTEMPLATES_ERROR = 'ADDBOTTTEMPLATES_ERROR';

export interface IAddBotTemplatesRequestAction {
  readonly type: typeof ADDBOTTEMPLATES_REQUEST;
}

export interface IAddBotTemplatesSuccessAction {
  readonly type: typeof ADDBOTTEMPLATES_SUCCESS;
  botTemplates: TTemplateBotRes[];
}

export interface IAddBotTemplatesErrorAction {
  readonly type: typeof ADDBOTTEMPLATES_ERROR;
}

export type TAddTemplatesBotActions =
  | IAddBotTemplatesRequestAction
  | IAddBotTemplatesSuccessAction
  | IAddBotTemplatesErrorAction;

// экшн добавления бота
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

export {
  ADDBOTTEMPLATES_REQUEST,
  ADDBOTTEMPLATES_SUCCESS,
  ADDBOTTEMPLATES_ERROR,
  addBotTemplatesAction,
};
