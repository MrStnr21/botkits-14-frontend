import request from './api';

import { IGetPlatformsResponse } from '../services/types/platform';

// запрос получения платформ
function getPlatformsApi(token: string) {
  return request<IGetPlatformsResponse>('platforms', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
      authorization: `Bearer ${token}`,
    },
  });
}

export default getPlatformsApi;
