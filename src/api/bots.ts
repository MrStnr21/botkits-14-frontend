import { deleteReq, getReq, patchReq, postReq } from './api';

import {
  TBot,
  IAddBotResponse,
  IGetBotsResponse,
  TBotTemplateReq,
  IGetBotTemplatesResponse,
  IAddBotTemplateResponse,
  IDeleteBotTemplateResponse,
  IUpdateBotTemplateResponse,
  IDeleteBotResponse,
  ICopyBotResponse,
  IRenameBotResponse,
} from '../services/types/bot';

// запрос получения ботов
function getBotsApi() {
  return getReq<IGetBotsResponse>({ uri: 'bots', auth: true });
}

// запрос добавления бота
function addBotApi(bot: TBot, templateId: string | null) {
  return postReq<IAddBotResponse>({
    uri: templateId ? `bots/${templateId}` : 'bots',
    auth: true,
    data: bot,
  });
}

// запрос удаления бота
function deleteBotApi(id: string) {
  return deleteReq<IDeleteBotResponse>({
    uri: `bots`,
    id,
    auth: true,
  });
}

// запрос копирования бота
function copyBotApi(id: string) {
  return postReq<ICopyBotResponse>({
    uri: `bots/copy`,
    id,
    auth: true,
  });
}

// запрос переименования бота
function renameBotApi(id: string, title: string) {
  return patchReq<IRenameBotResponse>({
    uri: `bots`,
    id,
    auth: true,
    data: { title },
  });
}

// запрос получения шаблонов
function getBotTemplatesApi() {
  return getReq<IGetBotTemplatesResponse>({
    uri: 'bots/templates',
    auth: true,
  });
}

// запрос добавления шаблона
function addBotTemplateApi(botTemplate: TBotTemplateReq) {
  return postReq<IAddBotTemplateResponse>({
    uri: 'bots/template',
    auth: true,
    data: botTemplate,
  });
}

// запрос удаления шаблона
function deleteBotTemplateApi(id: string) {
  return deleteReq<IDeleteBotTemplateResponse>({
    uri: 'bots/template',
    id,
    auth: true,
  });
}

// запрос изменения шаблона
function updateBotTemplateApi(botTemplate: TBotTemplateReq, id: string) {
  return patchReq<IUpdateBotTemplateResponse>({
    uri: 'bots/template',
    id,
    auth: true,
    data: botTemplate,
  });
}

export {
  getBotsApi,
  addBotApi,
  deleteBotApi,
  copyBotApi,
  renameBotApi,
  getBotTemplatesApi,
  addBotTemplateApi,
  deleteBotTemplateApi,
  updateBotTemplateApi,
};
