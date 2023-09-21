// eslint-disable-next-line import/no-cycle
import {
  GET_USER_INFO_REQUEST,
  GET_USER_INFO_SUCCESS,
  GET_USER_INFO_ERROR,
  TGetUserInfoActions,
} from '../../actions/user/user';

import { TUser } from '../../types/user';

export type TGetUserInfoState = {
  user: TUser | null;
  isLoading: boolean;
  hasError: boolean;

  getUserInfoRequest: boolean;
  getUserInfoSuccess: boolean;
  getUserInfoError: boolean;
};

const getUserInfoInitialState: TGetUserInfoState = {
  user: null,
  isLoading: false,
  hasError: false,

  getUserInfoRequest: false,
  getUserInfoSuccess: false,
  getUserInfoError: false,
};

function getUserInfoReducer(
  // eslint-disable-next-line @typescript-eslint/default-param-last
  state = getUserInfoInitialState,
  action: TGetUserInfoActions
) {
  switch (action.type) {
    // экшены авторизации
    case GET_USER_INFO_REQUEST: {
      return {
        ...state,
        getUserInfoRequest: true,
        getUserInfoError: false,
      };
    }
    case GET_USER_INFO_SUCCESS: {
      return {
        ...state,
        user: action.user,
        getUserInfoSuccess: true,
        getUserInfoRequest: false,
      };
    }
    case GET_USER_INFO_ERROR: {
      return {
        ...state,
        getUserInfoRequest: false,
        getUserInfoError: true,
      };
    }
    default: {
      return state;
    }
  }
}

export { getUserInfoReducer };
