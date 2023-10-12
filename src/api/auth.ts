import {
  IUserResponse,
  IUserSigninState,
  IUserSignupState,
  IUserLogoutResponse,
  IUserResetPasswordState,
  IUserResetPasswordResponse,
} from '../services/types/user';

import request from './api';

// запрос регистрации
function signupApi(userInfo: IUserSignupState) {
  return request<IUserResponse>('signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(userInfo),
  });
}

// запрос авторизации
function signinApi(userInfo: IUserSigninState) {
  return request<IUserResponse>('signin', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(userInfo),
  });
}

// Запрос на выход из аккаунта
function logoutApi(token: string) {
  return request<IUserLogoutResponse>('logout', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
      authorization: `Bearer ${token}`,
    },
  });
}

// Запрос на сброс пароля
function resetPasswordApi(userInfo: IUserResetPasswordState) {
  return request<IUserResetPasswordResponse>('reset-password', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(userInfo),
  });
}

export { signupApi, signinApi, logoutApi, resetPasswordApi };
