/* eslint-disable prefer-promise-reject-errors */
import { IResponse } from '../services/types/data';

type TOptions = {
  headers: { authorization?: string; 'Content-Type': string };
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

export default request;
