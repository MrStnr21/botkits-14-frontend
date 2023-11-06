// типизация данных пользователя
export type TUser = {
  credentials: {
    email: string;
    accessToken: string;
    refreshToken: string;
  };
  profile: {
    avatar: string;
    balance: number;
    phone: string;
    username: string;
    _id: string;
  };
  role: string;
  type: string;
  _id: string;
};

export interface IUserSignupState {
  password: string;
  email: string;
  phone: string;
  username: string;
}

export interface IUserSigninState {
  password: string;
  email: string;
}

export interface IUserLogoutResponse {
  message: string;
}

export interface IUserResetPasswordResponse {
  message: string;
}

export interface IUserResetPasswordState {
  email: string;
}

// eslint-disable-next-line prettier/prettier
export interface IUserResponse extends TUser { }

export interface IUserAuthError {
  message: string;
  error: string;
  statusCode: number;
}
