import request from './api';

import {
  IAddBotResponse,
  IDeleteBotResponse,
  IGetBotsResponse,
  IGetTemplatesBotsResponse,
  TCreateBot,
} from '../services/types/bot';
import { getAccessToken } from '../auth/authService';

// запрос получения ботов
function getBotsApi() {
  const token = getAccessToken();
  return request<IGetBotsResponse>('bots', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
      authorization: `Bearer ${token}`,
    },
  });
}

// запрос добавления бота
function addBotApi(bot: TCreateBot, templateId: string | null) {
  const url = `bots/${templateId || ''}`;
  const token = getAccessToken();
  return request<IAddBotResponse>(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(bot),
  });
}

function deleteBotApi(id: string) {
  const url = `bots/${id || ''}`;
  const token = getAccessToken();
  return request<IDeleteBotResponse>(url, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
      authorization: `Bearer ${token}`,
    },
  });
}

// запрос получения шаблонов
function getTemplatesBotsApi(token: string) {
  return request<IGetTemplatesBotsResponse>('bots/templates', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
      authorization: `Bearer ${token}`,
    },
  });
}

export { getBotsApi, addBotApi, deleteBotApi, getTemplatesBotsApi };
