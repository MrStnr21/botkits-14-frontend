import request from './api';

import {
  IAddBotResponse,
  IGetBotsResponse,
  IGetTemplatesBotsResponse,
  IAddTemplatesBotsResponse,
  TBot,
  TTemplateBot,
  TTemplateBotRes,
} from '../services/types/bot';

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

// запрос добавления шаблона
function addTemplatesBotsApi(botTemplates: TTemplateBot, token: string | null) {
  return request<IAddTemplatesBotsResponse>('bots/template', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(botTemplates),
  });
}

function deleteTemplatesBotsApi(id: string, token: string | null) {
  return request<TTemplateBotRes>(`bots/template/${id}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(id),
  });
}

export {
  getBotsApi,
  addBotApi,
  getTemplatesBotsApi,
  addTemplatesBotsApi,
  deleteTemplatesBotsApi,
};
