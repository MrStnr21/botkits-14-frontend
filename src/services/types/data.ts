// типизация запросов api
export interface IResponse<T> extends Response {
  json(): Promise<T>;
}

export interface IResBody {
  status: string;
}
