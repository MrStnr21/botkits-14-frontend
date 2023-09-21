import request from './api';

import BASE_URL from '../utils/config';

import { IBotResponse, TBot } from '../services/types/bot';

// запрос получения ботов
function getBotsApi(token: string) {
  return request<IBotResponse>(`${BASE_URL}/bots`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
      authorization: `Bearer ${token}`,
    },
  });
}

// запрос добавления бота
function addBotApi(bot: TBot, token: string) {
  return request<IBotResponse>(`${BASE_URL}/bots`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(bot),
  });
}

export { getBotsApi, addBotApi };
