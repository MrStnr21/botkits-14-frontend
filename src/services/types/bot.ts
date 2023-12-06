// Типизация данных бота
export type TBot = {
  type: string;
  icon?: string;
  title: string;
  description: string;
  features: Array<Object>;
  profile: string;
  messengers: Array<{
    name: string;
    page: string;
    accessKey: string;
    url: string;
  }>;
  commands: Array<string>;
  content: Array<Object>;
  isToPublish: boolean;
  _id: string;
  success: boolean;
};

// Типизация данных шаблона - ToDo Это Типизация Res TemplateBot - Не корректное название
export type TTemplateBotRes = {
  _id: string;
  type: 'template';
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
  type: string;
  title: string;
  description: string;
  icon?: string;
  features?: Array<Object>;
  settings?: Object;
  messengers?: Array<Object>;
  isToPublish?: boolean;
};

export interface IAddBotResponse extends TBot {}

export interface IGetBotsResponse extends Array<TBot> {}

export interface IGetTemplatesBotsResponse extends Array<TTemplateBotRes> {}
