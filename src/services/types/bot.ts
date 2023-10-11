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

export interface IAddBotResponse extends TBot {}

export interface IGetBotsResponse extends Array<TBot> {}
