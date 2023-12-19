import {
  baseCell,
  inputCell,
  statusPromoCell,
} from '../../components/table-cells/table-cells';

export const promoTableModalButtons = [{ label: 'Удалить', value: 'del' }];

export const promoDropdownValues = [
  { label: 'Все', value: 'all' },
  { label: 'Активные', value: 'active' },
  { label: 'Неактивные', value: 'inactive' },
];

export const promoHeaderTitle = 'Созданные промокоды';

export const promoHeadStyle = {
  border: 'none',
  backgroundColor: '#ECEFFF',
  padding: '0',
  borderRadius: '0',
  ':last-of-type': {
    borderRadius: '0 10px 10px 0',
  },
};

export const promoRowStyleRef = {
  height: '72px',
  borderBottom: '.5px #CCD4E0 solid',
  ':hover': {
    backgroundColor: '#F8F9FB',
  },
  cursor: 'pointer',
};

export const promoCellStyle = {
  border: 'none',
  padding: '0',
  boxSizing: 'border-box',
};

export const promoRows = [
  {
    id: 1,
    date: '15.12.2023 11:00',
    promo: 'GHBDTN5',
    price: '30р',
    status: true,
  },
  {
    id: 2,
    date: '22.10.23 22:35',
    promo: 'HELLO10',
    price: '30р',
    status: true,
  },
  {
    id: 3,
    date: '05.08.23 15:00',
    promo: 'uae009',
    price: '30р',
    status: true,
    menu: true,
  },
  {
    id: 4,
    date: '16.09.23 19:50',
    promo: 'darkza444',
    price: '30р',
    status: false,
  },
];

export const promoColumns = [
  {
    id: 1,
    key: 'date',
    label: 'Дата',
    colStyle: { ...promoHeadStyle, width: '25%' },
    cellComponent: baseCell,
  },
  {
    id: 2,
    key: 'promo',
    label: 'Промокод',
    colStyle: { ...promoHeadStyle, width: '25%' },
    cellComponent: inputCell,
  },
  {
    id: 3,
    key: 'price',
    label: 'Стоимость',
    colStyle: { ...promoHeadStyle, width: '25%' },
    cellComponent: inputCell,
  },
  {
    id: 4,
    key: 'status',
    label: 'Статус',
    colStyle: { ...promoHeadStyle, width: '25%' },
    cellComponent: statusPromoCell,
  },
];
