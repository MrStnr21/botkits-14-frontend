// типизация запросов api
export interface IResponse<T> extends Response {
  json(): Promise<T>;
}

export interface IResBody {
  status: string;
}

// типизация роутов
export type TRoutesUrl = {
  readonly [name: string]: string;
};
