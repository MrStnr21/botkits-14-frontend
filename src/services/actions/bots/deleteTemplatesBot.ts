import { deleteTemplatesBotsApi } from '../../../api/bots';

// eslint-disable-next-line import/no-cycle
import { AppDispatch, AppThunk } from '../../types';
// import { TTemplateBotRes } from '../../types/bot';

const DELETEBOTTEMPLATES_REQUEST = 'DELETEBOTTEMPLATES_REQUSET';
const DELETEBOTTEMPLATES_SUCCESS = 'DELETEBOTTEMPLATES_SUCCESS';
const DELETEBOTTEMPLATES_ERROR = 'DELETEBOTTTEMPLATES_ERROR';

export interface IDeleteBotTemplatesRequestAction {
  readonly type: typeof DELETEBOTTEMPLATES_REQUEST;
}

export interface IDeleteBotTemplatesSuccessAction {
  readonly type: typeof DELETEBOTTEMPLATES_SUCCESS;
  id: string;
}

export interface IDeleteBotTemplatesErrorAction {
  readonly type: typeof DELETEBOTTEMPLATES_ERROR;
}

export type TDeleteTemplatesBotActions =
  | IDeleteBotTemplatesRequestAction
  | IDeleteBotTemplatesSuccessAction
  | IDeleteBotTemplatesErrorAction;

// экшн добавления бота
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
            id: res,
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
  DELETEBOTTEMPLATES_REQUEST,
  DELETEBOTTEMPLATES_SUCCESS,
  DELETEBOTTEMPLATES_ERROR,
  deleteBotTemplatesAction,
};
