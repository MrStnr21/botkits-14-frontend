import request from './api';

import { IAddBotResponse, IGetBotsResponse, TBot } from '../services/types/bot';

// запрос получения ботов
function getBotsApi(token: string) {
  return request<IGetBotsResponse>('bots', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
      authorization: `Bearer ${token}`,
    },
  });
}

// запрос добавления бота
function addBotApi(bot: TBot, token: string) {
  return request<IAddBotResponse>('bots', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(bot),
  });
}

export { getBotsApi, addBotApi };
