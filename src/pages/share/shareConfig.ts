import {
  baseCell,
  switcherCell,
} from '../../components/table-cells/table-cells';

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
  maxWidth: '168px',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
};

export const shareCols = [
  {
    id: 1,
    key: 'profile',
    label: 'Имя',
    colStyle: { ...shareHeadStyle, width: '8%' },
    cellComponent: baseCell,
  },
  {
    id: 2,
    key: 'email',
    label: 'Email',
    colStyle: { ...shareHeadStyle, width: '12%' },
    cellComponent: baseCell,
  },
  {
    id: 3,
    key: 'dasboard',
    label: 'Управление',
    colStyle: { ...shareHeadStyle, width: '10%' },
    cellComponent: switcherCell,
  },
  {
    id: 4,
    key: 'botBuilder',
    label: 'Общий доступ',
    colStyle: { ...shareHeadStyle, width: '13%' },
    cellComponent: switcherCell,
  },
  {
    id: 5,
    key: 'mailing',
    label: 'Рассылка',
    colStyle: { ...shareHeadStyle, width: '9%' },
    cellComponent: switcherCell,
  },
  {
    id: 6,
    key: 'hands',
    label: 'Ручное упр.',
    colStyle: { ...shareHeadStyle, width: '11%' },
    cellComponent: switcherCell,
  },
  {
    id: 7,
    key: 'static',
    label: 'Статистика',
    colStyle: { ...shareHeadStyle, width: '10%' },
    cellComponent: switcherCell,
  },
  {
    id: 8,
    key: 'dialogs',
    label: 'Диалоги',
    colStyle: { ...shareHeadStyle, width: '9%' },
    cellComponent: switcherCell,
  },
  {
    id: 9,
    key: 'crm',
    label: 'CRM',
    colStyle: { ...shareHeadStyle, width: '7%' },
    cellComponent: switcherCell,
  },
  {
    id: 10,
    key: 'minilanding',
    label: 'Минилендинг',
    colStyle: { ...shareHeadStyle, width: '11%' },
    cellComponent: switcherCell,
  },
];

export const shareTableModalButtons = [{ label: 'Удалить', value: 'del' }];
