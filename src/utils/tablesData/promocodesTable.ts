import {
  baseCell,
  inputCell,
  promocodesMenuCell,
  statusPromoCell,
} from '../../components/table-cells/table-cells';

export const headStyle = {
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
  ':first-of-type': {
    paddingLeft: '40px',
  },
  ':last-of-type': {
    paddingRight: '40px',
  },
};

export const promoRows = [
  {
    date: 'John Snow',
    promo: 'сделать инпут',
    price: '30р',
    status: true,
  },
  {
    date: 'John Snow',
    promo: 'сделать инпут',
    price: '30р',
    status: true,
  },
  {
    date: 'John Snow',
    promo: 'сделать инпут',
    price: '30р',
    status: true,
    menu: true,
  },
  {
    date: 'John Snow',
    promo: 'инпут',
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
    colStyle: { ...headStyle, width: '25%' },
    cellComponent: statusPromoCell,
  },
  {
    key: 'menu',
    label: '',
    colStyle: { ...headStyle, width: '5%' },
    cellComponent: promocodesMenuCell,
  },
];
