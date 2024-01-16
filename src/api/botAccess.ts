/* eslint-disable @typescript-eslint/no-unused-vars */
import { IBotAccesses } from '../services/types/botAccesses';
import { deleteReq, getReq, patchReq, postReq } from './api';

// описать типы и импортировать их здесь

// Запрос для создания доступа к боту
export function createBotAccessApi(data: any) {
  return postReq({
    uri: 'bot-accesses',
    auth: true,
    data,
  });
}

// Запрос для получения всех доступов к боту
export function getAllBotAccessesApi() {
  return getReq<IBotAccesses>({ uri: 'bot-accesses', auth: true });
}
