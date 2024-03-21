import { checkRes, deleteReq, getReq, patchReq } from './api';
import { IGetBotResponse, IAddBotResponse } from '../services/types/bot';
import { getAccessToken } from '../auth/authService';

// запрос получения билдера
function getBuilderApi(path: string, id: string) {
  return getReq<IGetBotResponse>({ uri: path, id, auth: true });
}

// запрос сохранения билдера
function saveBuilderApi(builder: { features: any }, path: string, id: string) {
  return patchReq<IAddBotResponse>({
    uri: path,
    id,
    auth: true,
    data: builder,
  });
}

function saveFile(path: string, file: File) {
  const formData = new FormData();
  formData.append(`files[]`, file);
  return fetch(path, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${getAccessToken() || ''}`,
    },
    body: formData,
  }).then(checkRes);
}

function getFile(path: string) {
  return fetch(path, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${getAccessToken() || ''}`,
    },
  }).then((res) => {
    if (!res.ok) {
      throw new Error('Ошибка при получении файла');
    }
    return res.blob();
  });
}

function removeFileApi(path: string) {
  return deleteReq({
    uri: path,
    auth: true,
  });
}

export { getBuilderApi, saveBuilderApi, saveFile, getFile, removeFileApi };
