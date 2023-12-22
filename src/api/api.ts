/* eslint-disable prefer-promise-reject-errors */
import { getAccessToken } from '../auth/authService';
import { IResponse } from '../services/types/response';
import { BASE_URL } from '../utils/config';

type TOptions = {
  headers?: { authorization?: string; 'Content-Type': string };
  method?: string;
  body?: string;
};

type TReq = {
  uri: string;
  auth?: boolean;
  data?: any;
  id?: string;
  method?: 'GET' | 'POST' | 'PATCH' | 'DELETE';
};

const BASE_PARAMS = {
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
  },
};

function getReqParams({ uri, id, method, data, auth }: TReq) {
  const params: TOptions = {
    ...BASE_PARAMS,
    method,
  };
  const path = `${BASE_URL}/${uri}${id ? `/${id}` : ''}`;
  if (auth) {
    params.headers!.authorization = `Bearer ${getAccessToken() || ''}`;
  }
  if (data) {
    params.body = JSON.stringify(data);
  }
  return { path, params };
}

/**
 * @template T
 * @param {IResponse<T>} res объект с полученным от сервера ответом. Должен иметь метод .json()
 * @returns {(Promise<T> | Promise<never>)} промис с парсированным объектом response или Promise.reject([`Ошибка ${res.status}`, res.json()])
 */
export function checkRes<T>(res: IResponse<T>): Promise<T> | Promise<never> {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject([`Ошибка ${res.status}`, res.json()]);
}

/**
 * @template T
 * @param {string} url добавачная строка `${BASE_URL}/${url}`
 * @param {TOptions} options объект настроек для fetch-запроса
 * @returns {Promise<T>} {(Promise<T> | Promise<never>)} промис с парсированным объектом response или `Promise.reject([Ошибка ${res.status}, res.json()])`
 */
function request<T>(url: string, options: TOptions): Promise<T> {
  return fetch(url, options).then(checkRes);
}

export function getReq<T>(options: TReq) {
  const { path, params } = getReqParams({ ...options, method: 'GET' });
  return request<T>(path, params);
}

export function postReq<T>(options: TReq) {
  const { path, params } = getReqParams({ ...options, method: 'POST' });
  return request<T>(path, params);
}

export function patchReq<T>(options: TReq) {
  const { path, params } = getReqParams({ ...options, method: 'PATCH' });
  return request<T>(path, params);
}

export function deleteReq<T>(options: TReq) {
  const { path, params } = getReqParams({ ...options, method: 'DELETE' });
  return request<T>(path, params);
}

export default {
  patchReq,
  postReq,
  getReq,
};
