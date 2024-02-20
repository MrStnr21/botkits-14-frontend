/* eslint-disable import/no-cycle */
// eslint-disable-next-line import/no-cycle
import { Reducer } from 'redux';
import {
  GET_USER_INFO_REQUEST,
  GET_USER_INFO_SUCCESS,
  GET_USER_INFO_ERROR,
  TGetUserInfoActions,
} from '../../actions/user/user';

import { TUserProfile } from '../../types/user';

export type TGetUserInfoState = {
  user: TUserProfile | null;
  isLoading: boolean;
  hasError: boolean;

  userRequestedFirstTime: boolean;
  getUserInfoRequest: boolean;
  getUserInfoSuccess: boolean;
  getUserInfoError: boolean;
};

const getUserInfoInitialState: TGetUserInfoState = {
  user: null,
  isLoading: false,
  hasError: false,

  userRequestedFirstTime: false,
  getUserInfoRequest: false,
  getUserInfoSuccess: false,
  getUserInfoError: false,
};

const getUserInfoReducer: Reducer = (
  // eslint-disable-next-line @typescript-eslint/default-param-last
  state = getUserInfoInitialState,
  action: TGetUserInfoActions
) => {
  switch (action.type) {
    // экшены авторизации
    case GET_USER_INFO_REQUEST: {
      return {
        ...state,
        userRequestedFirstTime: true,
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
};

export { getUserInfoReducer };
