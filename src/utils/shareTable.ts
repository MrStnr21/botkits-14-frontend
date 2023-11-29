import { baseCell, checkBoxCell } from '../components/table-cells/table-cells';

export const shareHeadStyle = {
  border: 'none',
  backgroundColor: '#ECEFFF',
  padding: '12px 0',
  ':first-of-type': {
    paddingLeft: '40px',
  },
  ':last-of-type': {
    paddingRight: '40px',
  },
  borderRadius: '0',
  ':first-child': {
    borderRadius: '10px 0 0 10px',
  },
  ':last-child': {
    borderRadius: '0 10px 10px 0',
  },
};

export const rowStyleRef = {
  ':hover': {
    backgroundColor: '#F8F9FB',
  },
  cursor: 'pointer',
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

export const shareRows = [
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

export const shareCols = [
  {
    key: 'name',
    label: 'Имя',
    colStyle: { ...shareHeadStyle, width: '25%' },
    cellComponent: baseCell,
  },
  {
    key: 'regs',
    label: 'Регистраций',
    colStyle: { ...shareHeadStyle, width: '25%' },
    cellComponent: baseCell,
  },
  {
    key: 'status',
    label: 'Оплата',
    colStyle: { ...shareHeadStyle, width: '10%' },
    cellComponent: checkBoxCell,
  },
  {
    key: 'sum',
    label: 'Сумма',
    colStyle: { ...shareHeadStyle, width: '10%' },
    cellComponent: checkBoxCell,
  },
  {
    key: 'fee',
    label: 'Комиссия',
    colStyle: { ...shareHeadStyle, width: '10%' },
    cellComponent: checkBoxCell,
  },
  {
    key: 'paid',
    label: 'Выплачено',
    colStyle: { ...shareHeadStyle, width: '10%' },
    cellComponent: checkBoxCell,
  },
  {
    key: 'withdrawal',
    label: 'Вывод',
    colStyle: { ...shareHeadStyle, width: '10%' },
    cellComponent: checkBoxCell,
  },
];
