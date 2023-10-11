// eslint-disable-next-line import/no-cycle
import {
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_ERROR,
  TSignupActions,
} from '../../actions/auth/signup';
import { LOGOUT } from '../../actions/logout/logout';

import { TUser } from '../../types/user';

export type TSignupState = {
  user: TUser | null;
  isLoading: boolean;
  hasError: boolean;

  signupRequest: boolean;
  signupSuccess: boolean;
  signupError: boolean;
  signupErrorText: string;
};

const signupInitialState: TSignupState = {
  user: null,
  isLoading: false,
  hasError: false,

  signupRequest: false,
  signupSuccess: false,
  signupError: false,
  signupErrorText: '',
};

function signupReducer(
  // eslint-disable-next-line @typescript-eslint/default-param-last
  state = signupInitialState,
  action: TSignupActions
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
        signupErrorText: action.textError,
      };
    }
    case LOGOUT: {
      return {
        ...state,
        user: null,
        signupSuccess: false,
      };
    }
    default: {
      return state;
    }
  }
}

export { signupReducer };
