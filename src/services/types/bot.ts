// import { Profile } from "./user";
import { TBuilderData } from './builder';

type TMessenger = {
  name: string;
  pages?: string;
  accessKey?: string;
  url?: string;
};

/* Для будущего использования
enum TypeCommands {
  COPY_BOT = '/copy',
  SHARE_BOT = '/share',
  RENAME_BOT = '/rename',
  GET_INFO = '/info',
  NOTIFY_SETTINGS = '/notify',
  DELETE_BOT = '/delete',
}
*/

// Типизация данных бота
export type TBot = {
  _id: string;
  icon?: string;
  title: string;
  description?: string;
  features?: TBuilderData;
  messengers: Array<TMessenger>;
  // profile?: Profile;
  // settings?: object;
  // commands?: Array<TypeCommands>;
  // isToPublish?: boolean;
};

// Типизация данных шаблона - ToDo Это Типизация Res TemplateBot - Не корректное название
export type TTemplateBotRes = {
  _id: string;
  type: string;
  title: string;
  description: string;
  icon: string;
  messengers?: [];
  profile: null;
  features?: Array<Object>;
  commands?: Array<string>;
  content?: Array<Object>;
  isToPublish?: boolean;
  success: boolean;
};

export type TTemplateBot = {
  title: string;
  description: string;
  icon?: string;
  features?: Array<Object>;
  settings?: Object;
  messengers?: Array<Object>;
  isToPublish?: boolean;
};

export interface IAddBotResponse extends TBot {}

export interface IGetBotResponse extends TBot {}

export interface IGetBotsResponse extends Array<TBot> {}

export interface IGetTemplatesBotsResponse extends Array<TTemplateBotRes> {}

export interface IAddTemplatesBotsResponse extends TTemplateBotRes {}

export interface IDeleteTemplatesBotsResponse extends TTemplateBotRes {}

export interface IUpdateTemplatesBotsResponse extends TTemplateBotRes {}
