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
};

export interface IBotResponse extends TBot {}
