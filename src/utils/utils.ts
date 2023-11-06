/* eslint-disable import/prefer-default-export */

import { saveSocial } from '../auth/authService';
import { AUTH_URL } from './constants';

// Принимает размер файла в байтах и возвращает округленный до десятых результат в B, KB, MB
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

export const handlerAuthYandex = () => {
  saveSocial('yandex/exchange');
  // Перенаправляем пользователя на страницу авторизации Яндекса
  window.location.href = AUTH_URL.yandex;
};

export const handlerAuthMailru = () => {
  saveSocial('mailru/exchange');
  // Перенаправляем пользователя на страницу авторизации MailRu
  window.location.href = AUTH_URL.mailru;
};

export const handlerAuthVkontakte = () => {
  // Перенаправляем пользователя на страницу авторизации Яндекса
  window.location.href = AUTH_URL.vk;
};

export const handlerAuthGoogle = () => {
  // Перенаправляем пользователя на страницу авторизации Яндекса
  window.location.href = AUTH_URL.google;
};
