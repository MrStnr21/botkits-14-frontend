import { IUserResponse } from '../services/types/user';

import { getReq } from './api';

// Запрос на получение данных пользователя
function getUserInfoApi() {
  return getReq<IUserResponse>({ uri: 'profiles/me', auth: true });
}

export default getUserInfoApi;
