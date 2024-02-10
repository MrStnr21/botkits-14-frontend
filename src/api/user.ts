import { IUserResponse } from '../services/types/user';

import { getReq, postReq } from './api';

// Запрос на получение данных пользователя
function getUserInfoApi() {
  return getReq<IUserResponse>({ uri: 'profiles/me', auth: true });
}

// Запрос выдачи доступа к ботам по email
function shareBotApi(email: string) {
  return postReq<{}>({
    uri: `profiles/shared`,
    auth: true,
    data: { email },
  });
}
export { getUserInfoApi, shareBotApi };
