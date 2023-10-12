// eslint-disable-next-line import/no-cycle
import {
  RESET_PASSWORD_REQUEST,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_ERROR,
  TUserResetPasswordActions,
} from '../../actions/auth/reset-password';

import { IUserResetPasswordResponse } from '../../types/user';

export type TResetPasswordState = {
  message: IUserResetPasswordResponse | null;
  isLoading: boolean;
  hasError: boolean;

  resetPasswordRequest: boolean;
  resetPasswordSuccess: boolean;
  resetPasswordError: boolean;
  resetPasswordErrorText: string;
};

const signinInitialState: TResetPasswordState = {
  message: null,
  isLoading: false,
  hasError: false,

  resetPasswordRequest: false,
  resetPasswordSuccess: false,
  resetPasswordError: false,
  resetPasswordErrorText: '',
};

function resetPasswordReducer(
  // eslint-disable-next-line @typescript-eslint/default-param-last
  state = signinInitialState,
  action: TUserResetPasswordActions
) {
  switch (action.type) {
    // экшены авторизации
    case RESET_PASSWORD_REQUEST: {
      return {
        ...state,
        resetPasswordRequest: true,
        resetPasswordError: false,
      };
    }
    case RESET_PASSWORD_SUCCESS: {
      return {
        ...state,
        message: action.user,
        resetPasswordSuccess: true,
        resetPasswordRequest: false,
      };
    }
    case RESET_PASSWORD_ERROR: {
      return {
        ...state,
        resetPasswordRequest: false,
        resetPasswordError: true,
        resetPasswordErrorText: action.textError,
      };
    }
    default: {
      return state;
    }
  }
}

export { resetPasswordReducer };
