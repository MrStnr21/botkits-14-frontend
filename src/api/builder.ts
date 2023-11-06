import {
  IBuildersDataResponse,
  IAddBuilderDataResponse,
  TBuilderData,
} from '../services/types/builder';

import request from './api';

// Запрос на получение данных воронки
function getBuildersDataApi(token: string) {
  return request<IBuildersDataResponse>('bot-builder', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
      authorization: `Bearer ${token}`,
    },
  });
}

// // запрос добавления данных
function addBuilderDataApi(dataBuilder: TBuilderData, token: string) {
  return request<IAddBuilderDataResponse>('bot-builder', {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(dataBuilder),
  });
}

export { getBuildersDataApi, addBuilderDataApi };
