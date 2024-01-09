import { logoutApi } from '../../../api/auth';
import {
  removeAccessToken,
  removeRefreshToken,
} from '../../../auth/authService';
// eslint-disable-next-line import/no-cycle
import { AppDispatch, AppThunk } from '../../types';
import { TResponseError } from '../../types/response';

const LOGOUT = 'LOGOUT';

export interface ILogoutAction {
  readonly type: typeof LOGOUT;
}

export type TLogoutActions = ILogoutAction;

/**
 * экшен разлогина
 * @param navigate callback без аргументов
 */
const logoutAction: AppThunk = (navigate) => {
  return (dispatch: AppDispatch) => {
    logoutApi()
      .then(() => {
        removeAccessToken();
        removeRefreshToken();
        dispatch({
          type: LOGOUT,
        });
        navigate();
      })
      .catch((err: TResponseError) => {
        // eslint-disable-next-line no-console
        console.log(err[0]);
      });
  };
};

export { LOGOUT, logoutAction };
