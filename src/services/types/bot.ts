// Типизация данных бота
export type TBot = {
  icon: string;
  botName: string;
  profile: string;
  messenger: {
    name: string;
    page: string;
    accessKey: string;
    url: string;
  };
  botSettings?: any;
  _id: string;
};

export interface IAddBotResponse extends TBot {}

export interface IGetBotsResponse extends Array<TBot> {}
