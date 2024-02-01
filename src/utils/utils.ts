/* eslint-disable import/prefer-default-export */

import { Descendant, Node } from 'slate';
import { saveSocial } from '../auth/authService';
import { AUTH_URL_M, AUTH_URL_Y, AUTH_URL_V, AUTH_URL_G } from './config';

/**
 * Принимает размер файла в байтах и возвращает результат в B, KB, MB
 * @param byte кол-во байт
 * @returns округленный до десятых результат в B, KB, MB
 */
export const sizeFormated = (byte: number) => {
  if (byte < 1024) {
    return `${String(Math.round(byte * 10) / 10)}B`;
  }
  const result = Math.round(byte / 1024);
  if (result > 1024) {
    return `${String(Math.round((result / 1024) * 10) / 10)}MB`;
  }
  return `${String(Math.round(result * 10) / 10)}KB`;
};

/**
 * Перенаправляем пользователя на страницу авторизации Яндекса для авторизации
 */
export const handlerAuthYandex = () => {
  saveSocial('yandex/exchange');
  window.location.href = AUTH_URL_Y!;
};

/**
 * Перенаправляем пользователя на страницу авторизации MailRu для авторизации
 */
export const handlerAuthMailru = () => {
  saveSocial('mailru/exchange');
  window.location.href = AUTH_URL_M!;
};

/**
 * Перенаправляем пользователя на страницу авторизации VK для авторизации
 */
export const handlerAuthVkontakte = () => {
  window.location.href = AUTH_URL_V!;
};

/**
 * Перенаправляем пользователя на страницу авторизации Google для авторизации
 */
export const handlerAuthGoogle = () => {
  window.location.href = AUTH_URL_G!;
};

export const createUrlBuilder = (path: string, id: string) => {
  // Перенаправляем пользователя на страницу Builder по ID шаблона бота
  return `/${path}?id=${id}&type=template`;
};

export const slateSerialize = (nodes: Descendant[]) => {
  return nodes.map((n) => Node.string(n)).join('\n');
};
