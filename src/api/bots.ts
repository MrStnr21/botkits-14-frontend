import { IResBody } from '../services/types/data';

import request from './api';

import BASE_URL from '../utils/data';

import { TBot } from '../services/types/bot';

// запрос получения ботов
function getBotsApi(token: string) {
  return request<IResBody>(`${BASE_URL}/bots`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
      // eslint-disable-next-line prefer-template
      authorization: 'Bearer ' + token,
    },
  });
}

// запрос добавления бота
function addBotApi(bot: TBot, token: string) {
  return request<IResBody>(`${BASE_URL}/bots`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
      // eslint-disable-next-line prefer-template
      authorization: 'Bearer ' + token,
    },
    body: JSON.stringify(bot),
  });
}

export { getBotsApi, addBotApi };
