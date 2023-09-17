// eslint-disable-next-line import/no-cycle
import {
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_ERROR,
  SIGNIN_REQUSET,
  SIGNIN_SUCCESS,
  SIGNIN_ERROR,
  TAuthorizationActions,
} from '../actions/authorization';

import { TUser } from '../types/data';

export type TAuthState = {
  user: TUser | null;
  isLoading: boolean;
  hasError: boolean;

  signupRequest: boolean;
  signupSuccess: boolean;
  signupError: boolean;

  signinRequest: boolean;
  signinSuccess: boolean;
  signinError: boolean;
};

const authInitialState: TAuthState = {
  user: null,
  isLoading: false,
  hasError: false,

  signupRequest: false,
  signupSuccess: false,
  signupError: false,

  signinRequest: false,
  signinSuccess: false,
  signinError: false,
};

function authorizationReducer(
  // eslint-disable-next-line @typescript-eslint/default-param-last
  state = authInitialState,
  action: TAuthorizationActions
) {
  switch (action.type) {
    // экшены регистрации
    case SIGNUP_REQUEST: {
      return {
        ...state,
        signupRequest: true,
        signupSuccess: false,
        signupError: false,
      };
    }
    case SIGNUP_SUCCESS: {
      return {
        ...state,
        user: action.user,
        signupRequest: false,
        signupSuccess: true,
        signupError: false,
      };
    }
    case SIGNUP_ERROR: {
      return {
        ...state,
        signupRequest: false,
        signupSuccess: false,
        signupError: true,
      };
    }
    // экшены авторизации
    case SIGNIN_REQUSET: {
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

export { authorizationReducer };
