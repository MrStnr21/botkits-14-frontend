import { getReq } from './api';

import { IGetPlatformsResponse } from '../services/types/platform';

// запрос получения платформ
function getPlatformsApi() {
  return getReq<IGetPlatformsResponse>({ uri: 'platforms', auth: true });
}

export default getPlatformsApi;
