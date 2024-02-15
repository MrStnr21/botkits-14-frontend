import { createMailingApi } from '../../../api/mailings';
// eslint-disable-next-line import/no-cycle
import { AppDispatch, AppThunk } from '../../types';
import { TFormData, TMailing } from '../../types/mailing';
import { TResponseError } from '../../types/response';

const CREATE_MAILING_REQUEST = 'CREATE_MAILING_REQUSET';
const CREATE_MAILING_SUCCESS = 'CREATE_MAILING_SUCCESS';
const CREATE_MAILING_ERROR = 'CREATE_MAILINGT_ERROR';

export interface ICreateMailingRequestAction {
  readonly type: typeof CREATE_MAILING_REQUEST;
}

export interface ICreateMailingSuccessAction {
  readonly type: typeof CREATE_MAILING_SUCCESS;
  mailing: TMailing;
}

export interface ICreateMailingErrorAction {
  readonly type: typeof CREATE_MAILING_ERROR;
}

export type TCreateMailingActions =
  | ICreateMailingRequestAction
  | ICreateMailingSuccessAction
  | ICreateMailingErrorAction;

const createMailingAction: AppThunk = (
  mailingData: TFormData,
  callback: () => void
) => {
  return (dispatch: AppDispatch) => {
    dispatch({
      type: CREATE_MAILING_REQUEST,
    });
    createMailingApi(mailingData)
      .then((res) => {
        if (res) {
          dispatch({
            type: CREATE_MAILING_SUCCESS,
            mailing: res,
          });
          // eslint-disable-next-line no-underscore-dangle
          callback();
        }
      })
      .catch((err: TResponseError) => {
        // eslint-disable-next-line no-console
        console.log(err);
        dispatch({
          type: CREATE_MAILING_ERROR,
        });
      });
  };
};

export {
  CREATE_MAILING_REQUEST,
  CREATE_MAILING_SUCCESS,
  CREATE_MAILING_ERROR,
  createMailingAction,
};
