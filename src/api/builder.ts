import { getReq } from './api';
import { IGetBotsResponse, IAddBotResponse } from '../services/types/bot';

// запрос получения билдера
function getBuilderApi(path: string, id: string | null) {
  return getReq<IGetBotsResponse>({ uri: path, id, auth: true });
}

// запрос сохранения билдера
function saveBuilderApi(
  builder: { features: any },
  path: string,
  id: string | null
) {
  return getReq<IAddBotResponse>({ uri: path, id, auth: true, data: builder });
}

export { getBuilderApi, saveBuilderApi };
