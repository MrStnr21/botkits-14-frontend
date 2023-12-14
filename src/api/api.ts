/* eslint-disable prefer-promise-reject-errors */
import { IResponse } from '../services/types/response';
import { BASE_URL } from '../utils/config';

type TOptions = {
  headers: { authorization?: string; 'Content-Type': string };
  method?: string;
  body?: string;
};

/**
 * @template T
 * @param {IResponse<T>} res объект с полученным от сервера ответом. Должен иметь метод .json()
 * @returns {(Promise<T> | Promise<never>)} промис с парсированным объектом response или Promise.reject([`Ошибка ${res.status}`, res.json()])
 */
function checkRes<T>(res: IResponse<T>): Promise<T> | Promise<never> {
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
  return fetch(`${BASE_URL}/${url}`, options).then(checkRes);
}

export default request;
