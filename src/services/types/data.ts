// типизация запросов api
export interface IResponse<T> extends Response {
  json(): Promise<T>;
}

// типизация данных пользователя
export type TUser = any;

export interface IUserState {
  user: TUser;
}

// типизация запроса
export interface IResBody {
  status: string;
}

export interface IUserResponse extends IResBody {
  user: TUser;
}
