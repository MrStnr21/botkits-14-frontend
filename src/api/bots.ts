import { deleteReq, getReq, patchReq, postReq } from './api';

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
function getBotsApi() {
  return getReq<IGetBotsResponse>({ uri: 'bots', auth: true });
}

// запрос добавления бота
function addBotApi(bot: TBot) {
  return postReq<IAddBotResponse>({ uri: 'bots', auth: true, data: bot });
}

// запрос получения шаблонов
function getTemplatesBotsApi() {
  return getReq<IGetTemplatesBotsResponse>({
    uri: 'bots/templates',
    auth: true,
  });
}

// запрос добавления шаблона
function addTemplatesBotsApi(botTemplates: TTemplateBot) {
  return postReq<IAddTemplatesBotsResponse>({
    uri: 'bots/template',
    auth: true,
    data: botTemplates,
  });
}

// запрос удаления шаблона
function deleteTemplatesBotsApi(id: string) {
  return deleteReq<TTemplateBotRes>({ uri: 'bots/template', id, auth: true });
}

// запрос изменения шаблона
function updateTemplatesBotsApi(botTemplates: TTemplateBotRes, id: string) {
  return patchReq<TTemplateBotRes>({
    uri: 'bots/template',
    id,
    auth: true,
    data: botTemplates,
  });
}

export {
  getBotsApi,
  addBotApi,
  getTemplatesBotsApi,
  addTemplatesBotsApi,
  deleteTemplatesBotsApi,
  updateTemplatesBotsApi,
};
