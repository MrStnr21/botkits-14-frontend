import {
  IUserResponse,
  IUserSigninState,
  IUserSignupState,
} from '../services/types/user';

import request from './api';

import BASE_URL from '../utils/data';

// запрос регистрации
function signupApi(userInfo: IUserSignupState) {
  return request<IUserResponse>(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(userInfo),
  });
}

// запрос авторизации
function signinApi(userInfo: IUserSigninState) {
  return request<IUserResponse>(`${BASE_URL}/signin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(userInfo),
  });
}

export { signupApi, signinApi };
