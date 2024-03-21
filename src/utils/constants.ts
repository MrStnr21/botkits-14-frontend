/* eslint-disable @typescript-eslint/naming-convention */

import { MuiTelInputCountry } from 'mui-tel-input';
import { Option } from './types';

/* eslint-disable import/prefer-default-export */
export enum SIZE_INPUT {
  L = 556,
  M = 410,
  S = 272,
}

export const DEFAULT_PHONE_CODE: { code: string; country: MuiTelInputCountry } =
  { code: '+7', country: 'RU' };

// Список отображаемых телефонных кодов стран, если оставить пустой массив, то будут все страны отображаться
export const COUNTRY_COD_LIST: MuiTelInputCountry[] = [
  'AM',
  'AZ',
  'BY',
  'KZ',
  'KG',
  'MD',
  'RU',
  'TJ',
  'TM',
  'UZ',
];

export enum BUTTON_NAME {
  IMAGE = 'Фото',
  VIDEO = 'Видео',
  AUDIO = 'Аудио',
  BTN = 'Кнопка',
  FILE = 'Файл',
}

export const TIME_ZONE: Option[] = [
  { label: 'UTC-12:00', value: 'GMT-12' },
  { label: 'UTC-11:00', value: 'GMT-10' },
  { label: 'UTC-10:00', value: 'GMT-11' },
  { label: 'UTC-9:00', value: 'GMT-9' },
  { label: 'UTC-8:00', value: 'GMT-8' },
  { label: 'UTC-7:00', value: 'GMT-7' },
  { label: 'UTC-6:00', value: 'GMT-6' },
  { label: 'UTC-5:00', value: 'GMT-5' },
  { label: 'UTC-4:00', value: 'GMT-4' },
  { label: 'UTC-3:00', value: 'GMT-3' },
  { label: 'UTC-2:00', value: 'GMT-2' },
  { label: 'UTC-1:00', value: 'GMT-1' },
  { label: 'UTC-0:00', value: 'GMT-0' },
  { label: 'UTC+1:00', value: 'GMT+1' },
  { label: 'UTC+2:00', value: 'GMT+2' },
  { label: 'UTC+3:00', value: 'GMT+3' },
  { label: 'UTC+4:00', value: 'GMT+4' },
  { label: 'UTC+5:00', value: 'GMT+5' },
  { label: 'UTC+6:00', value: 'GMT+6' },
  { label: 'UTC+7:00', value: 'GMT+7' },
  { label: 'UTC+8:00', value: 'GMT+8' },
  { label: 'UTC+9:00', value: 'GMT+9' },
  { label: 'UTC+10:00', value: 'GMT+10' },
  { label: 'UTC+11:00', value: 'GMT+11' },
  { label: 'UTC+12:00', value: 'GMT+12' },
  { label: 'UTC+13:00', value: 'GMT+13' },
  { label: 'UTC+14:00', value: 'GMT+14' },
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

export const baseSlateData = [
  {
    type: 'paragraph',
    children: [{ text: '' }],
  },
];
