import { baseCell } from '../../components/table-cells/table-cells';

export const shareHeadStyle = {
  border: 'none',
  backgroundColor: '#ECEFFF',
  padding: '0',
  borderRadius: '0',
  fontFamily: 'Open Sans, sans-serif',
  fontWeight: '400',
  fontSize: '16px',
  ':last-of-type': {
    borderRadius: '0 10px 10px 0',
  },
};

export const Cols = [
  {
    id: 1,
    key: 'name',
    label: 'Имя',
    colStyle: { ...shareHeadStyle, width: '12%' },
    cellComponent: baseCell,
  },
  {
    id: 2,
    key: 'mail',
    label: 'Email',
    colStyle: { ...shareHeadStyle, width: '12%' },
    cellComponent: baseCell,
  },
  {
    id: 3,
    key: 'phone',
    label: 'Телефон',
    colStyle: { ...shareHeadStyle, width: '10%' },
    cellComponent: baseCell,
  },
  {
    id: 4,
    key: 'botCount',
    label: 'Кол-во ботов',
    colStyle: { ...shareHeadStyle, width: '8%' },
    cellComponent: baseCell,
  },
  {
    id: 5,
    key: 'dateRegistration',
    label: 'Дата регистрации',
    colStyle: { ...shareHeadStyle, width: '12%' },
    cellComponent: baseCell,
  },
  {
    id: 6,
    key: 'lastActivityAccount',
    label: 'Активность аккаунта',
    colStyle: { ...shareHeadStyle, width: '12%' },
    cellComponent: baseCell,
  },
  {
    id: 7,
    key: 'lastActivityBot',
    label: 'Активность бота',
    colStyle: { ...shareHeadStyle, width: '10%' },
    cellComponent: baseCell,
  },
  {
    id: 8,
    key: 'tariffName',
    label: 'Тариф',
    colStyle: { ...shareHeadStyle, width: '10%' },
    cellComponent: baseCell,
  },
  {
    id: 9,
    key: 'debitDate',
    label: 'Окончание тарифа',
    colStyle: { ...shareHeadStyle, width: '12%' },
    cellComponent: baseCell,
  },
];

export const cellStyle = {
  border: 'none',
  padding: '0',
  boxSizing: 'border-box',
  maxWidth: '168px',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
};

export const rowStyleRef = {
  height: '72px',
  borderBottom: '.5px #CCD4E0 solid',
  ':hover': {
    backgroundColor: '#F8F9FB',
  },
  cursor: 'pointer',
};

export const shareTableModalButtons = [{ label: 'Удалить', value: 'del' }];
