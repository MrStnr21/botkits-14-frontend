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
  { value: '1', nameValue: '1' },
  { value: '2', nameValue: '2' },
  { value: '3', nameValue: '3' },
];

export const selectValuesType = [
  { value: 'random', nameValue: 'Случайное' },
  { value: 'static', nameValue: 'Статичное' },
  { value: 'variable', nameValue: 'Переменная' },
  { value: 'JS', nameValue: 'JavaScript' },
  { value: 'CRM', nameValue: 'CRM' },
];

export const signSelectValues = [
  {
    nameValue: equalImage,
    value: 'eq',
    isIcon: true,
    iconDescription: 'Равно',
  },
  {
    nameValue: notEqualImage,
    value: 'neq',
    isIcon: true,
    iconDescription: 'Не равно',
  },
  {
    nameValue: moreImage,
    value: 'more',
    isIcon: true,
    iconDescription: 'Больше',
  },
  {
    nameValue: moreOrEqualImage,
    value: 'moreeq',
    isIcon: true,
    iconDescription: 'Больше или равно',
  },
  {
    nameValue: lessImage,
    value: 'less',
    isIcon: true,
    iconDescription: 'Меньше',
  },
  {
    nameValue: lessOrEqualImage,
    value: 'lesseq',
    isIcon: true,
    iconDescription: 'Меньше или равно',
  },
  {
    nameValue: noCaseEqualImage,
    value: 'eqnoreg',
    isIcon: true,
    iconDescription: 'Равно (без учёта регистра)',
  },
  {
    nameValue: inLineNoCaseImage,
    value: 'instrnoreg',
    isIcon: true,
    iconDescription: 'Входит в строку (без учёта регистра)',
  },
  {
    nameValue: inLineImage,
    value: 'instr',
    isIcon: true,
    iconDescription: 'Входит в строку',
  },
  {
    nameValue: notInLineWithoutCaseImage,
    value: 'notinstrnoreg',
    isIcon: true,
    iconDescription: 'Не входит в строку (без учёта регистра)',
  },
  {
    nameValue: notInLineImage,
    value: 'notinstr',
    isIcon: true,
    iconDescription: 'Не входит в строку',
  },
];

export const currencyAvailable = [
  { value: 'Рубль', nameValue: 'RUB' },
  { value: 'Евро', nameValue: 'EUR' },
  { value: 'Доллары США', nameValue: 'USD' },
];

export const messagesSuccessful = [
  { value: 'message', nameValue: 'Блок сообщений' },
  { value: 'api', nameValue: 'API' },
  { value: 'conditional', nameValue: 'Условный блок' },
  { value: 'coordinate', nameValue: 'Отправка координат' },
  { value: 'telegramPay', nameValue: 'Оплата в Telegram' },
  { value: 'deeplink', nameValue: 'Deep Link' },
  { value: 'crm', nameValue: 'Сохранение в CRM' },
  { value: 'operator', nameValue: 'Перевод на оператора' },
  { value: 'variable', nameValue: 'Управление переменными' },
];

export const defaultBlocks = {
  message: {
    name: 'message',
    data: [
      { type: MessageDataTypes.message, value: '' },
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
    type: 'Случайное',
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
