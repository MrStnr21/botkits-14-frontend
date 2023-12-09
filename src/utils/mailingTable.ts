/* eslint-disable object-shorthand */
import {
  baseCell,
  mailStatusCell,
} from '../components/table-cells/table-cells';

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

export const rowStyle = {
  ':hover': {
    backgroundColor: '#F8F9FB',
  },
  cursor: 'pointer',
};

export const rows = [
  {
    id: '22469653',
    title: '№ 1',
    messenger: 'Telegram',
    messages: '8 сообщений',
    conversion: '90%',
    status: true,
  },
  {
    id: '11111111',
    title: '№ 2',
    messenger: 'Viber',
    messages: '1 сообщение',
    conversion: '60%',
    status: false,
  },
  {
    id: '98765432',
    title: '№ 3',
    messenger: 'VK',
    messages: '14 сообщений',
    conversion: '82%',
    status: true,
  },
];

export const cols = [
  {
    key: 'id',
    label: 'ID',
    colStyle: { ...colStyle, width: '10%' },
    cellComponent: baseCell,
  },
  {
    key: 'title',
    label: 'Название',
    colStyle: { ...colStyle, width: '10%' },
    cellComponent: baseCell,
  },
  {
    key: 'messenger',
    label: 'Мессенджер',
    colStyle: { ...colStyle, width: '10%' },
    cellComponent: baseCell,
  },
  {
    key: 'messages',
    label: 'Отправлено сообщений',
    colStyle: { ...colStyle, width: '20%' },
    cellComponent: baseCell,
  },
  {
    key: 'conversion',
    label: 'Конверсия',
    colStyle: { ...colStyle, width: '10%' },
    cellComponent: baseCell,
  },
  {
    key: 'status',
    label: 'Статус заказа',
    colStyle: { ...colStyle, width: '10%' },
    cellComponent: mailStatusCell,
  },
];
