import request from './api';
import { IGetBotsResponse, IAddBotResponse } from '../services/types/bot';
import { TBuilder } from '../services/types/builder';

// запрос получения билдера
function getBuilderApi(
  token: string,
  path: '' | 'bots' | 'bots/template',
  id: string | null
) {
  return request<IGetBotsResponse>(`${path}/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
      authorization: `Bearer ${token}`,
    },
  });
}

// запрос сохранения билдера
function saveBuilderApi(
  builder: TBuilder,
  token: string,
  path: '' | 'bots' | 'bots/templates',
  id: string | null
) {
  return request<IAddBotResponse>(
    `https://botkits.nomoreparties.co/dev/api/${path}/${id}`,
    {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(builder),
    }
  );
}

export { getBuilderApi, saveBuilderApi };
