// типизация запросов api
export interface IResponse<T> extends Response {
  json(): Promise<T>;
}

export type TResponseError = [string, Promise<unknown>];
