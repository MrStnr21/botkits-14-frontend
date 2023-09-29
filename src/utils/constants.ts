/* eslint-disable @typescript-eslint/naming-convention */

import { MuiTelInputCountry } from 'mui-tel-input';

/* eslint-disable import/prefer-default-export */
export enum SIZE_INPUT {
  L = 556,
  M = 410,
  S = 272,
}

export const DEFAULT_PHONE_CODE: { code: string; country: MuiTelInputCountry } =
  { code: '+7', country: 'RU' };

export enum BUTTON_NAME {
  IMAGE = 'Фото',
  VIDEO = 'Видео',
  AUDIO = 'Аудио',
  BTN = 'Кнопка',
  FILE = 'Файл',
}

export const TIME_ZONE = [
  { nameValue: 'UTC-12:00', value: 'GMT-12' },
  { nameValue: 'UTC-11:00', value: 'GMT-10' },
  { nameValue: 'UTC-10:00', value: 'GMT-11' },
  { nameValue: 'UTC-9:00', value: 'GMT-9' },
  { nameValue: 'UTC-8:00', value: 'GMT-8' },
  { nameValue: 'UTC-7:00', value: 'GMT-7' },
  { nameValue: 'UTC-6:00', value: 'GMT-6' },
  { nameValue: 'UTC-5:00', value: 'GMT-5' },
  { nameValue: 'UTC-4:00', value: 'GMT-4' },
  { nameValue: 'UTC-3:00', value: 'GMT-3' },
  { nameValue: 'UTC-2:00', value: 'GMT-2' },
  { nameValue: 'UTC-1:00', value: 'GMT-1' },
  { nameValue: 'UTC-0:00', value: 'GMT-0' },
  { nameValue: 'UTC+1:00', value: 'GMT+1' },
  { nameValue: 'UTC+2:00', value: 'GMT+2' },
  { nameValue: 'UTC+3:00', value: 'GMT+3' },
  { nameValue: 'UTC+4:00', value: 'GMT+4' },
  { nameValue: 'UTC+5:00', value: 'GMT+5' },
  { nameValue: 'UTC+6:00', value: 'GMT+6' },
  { nameValue: 'UTC+7:00', value: 'GMT+7' },
  { nameValue: 'UTC+8:00', value: 'GMT+8' },
  { nameValue: 'UTC+9:00', value: 'GMT+9' },
  { nameValue: 'UTC+10:00', value: 'GMT+10' },
  { nameValue: 'UTC+11:00', value: 'GMT+11' },
  { nameValue: 'UTC+12:00', value: 'GMT+12' },
  { nameValue: 'UTC+13:00', value: 'GMT+13' },
  { nameValue: 'UTC+14:00', value: 'GMT+14' },
];

export enum POPUP_ITEM {
  COPY = 'Копировать',
  SHARE = 'Общий доступ',
  RENAME = 'Переименовать',
  INFO = 'Информация',
  NOTIFSETT = 'Настройка уведомлений',
  LINK = 'Получить ссылку',
  DEFAULT = '',
}
