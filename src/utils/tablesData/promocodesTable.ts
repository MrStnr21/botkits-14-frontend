import {
  baseCell,
  inputCell,
  menuCell,
  statusPromoCell,
} from '../../components/table-cells/table-cells';

export const headStyle = {
  border: 'none',
  backgroundColor: '#ECEFFF',
  padding: '12px 0',
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
    date: '15.12.2023 11:00',
    promo: 'GHBDTN5',
    price: '30р',
    status: true,
  },
  {
    date: '22.10.23 22:35',
    promo: 'HELLO10',
    price: '30р',
    status: true,
  },
  {
    date: '05.08.23 15:00',
    promo: 'uae009',
    price: '30р',
    status: true,
    menu: true,
  },
  {
    date: '16.09.23 19:50',
    promo: 'darkza444',
    price: '30р',
    status: false,
  },
];

export const promoColumns = [
  {
    key: 'date',
    label: 'Дата',
    colStyle: { ...headStyle, width: '25%' },
    cellComponent: baseCell,
  },
  {
    key: 'promo',
    label: 'Промокод',
    colStyle: { ...headStyle, width: '25%' },
    cellComponent: inputCell,
  },
  {
    key: 'price',
    label: 'Стоимость',
    colStyle: { ...headStyle, width: '25%' },
    cellComponent: inputCell,
  },
  {
    key: 'status',
    label: 'Статус',
    colStyle: { ...headStyle, width: '20%' },
    cellComponent: statusPromoCell,
  },
  {
    key: 'menu',
    label: '',
    colStyle: { ...headStyle, width: '5%' },
    cellComponent: menuCell,
  },
];
