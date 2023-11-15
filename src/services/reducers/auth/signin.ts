// eslint-disable-next-line import/no-cycle
import {
  SIGNIN_REQUEST,
  SIGNIN_SUCCESS,
  SIGNIN_ERROR,
  TSigninActions,
} from '../../actions/auth/signin';
import { LOGOUT } from '../../actions/logout/logout';

import { TUser } from '../../types/user';

export type TSigninState = {
  user: TUser | null;
  isLoading: boolean;
  hasError: boolean;

  signinRequest: boolean;
  signinSuccess: boolean;
  signinError: boolean;
  signinErrorText: string;
};

const signinInitialState: TSigninState = {
  user: null,
  isLoading: false,
  hasError: false,

  signinRequest: false,
  signinSuccess: false,
  signinError: false,
  signinErrorText: '',
};

function signinReducer(
  // eslint-disable-next-line @typescript-eslint/default-param-last
  state = signinInitialState,
  action: TSigninActions
) {
  switch (action.type) {
    // экшены авторизации
    case SIGNIN_REQUEST: {
      return {
        ...state,
        signinRequest: true,
        signinError: false,
      };
    }
    case SIGNIN_SUCCESS: {
      return {
        ...state,
        user: action.user,
        signinSuccess: true,
        signinRequest: false,
      };
    }
    case SIGNIN_ERROR: {
      return {
        ...state,
        signinRequest: false,
        signinError: true,
        signinErrorText: action.textError,
      };
    }
    case LOGOUT: {
      return {
        ...state,
        user: null,
        signinSuccess: false,
      };
    }
    default: {
      return state;
    }
  }
}

export { signinReducer };
