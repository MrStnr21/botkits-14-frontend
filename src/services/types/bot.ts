export type TMessenger = {
  name: string;
  pages: Array<string>;
  accessKey: string;
  url: string;
};

export type TCreateBot = {
  title: string;
  messengers?: Array<TMessenger>;
};

// Типизация данных бота
export type TBot = {
  type: string;
  icon?: string;
  title: string;
  description: string;
  features: Array<Object>;
  profile: string;
  messengers: Array<TMessenger>;
  commands: Array<string>;
  content: Array<Object>;
  isToPublish: boolean;
  _id: string;
  success: boolean;
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

export interface IAddBotResponse extends TBot {}
export interface IDeleteBotResponse extends TBot {}

export interface IGetBotsResponse extends Array<TBot> {}

export interface IGetTemplatesBotsResponse extends Array<TTemplateBot> {}
