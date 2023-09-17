import { IUserResponse, TUser } from '../services/types/data';
import request from './api';
import BASE_URL from '../utils/data';

// запрос регистрации
function signupApi(userInfo: TUser) {
  return request<IUserResponse>(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(userInfo),
  });
}

// запрос авторизации
function signinApi(userInfo: TUser) {
  return request<IUserResponse>(`${BASE_URL}/signin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(userInfo),
  });
}

export { signupApi, signinApi };
