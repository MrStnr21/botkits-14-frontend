/* eslint-disable prefer-promise-reject-errors */
import { IResponse, IUserResponse, TUser } from '../services/types/data';
import BASE_URL from './data';

type TOptions = {
  headers: { token?: string; 'Content-Type': string };
  method?: string;
  body?: string;
};

// шаблон запроса
function checkRes<T>(res: IResponse<T>): Promise<T> | Promise<never> {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject([`Ошибка ${res.status}`, res.json()]);
}

function request<T>(url: string, options: TOptions): Promise<T> {
  return fetch(url, options).then(checkRes);
}

// отправляем пользователя на севрер
function signupApi(userInfo: TUser) {
  return request<IUserResponse>(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify({
      userInfo,
    }),
  });
}

export default signupApi;
