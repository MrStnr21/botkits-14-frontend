import { IUserResponse } from '../services/types/user';

import { deleteReq, getReq, postReq } from './api';

type TUser = {
  [key: string]: any;
};

// Запрос на получение данных пользователя
function getUserInfoApi() {
  return getReq<IUserResponse>({ uri: 'profiles/me', auth: true });
}

function getUsersInfo() {
  return getReq<TUser[]>({ uri: 'profiles', auth: true });
}

function removeUser(id: string) {
  return deleteReq({ uri: `profiles/${id}`, auth: true });
}

// Запрос выдачи доступа к ботам по email
function shareBotApi(email: string) {
  return postReq<{}>({
    uri: `profiles/shared`,
    auth: true,
    data: { email },
  });
}

export { getUserInfoApi, getUsersInfo, removeUser, shareBotApi };
