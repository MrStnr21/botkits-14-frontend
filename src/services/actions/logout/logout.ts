import { logoutApi } from '../../../api/auth';
import {
  removeAccessToken,
  removeRefreshToken,
} from '../../../auth/authService';
// eslint-disable-next-line import/no-cycle
import { AppDispatch, AppThunk } from '../../types';

const LOGOUT = 'LOGOUT';

export interface ILogoutAction {
  readonly type: typeof LOGOUT;
}

export type TLogoutActions = ILogoutAction;

// экшен разлогина
const logoutAction: AppThunk = (token: string, navigate) => {
  return (dispatch: AppDispatch) => {
    logoutApi(token)
      .then((res) => {
        removeAccessToken();
        removeRefreshToken();
        dispatch({
          type: LOGOUT,
        });
        navigate();
        // eslint-disable-next-line no-console
        console.log(res.message);
      })
      .catch((err: { message: string }) => {
        // eslint-disable-next-line no-console
        console.log(err.message);
      });
  };
};

export { LOGOUT, logoutAction };
