import {
  inputCell,
  switcherCell,
} from '../../components/table-cells/table-cells';

export const headStyle = {
  border: 'none',
  backgroundColor: '#ECEFFF',
  padding: '0',
  borderRadius: '0',
  ':last-of-type': {
    borderRadius: '0 10px 10px 0',
  },
};

export const rowStyleRef = {
  height: '72px',
  borderBottom: '.5px #CCD4E0 solid',
  ':hover': {
    backgroundColor: '#F8F9FB',
  },
  cursor: 'pointer',
};

export const cellStyle = {
  border: 'none',
  padding: '0',
  boxSizing: 'border-box',
};

export const tariffsCols = [
  {
    id: 1,
    key: 'name',
    label: 'Название тарифа',
    colStyle: { ...headStyle, width: '15%' },
    cellComponent: inputCell,
  },
  {
    id: 2,
    key: 'price',
    label: 'Цена',
    colStyle: { ...headStyle, width: '15%' },
    cellComponent: inputCell,
  },
  {
    id: 3,
    key: 'botsCount',
    label: 'Кол-во ботов',
    colStyle: { ...headStyle, width: '15%' },
    cellComponent: inputCell,
  },
  {
    id: 4,
    key: 'subscribersCount',
    label: 'Кол-во подписчиков',
    colStyle: { ...headStyle, width: '15%' },
    cellComponent: inputCell,
  },
  {
    id: 5,
    key: 'duration',
    label: 'Длительность',
    colStyle: { ...headStyle, width: '10%' },
    cellComponent: inputCell,
  },
  {
    id: 6,
    key: 'status',
    label: 'Опубликован',
    colStyle: { ...headStyle, width: '15%' },
    cellComponent: switcherCell,
  },
  {
    id: 7,
    key: 'isStarted',
    label: 'Стартовый тариф',
    colStyle: { ...headStyle, width: '15%' },
    cellComponent: switcherCell,
  },
];
