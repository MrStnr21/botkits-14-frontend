// eslint-disable-next-line import/no-cycle
import {
  SIGNIN_REQUEST,
  SIGNIN_SUCCESS,
  SIGNIN_ERROR,
  TAuthorizationActions,
} from '../actions/signup';

import { TUser } from '../types/data';

export type TAuthState = {
  user: TUser | null;
  isLoading: boolean;
  hasError: boolean;

  signinRequest: boolean;
  signinSuccess: boolean;
  signinError: boolean;
};

const signinInitialState: TAuthState = {
  user: null,
  isLoading: false,
  hasError: false,

  signinRequest: false,
  signinSuccess: false,
  signinError: false,
};

function signinReducer(
  // eslint-disable-next-line @typescript-eslint/default-param-last
  state = signinInitialState,
  action: TAuthorizationActions
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
      };
    }
    default: {
      return state;
    }
  }
}

export { signinReducer };