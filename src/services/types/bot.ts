/* eslint-disable prettier/prettier */
// Типизация данных бота
export type TBot = {
  icon: string;
  title: string;
  profile: string;
  messengers: Array<{
    name: string;
    page: string;
    accessKey: string;
    url: string;
  }>;
  botSettings?: any;
  _id: string;
};

// Типизация данных шаблона
export type TTemplateBot = {
  _id: string;
  type: 'template';
  title: string;
  description: string;
  icon: string;
  messengers: [];
  profile: null;
  features: [];
  commands: Array<string>;
};

export interface IAddBotResponse extends TBot { }

export interface IGetBotsResponse extends Array<TBot> { }

export interface IGetTemplatesBotsResponse extends Array<TTemplateBot> { }
