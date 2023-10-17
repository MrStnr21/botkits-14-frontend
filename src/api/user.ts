import { IUserResponse } from '../services/types/user';

import request from './api';

// Запрос на получение данных пользователя
function getUserInfoApi(token: string) {
  return request<IUserResponse>('profiles/me', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
      authorization: `Bearer ${token}`,
    },
  });
}

export default getUserInfoApi;
