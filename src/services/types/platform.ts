// Типизация данных бота
export type TPlatform = {
  _id: string;
  icon: string;
  title: string;
  formFields: {
    name: boolean;
    pages: boolean;
    accessKey: boolean;
    url: boolean;
  };
};

export interface IGetPlatformsResponse extends Array<TPlatform> {}
