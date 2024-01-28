import { getReq } from './api';
import { IGetBotResponse, IAddBotResponse } from '../services/types/bot';

// запрос получения билдера
function getBuilderApi(path: string, id: string) {
  return getReq<IGetBotResponse>({ uri: path, id, auth: true });
}

// запрос сохранения билдера
function saveBuilderApi(builder: { features: any }, path: string, id: string) {
  return getReq<IAddBotResponse>({ uri: path, id, auth: true, data: builder });
}

export { getBuilderApi, saveBuilderApi };
