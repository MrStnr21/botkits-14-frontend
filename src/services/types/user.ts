// типизация данных пользователя
export type TUser = {
  username: string;
  phone: string;
  avatar: string;
  balance: number;
  accounts: [
    {
      type: string;
      role: string;
      credentials: {
        email: string;
        accessToken: string;
        refreshToken: string;
      };
      profile: string;
      _id: string;
    },
  ];
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

export interface IUserResetPasswordState {
  email: string;
}

export interface IUserResponse extends TUser {}
