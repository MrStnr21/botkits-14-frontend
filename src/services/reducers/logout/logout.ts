// eslint-disable-next-line import/no-cycle
import { LOGOUT, TLogoutActions } from '../../actions/logout/logout';

import { TUser } from '../../types/user';

export type TLogoutState = {
  user: TUser | null;
  isLoading: boolean;
  hasError: boolean;

  loginSuccess: boolean;
  loginError: boolean;
};

const logoutInitialState: TLogoutState = {
  user: null,
  isLoading: false,
  hasError: false,

  loginSuccess: false,
  loginError: false,
};

// eslint-disable-next-line @typescript-eslint/default-param-last
function logoutReducer(state = logoutInitialState, action: TLogoutActions) {
  switch (action.type) {
    case LOGOUT: {
      return {
        ...state,
        user: null,
        loginSuccess: false,
      };
    }
    default: {
      return state;
    }
  }
}

export default logoutReducer;
