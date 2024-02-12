/* eslint-disable object-shorthand */
import {
  baseCell,
  dateCell,
  statusCell,
} from '../../components/table-cells/table-cells';

export const colStyle = {
  border: 'none',
  padding: '0 0 12px',
};

export const cellStyle = {
  border: 'none',
  boxSizing: 'border-box',
  padding: '14px 0',
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
    id: 1,
    key: 'date',
    label: 'Дата',
    colStyle: { ...colStyle, width: '136px' },
    cellComponent: dateCell,
  },
  {
    id: 2,
    key: 'amount',
    label: 'Сумма',
    colStyle: { ...colStyle, width: '136px' },
    cellComponent: baseCell,
  },
  {
    id: 3,
    key: 'operation',
    label: 'Операция',
    colStyle: { ...colStyle, width: '136px' },
    cellComponent: baseCell,
  },
  {
    id: 4,
    key: 'note',
    label: 'Примечание',
    colStyle: colStyle,
    cellComponent: baseCell,
  },
  {
    id: 5,
    key: 'successful',
    label: 'Статус',
    colStyle: { ...colStyle, width: '76px' },
    cellComponent: statusCell,
  },
];

export const tableData = [
  {
    id: 1,
    date: '2023-09-17T14:08:39.904Z',
    amount: 1000,
    successful: true,
    operation: 'Списания',
    note: 'Пополнение счета',
  },
  {
    id: 2,
    date: '2022-03-09T11:22:33.456Z',
    amount: 523,
    successful: false,
    operation: 'Поступления',
    note: 'Оплата услуг',
  },
  {
    id: 3,
    date: '2022-06-15T14:30:45.789Z',
    amount: 275,
    successful: true,
    operation: 'Поступления',
    note: 'Возврат средств',
  },
  {
    id: 4,
    date: '2022-08-20T09:05:12.345Z',
    amount: 789,
    successful: true,
    operation: 'Поступления',
    note: null,
  },
  {
    id: 5,
    date: '2023-01-05T16:45:30.678Z',
    amount: 432,
    successful: false,
    operation: 'Списания',
    note: 'Оплата услуг',
  },
  {
    id: 6,
    date: '2022-10-12T12:15:00.123Z',
    amount: 600,
    successful: true,
    operation: 'Поступления',
    note: 'Возврат средств',
  },
  {
    id: 7,
    date: '2023-09-17T14:08:39.904Z',
    amount: 1000,
    successful: true,
    operation: 'Списания',
    note: 'Пополнение счета',
  },
  {
    id: 8,
    date: '2022-03-09T11:22:33.456Z',
    amount: 523,
    successful: false,
    operation: 'Поступления',
    note: 'Оплата услуг',
  },
  {
    id: 9,
    date: '2022-06-15T14:30:45.789Z',
    amount: 275,
    successful: true,
    operation: 'Поступления',
    note: 'Возврат средств',
  },
  {
    id: 10,
    date: '2022-08-20T09:05:12.345Z',
    amount: 789,
    successful: true,
    operation: 'Поступления',
    note: null,
  },
  {
    id: 11,
    date: '2023-01-05T16:45:30.678Z',
    amount: 432,
    successful: false,
    operation: 'Списания',
    note: 'Оплата услуг',
  },
  {
    id: 12,
    date: '2022-10-12T12:15:00.123Z',
    amount: 600,
    successful: true,
    operation: 'Поступления',
    note: 'Возврат средств',
  },
  {
    id: 13,
    date: '2023-09-17T14:08:39.904Z',
    amount: 1000,
    successful: true,
    operation: 'Списания',
    note: 'Пополнение счета',
  },
  {
    id: 14,
    date: '2022-03-09T11:22:33.456Z',
    amount: 523,
    successful: false,
    operation: 'Поступления',
    note: 'Оплата услуг',
  },
  {
    id: 15,
    date: '2022-06-15T14:30:45.789Z',
    amount: 275,
    successful: true,
    operation: 'Поступления',
    note: 'Возврат средств',
  },
  {
    id: 16,
    date: '2022-08-20T09:05:12.345Z',
    amount: 789,
    successful: true,
    operation: 'Поступления',
    note: null,
  },
  {
    id: 17,
    date: '2023-01-05T16:45:30.678Z',
    amount: 432,
    successful: false,
    operation: 'Списания',
    note: 'Оплата услуг',
  },
  {
    id: 18,
    date: '2022-10-12T12:15:00.123Z',
    amount: 600,
    successful: true,
    operation: 'Поступления',
    note: 'Возврат средств',
  },
];

export const subscriptionDropdownValues = [
  { label: 'Все', value: 'all' },
  { label: 'Поступления', value: 'income' },
  { label: 'Списания', value: 'withdrawals' },
];
