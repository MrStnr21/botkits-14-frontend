/* eslint-disable object-shorthand */
import {
  baseCell,
  dateCell,
  statusCell,
} from '../../components/table-cells/table-cells';

export const colStyle = {
  border: 'none',
  padding: '0 0 12px',
  ':first-of-type': {
    paddingLeft: '32px',
  },
  ':last-of-type': {
    paddingRight: '32px',
  },
};

export const cellStyle = {
  border: 'none',
  boxSizing: 'border-box',
  padding: '14px 0',
  ':first-of-type': {
    paddingLeft: '32px',
  },
  ':last-of-type': {
    paddingRight: '32px',
  },
};

export const rowStyle = {
  ':hover': {
    backgroundColor: '#F8F9FB',
  },
  cursor: 'pointer',
};

export const subscriptionStatus = {
  tariff: 'Бизнес',
  status: true,
  cardMask: '4500 *** 1119',
  debitDate: '2023-09-12',
  balance: 1234,
};

export const columns = [
  {
    key: 'date',
    label: 'Дата',
    colStyle: { ...colStyle, width: '136px' },
    cellComponent: dateCell,
  },
  {
    key: 'amount',
    label: 'Сумма',
    colStyle: { ...colStyle, width: '136px' },
    cellComponent: baseCell,
  },
  {
    key: 'operation',
    label: 'Операция',
    colStyle: { ...colStyle, width: '136px' },
    cellComponent: baseCell,
  },
  {
    key: 'note',
    label: 'Примечание',
    colStyle: colStyle,
    cellComponent: baseCell,
  },
  {
    key: 'successful',
    label: 'Статус',
    colStyle: { ...colStyle, width: '76px' },
    cellComponent: statusCell,
  },
];

export const tableData = [
  {
    date: '2023-09-17T14:08:39.904Z',
    amount: 1000,
    successful: true,
    operation: 'Списания',
    note: 'Пополнение счета',
  },
  {
    date: '2022-03-09T11:22:33.456Z',
    amount: 523,
    successful: false,
    operation: 'Поступления',
    note: 'Оплата услуг',
  },
  {
    date: '2022-06-15T14:30:45.789Z',
    amount: 275,
    successful: true,
    operation: 'Поступления',
    note: 'Возврат средств',
  },
  {
    date: '2022-08-20T09:05:12.345Z',
    amount: 789,
    successful: true,
    operation: 'Поступления',
    note: null,
  },
  {
    date: '2023-01-05T16:45:30.678Z',
    amount: 432,
    successful: false,
    operation: 'Списания',
    note: 'Оплата услуг',
  },
  {
    date: '2022-10-12T12:15:00.123Z',
    amount: 600,
    successful: true,
    operation: 'Поступления',
    note: 'Возврат средств',
  },
  {
    date: '2023-09-17T14:08:39.904Z',
    amount: 1000,
    successful: true,
    operation: 'Списания',
    note: 'Пополнение счета',
  },
  {
    date: '2022-03-09T11:22:33.456Z',
    amount: 523,
    successful: false,
    operation: 'Поступления',
    note: 'Оплата услуг',
  },
  {
    date: '2022-06-15T14:30:45.789Z',
    amount: 275,
    successful: true,
    operation: 'Поступления',
    note: 'Возврат средств',
  },
  {
    date: '2022-08-20T09:05:12.345Z',
    amount: 789,
    successful: true,
    operation: 'Поступления',
    note: null,
  },
  {
    date: '2023-01-05T16:45:30.678Z',
    amount: 432,
    successful: false,
    operation: 'Списания',
    note: 'Оплата услуг',
  },
  {
    date: '2022-10-12T12:15:00.123Z',
    amount: 600,
    successful: true,
    operation: 'Поступления',
    note: 'Возврат средств',
  },
  {
    date: '2023-09-17T14:08:39.904Z',
    amount: 1000,
    successful: true,
    operation: 'Списания',
    note: 'Пополнение счета',
  },
  {
    date: '2022-03-09T11:22:33.456Z',
    amount: 523,
    successful: false,
    operation: 'Поступления',
    note: 'Оплата услуг',
  },
  {
    date: '2022-06-15T14:30:45.789Z',
    amount: 275,
    successful: true,
    operation: 'Поступления',
    note: 'Возврат средств',
  },
  {
    date: '2022-08-20T09:05:12.345Z',
    amount: 789,
    successful: true,
    operation: 'Поступления',
    note: null,
  },
  {
    date: '2023-01-05T16:45:30.678Z',
    amount: 432,
    successful: false,
    operation: 'Списания',
    note: 'Оплата услуг',
  },
  {
    date: '2022-10-12T12:15:00.123Z',
    amount: 600,
    successful: true,
    operation: 'Поступления',
    note: 'Возврат средств',
  },
];
