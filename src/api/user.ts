import { IUserResponse } from '../services/types/user';

import { deleteReq, getReq } from './api';

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

export { getUserInfoApi, getUsersInfo, removeUser };
