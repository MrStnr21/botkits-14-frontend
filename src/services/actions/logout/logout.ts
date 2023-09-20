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
const logoutAction: AppThunk = () => {
  return (dispatch: AppDispatch) => {
    removeAccessToken();
    removeRefreshToken();
    dispatch({
      type: LOGOUT,
    });
  };
};

export { LOGOUT, logoutAction };
