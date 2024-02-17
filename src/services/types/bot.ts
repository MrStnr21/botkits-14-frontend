import { TBuilderData } from './builder';

type TMessenger = {
  name: string;
  pages?: string;
  accessKey?: string;
  url?: string;
};

export type TBotPermissions = {
  botBuilder: boolean;
  dashboard: boolean;
  mailing: boolean;
  static: boolean;
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

// Типизация данных бота. Закомментированы не используемые сейчас поля
export type TBot = {
  _id: string;
  icon?: string;
  title: string;
  description?: string;
  features?: TBuilderData;
  messengers: Array<TMessenger>;
  permission: TBotPermissions;
  profile: string;
  // settings?: object;
  // commands?: Array<TypeCommands>;
  // isToPublish?: boolean;
};

// Типизация данных шаблона. Закомментированы не используемые сейчас поля
export type TBotTemplate = {
  _id: string;
  icon: string;
  title: string;
  description: string;
  features?: TBuilderData;
  isToPublish?: boolean;
  // profile?: Profile;
  // settings?: object;
  // messengers?: Array<Messenger>;
  // commands?: Array<TypeCommands>;
};

// Типизация данных для создания шаблона. Закомментированы не используемые сейчас поля
export type TBotTemplateReq = {
  title: string;
  description: string;
  icon?: string;
  features?: TBuilderData;
  settings?: Object;
  messengers?: Array<TMessenger>;
  isToPublish?: boolean;
};

// Возможно нужно заменить все на универсальный IBotResponse extends TBot {}
export interface IBotResponse extends TBot {}

export interface IAddBotResponse extends TBot {}

export interface IGetBotResponse extends TBot {}

export interface IDeleteBotResponse extends TBot {}

export interface ICopyBotResponse extends TBot {}

export interface IRenameBotResponse extends TBot {}

export interface IGetBotsResponse extends Array<TBot> {}

export interface IGetBotTemplatesResponse extends Array<TBotTemplate> {}

export interface IAddBotTemplateResponse extends TBotTemplate {}

export interface IDeleteBotTemplateResponse extends TBotTemplate {}

export interface IUpdateBotTemplateResponse extends TBotTemplate {}
