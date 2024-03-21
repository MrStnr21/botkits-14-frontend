import { MessageDataTypes } from '../../../services/types/builder';
import { baseSlateData } from '../../../utils/constants';
import { Option } from '../../../utils/types';

export enum ButtonSizes {
  startX = 32,
  firstY = 244,
  secondY = 446,
  blockGap = 74,
  addString = 16,
  buttonHeight = 40,
  gap = 12,
}

export enum ButtonSizesMobile {
  startX = ButtonSizes.startX * 0.5,
  firstY = 155,
  secondY = 289,
  blockGap = 43,
  addString = 8,
  buttonHeight = 27,
  gap = 12,
}

export const rangeForCoordinates = {
  longitude: { min: -180, max: 180 },
  latitude: { min: -90, max: 90 },
};

export const crmList = [
  { value: '1', nameValue: 'CRM 1' },
  { value: '2', nameValue: 'CRM 2' },
  { value: '3', nameValue: 'CRM 3' },
];

export const saveOptions = [
  { value: 'new', nameValue: 'Новая запись' },
  { value: 'suppl', nameValue: 'Дополнить запись' },
];

export const selectValuesType = [
  { value: 'random', label: 'Случайное' },
  { value: 'static', label: 'Статичное' },
  { value: 'variable', label: 'Переменная' },
  { value: 'JS', label: 'JavaScript' },
  { value: 'CRM', label: 'CRM' },
];

export const signSelectValues: Option[] = [
  {
    icon: 'equal',
    value: 'eq',
    label: 'Равно',
  },
  {
    icon: 'equalNot',
    value: 'neq',
    label: 'Не равно',
  },
  {
    icon: 'more',
    value: 'more',
    label: 'Больше',
  },
  {
    icon: 'moreOrEqual',
    value: 'moreeq',
    label: 'Больше или равно',
  },
  {
    icon: 'less',
    value: 'less',
    label: 'Меньше',
  },
  {
    icon: 'lessOrEqual',
    value: 'lesseq',
    label: 'Меньше или равно',
  },
  {
    icon: 'equalWithoutCase',
    value: 'eqnoreg',
    label: 'Равно (без учёта регистра)',
  },
  {
    icon: 'inLineWithoutCase',
    value: 'instrnoreg',
    label: 'Входит в строку (без учёта регистра)',
  },
  {
    icon: 'inLine',
    value: 'instr',
    label: 'Входит в строку',
  },
  {
    icon: 'notInLineWithoutCase',
    value: 'notinstrnoreg',
    label: 'Не входит в строку (без учёта регистра)',
  },
  {
    icon: 'notInLine',
    value: 'notinstr',
    label: 'Не входит в строку',
  },
];

export const currencyAvailable = [
  { value: 'Рубль', label: 'RUB' },
  { value: 'Евро', label: 'EUR' },
  { value: 'Доллары США', label: 'USD' },
];

export const blocks = [
  { value: 'message', label: 'Блок сообщений' },
  { value: 'api', label: 'API' },
  { value: 'conditional', label: 'Условный блок' },
  { value: 'coordinate', label: 'Отправка координат' },
  { value: 'telegramPay', label: 'Оплата в Telegram' },
  { value: 'deeplink', label: 'Deep Link' },
  { value: 'crm', label: 'Сохранение в CRM' },
  { value: 'operator', label: 'Перевод на оператора' },
  { value: 'variable', label: 'Управление переменными' },
];

export const defaultBlocks = {
  message: {
    name: 'message',
    data: [
      { type: MessageDataTypes.message, value: baseSlateData },
      { type: MessageDataTypes.buttons, verButtons: [], horButtons: [] },
      { type: MessageDataTypes.answers, verButtons: [], horButtons: [] },
    ],
    showTime: {
      show: true,
      value: 0,
    },
    saveAnswer: {
      show: true,
      value: '',
    },
  },
  api: {
    name: 'api',
    url: '',
    reqType: '',
    headers: [],
    params: [],
    variables: [],
  },
  conditional: {
    name: 'Conditional',
    variables: [],
  },
  coordinate: {
    name: 'Coordinates',
    coordinates: [],
  },
  telegramPay: {
    name: 'TelegramPay',
    goodsName: '',
    data: [],
    description: '',
    payment: '',
    currency: '',
    providerToken: '',
    onSuccess: '',
  },
  deeplink: {
    name: 'Deeplink',
    param: '',
    type: selectValuesType[0].value,
    signsAmount: 8,
    additionValue: '',
    additionLink: '',
  },
  crm: {
    name: 'CRMBlock',
    crmList: ['1', '2', '3'],
    chosenCrm: '',
    saveAsList: ['new', 'suppl'],
    chosenSaveAs: '',
  },
  operator: {
    name: 'Operator call',
  },
  variable: {
    name: 'Variable Block',
    variables: [],
  },
};

export const coordinateRegExp = /^-?\d*[.,]?\d*$/;

export default {};

/* export const messagesSuccessfulPayment = [
  { value: 'Полное сообщение', nameValue: 'Оплата прошла успешно' },
  { value: 'Короткое сообщение', nameValue: 'Ok!' },
  { value: 'Формальное сообщение', nameValue: 'Оплачено' },
  { value: 'Общее сообщение', nameValue: 'успешно' },
];

export const messagesSuccessful = [
  { value: 'По умолчанию', nameValue: 'Введите название' },
  { value: 'Полное сообщение', nameValue: 'Оплата прошла успешно' },
  { value: 'Короткое сообщение', nameValue: 'Ok!' },
  { value: 'Формальное сообщение', nameValue: 'Оплачено' },
  { value: 'Общее сообщение', nameValue: 'Успешно' },
]; */
