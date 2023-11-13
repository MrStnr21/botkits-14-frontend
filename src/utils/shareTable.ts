/* eslint-disable object-shorthand */
import {
  baseCell,
  dateCell,
  statusCell,
} from '../components/table-cells/table-cells';

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
