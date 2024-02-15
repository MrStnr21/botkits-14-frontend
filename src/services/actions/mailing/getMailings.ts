import { getMailingsApi } from '../../../api/mailings';
// eslint-disable-next-line import/no-cycle
import { AppDispatch, AppThunk } from '../../types';
import { TMailing } from '../../types/mailing';
import { TResponseError } from '../../types/response';

const GETMAILINGS_REQUEST = 'GETMAILINGS_REQUSET';
const GETMAILINGS_SUCCESS = 'GETMAILINGS_SUCCESS';
const GETMAILINGS_ERROR = 'GETMAILINGS_ERROR';

export interface IGetMailingsRequestAction {
  readonly type: typeof GETMAILINGS_REQUEST;
}

export interface IGetMailingsSuccessAction {
  readonly type: typeof GETMAILINGS_SUCCESS;
  mailings: Array<TMailing>;
}

export interface IGetMailingsErrorAction {
  readonly type: typeof GETMAILINGS_ERROR;
}

export type TGetMailingsActions =
  | IGetMailingsRequestAction
  | IGetMailingsSuccessAction
  | IGetMailingsErrorAction;

const getMailingsAction: AppThunk = (id: string) => {
  return (dispatch: AppDispatch) => {
    dispatch({
      type: GETMAILINGS_REQUEST,
    });
    getMailingsApi(id)
      .then((res) => {
        if (res) {
          dispatch({
            type: GETMAILINGS_SUCCESS,
            mailings: res,
          });
        }
      })
      .catch((err: TResponseError) => {
        // eslint-disable-next-line no-console
        console.log(err);
        dispatch({
          type: GETMAILINGS_ERROR,
        });
      });
  };
};

export {
  GETMAILINGS_REQUEST,
  GETMAILINGS_SUCCESS,
  GETMAILINGS_ERROR,
  getMailingsAction,
};
