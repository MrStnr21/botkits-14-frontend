import {
  IUserResponse,
  IUserSigninState,
  IUserSignupState,
  IUserLogoutResponse,
  IUserResetPasswordState,
  IUserResetPasswordResponse,
} from '../services/types/user';

import { getReq, postReq } from './api';

// запрос регистрации
function signupApi(userInfo: IUserSignupState) {
  return postReq<IUserResponse>({ uri: 'signup', data: userInfo });
}

// запрос авторизации
function signinApi(userInfo: IUserSigninState) {
  return postReq<IUserResponse>({ uri: 'signin', data: userInfo });
}

// Запрос на выход из аккаунта
function logoutApi() {
  return getReq<IUserLogoutResponse>({ uri: 'logout', auth: true });
}

// Запрос на сброс пароля
function resetPasswordApi(userInfo: IUserResetPasswordState) {
  return postReq<IUserResetPasswordResponse>({
    uri: 'reset-password',
    data: userInfo,
  });
}

function socialAuth(code: string, social: string) {
  return postReq({ uri: social, data: { codeAuth: code } });
}

export { signupApi, signinApi, logoutApi, resetPasswordApi, socialAuth };
