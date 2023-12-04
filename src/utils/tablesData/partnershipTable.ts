/* eslint-disable object-shorthand */
import {
  baseCell,
  refStatusCell,
  moneyCell,
  paymentStatusCell,
} from '../../components/table-cells/table-cells';

export const colStyle = {
  border: 'none',
  padding: '0 0 12px',
  ':first-of-type': {
    paddingLeft: '40px',
  },
  ':last-of-type': {
    paddingRight: '40px',
  },
};

export const cellStyle = {
  border: 'none',
  boxSizing: 'border-box',
  padding: '14px 0',
  ':first-of-type': {
    paddingLeft: '40px',
  },
  ':last-of-type': {
    paddingRight: '40px',
  },
};

export const rowStyleRef = {
  ':hover': {
    backgroundColor: '#F8F9FB',
  },
  cursor: 'pointer',
};

export const rowStylePayment = {
  ':hover': {
    backgroundColor: '#FFFFFF',
  },
  cursor: 'pointer',
};

export const refRows = [
  {
    taps: '28 человек',
    regs: '15',
    status: true,
    sum: '5000',
    fee: '1500',
    paid: '4500',
    withdrawal: '1500',
  },
  {
    taps: '17 человек',
    regs: '8',
    status: true,
    sum: '15000',
    fee: '4500',
    paid: '8200',
    withdrawal: '4500',
  },
  {
    taps: '10 человек',
    regs: '8',
    status: true,
    sum: '8000',
    fee: '2000',
    paid: '6000',
    withdrawal: '2300',
  },
  {
    taps: '11 человек',
    regs: '5',
    status: true,
    sum: '500',
    fee: '100',
    paid: '300',
    withdrawal: '150',
  },
];

export const paymentRows = [
  {
    reqDate: '05.07.22',
    payDate: '07.07.22',
    document: 'Чек.pdf',
    status: true,
    sum: '1500 ₽',
  },
  {
    reqDate: '08.08.22',
    payDate: '-',
    document: 'Чек.pdf',
    status: false,
    sum: '3000 ₽',
  },
  {
    reqDate: '22.12.22',
    payDate: '13.01.23',
    document: 'Чек.pdf',
    status: true,
    sum: '2500 ₽',
  },
];

export const refCols = [
  {
    key: 'taps',
    label: 'Перешли по ссылке',
    colStyle: { ...colStyle, width: '25%' },
    cellComponent: baseCell,
  },
  {
    key: 'regs',
    label: 'Регистраций',
    colStyle: { ...colStyle, width: '25%' },
    cellComponent: baseCell,
  },
  {
    key: 'status',
    label: 'Оплата',
    colStyle: { ...colStyle, width: '10%' },
    cellComponent: refStatusCell,
  },
  {
    key: 'sum',
    label: 'Сумма',
    colStyle: { ...colStyle, width: '10%' },
    cellComponent: moneyCell,
  },
  {
    key: 'fee',
    label: 'Комиссия',
    colStyle: { ...colStyle, width: '10%' },
    cellComponent: moneyCell,
  },
  {
    key: 'paid',
    label: 'Выплачено',
    colStyle: { ...colStyle, width: '10%' },
    cellComponent: moneyCell,
  },
  {
    key: 'withdrawal',
    label: 'Вывод',
    colStyle: { ...colStyle, width: '10%' },
    cellComponent: moneyCell,
  },
];

export const paymentCols = [
  {
    key: 'reqDate',
    label: 'Дата запроса',
    colStyle: { ...colStyle, width: '25%' },
    cellComponent: baseCell,
  },
  {
    key: 'payDate',
    label: 'Дата выплаты',
    colStyle: { ...colStyle, width: '20%' },
    cellComponent: baseCell,
  },
  {
    key: 'document',
    label: 'Акт',
    colStyle: { ...colStyle, width: '20%' },
    cellComponent: baseCell,
  },
  {
    key: 'status',
    label: 'Статус',
    colStyle: { ...colStyle, width: '20%' },
    cellComponent: paymentStatusCell,
  },
  {
    key: 'sum',
    label: 'Сумма выплаты',
    colStyle: { ...colStyle, width: '15%' },
    cellComponent: baseCell,
  },
];
