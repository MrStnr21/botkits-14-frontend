import equalImage from '../../../images/icon/24x24/variables/equal.svg';
import notEqualImage from '../../../images/icon/24x24/variables/equal-not.svg';
import noCaseEqualImage from '../../../images/icon/24x24/variables/equal without case.svg';
import inLineNoCaseImage from '../../../images/icon/24x24/variables/in line without case.svg';
import inLineImage from '../../../images/icon/24x24/variables/in line.svg';
import lessOrEqualImage from '../../../images/icon/24x24/variables/less or equal.svg';
import lessImage from '../../../images/icon/24x24/variables/less.svg';
import moreOrEqualImage from '../../../images/icon/24x24/variables/more or equal.svg';
import moreImage from '../../../images/icon/24x24/variables/more.svg';
import notInLineWithoutCaseImage from '../../../images/icon/24x24/variables/not in line without case.svg';
import notInLineImage from '../../../images/icon/24x24/variables/not in line.svg';
import { MessageDataTypes } from '../../../services/types/builder';
import { baseSlateData } from '../../../utils/constants';

export enum ButtonSizes {
  startX = 32,
  firstY = 244,
  secondY = 452,
  blockGap = 86,
  addString = 16,
  buttonHeight = 40,
  gap = 12,
}

export enum ButtonSizesMobile {
  startX = ButtonSizes.startX * 0.5,
  firstY = 155,
  secondY = 295,
  blockGap = 55,
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

export const selectValues = [
  { value: '1', label: '1' },
  { value: '2', label: '2' },
  { value: '3', label: '3' },
];

export const selectValuesType = [
  { value: 'random', label: 'Случайное' },
  { value: 'static', label: 'Статичное' },
  { value: 'variable', label: 'Переменная' },
  { value: 'JS', label: 'JavaScript' },
  { value: 'CRM', label: 'CRM' },
];

export const signSelectValues = [
  {
    icon: equalImage,
    value: 'eq',
    label: 'Равно',
  },
  {
    icon: notEqualImage,
    value: 'neq',
    label: 'Не равно',
  },
  {
    icon: moreImage,
    value: 'more',
    label: 'Больше',
  },
  {
    icon: moreOrEqualImage,
    value: 'moreeq',
    label: 'Больше или равно',
  },
  {
    icon: lessImage,
    value: 'less',
    label: 'Меньше',
  },
  {
    icon: lessOrEqualImage,
    value: 'lesseq',
    label: 'Меньше или равно',
  },
  {
    icon: noCaseEqualImage,
    value: 'eqnoreg',
    label: 'Равно (без учёта регистра)',
  },
  {
    icon: inLineNoCaseImage,
    value: 'instrnoreg',
    label: 'Входит в строку (без учёта регистра)',
  },
  {
    icon: inLineImage,
    value: 'instr',
    label: 'Входит в строку',
  },
  {
    icon: notInLineWithoutCaseImage,
    value: 'notinstrnoreg',
    label: 'Не входит в строку (без учёта регистра)',
  },
  {
    icon: notInLineImage,
    value: 'notinstr',
    label: 'Не входит в строку',
  },
];

export const currencyAvailable = [
  { value: 'Рубль', label: 'RUB' },
  { value: 'Евро', label: 'EUR' },
  { value: 'Доллары США', label: 'USD' },
];

export const messagesSuccessful = [
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
    image: '',
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
