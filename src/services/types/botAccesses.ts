export type TBotAccess = {
  _id: string;
  userId: string;
  botId: string;
  permission: string;
};

export interface IBotAccesses extends Array<TBotAccess> {}
