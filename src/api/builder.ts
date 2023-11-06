import { IBuilderDataResponse } from '../services/types/builder';

import request from './api';

// Запрос на получение данных воронки
function getBuilderDataApi(token: string) {
  return request<IBuilderDataResponse>('bot-builder', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
      authorization: `Bearer ${token}`,
    },
  });
}

export default getBuilderDataApi;
