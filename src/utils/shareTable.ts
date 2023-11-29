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
  ':first-of-type': {
    paddingLeft: '40px',
  },
  ':last-of-type': {
    paddingRight: '40px',
  },
};

export const shareRows = [
  {
    name: 'Leslie Alexander',
    mail: 'leslie@gmail.com',
    adm: true,
    shared: true,
    mailing: true,
    hands: false,
    stats: false,
  },
  {
    name: 'Leslie Genevieve',
    mail: 'leslieG@gmail.com',
    adm: true,
    shared: true,
    mailing: true,
    hands: false,
    stats: true,
  },
  {
    name: 'Baumtrok Vyacheslav',
    mail: 'me@vbaumtrok.com',
    adm: true,
    shared: true,
    mailing: true,
    hands: false,
    stats: false,
  },
  {
    name: 'Anton Antonov',
    mail: 'leslie@gmail.com',
    adm: true,
    shared: true,
    mailing: true,
    hands: false,
    stats: false,
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
    key: 'mail',
    label: 'Email',
    colStyle: { ...shareHeadStyle, width: '25%' },
    cellComponent: baseCell,
  },
  {
    key: 'adm',
    label: 'Управление',
    colStyle: { ...shareHeadStyle, width: '10%' },
    cellComponent: checkBoxCell,
  },
  {
    key: 'shared',
    label: 'Общий доступ',
    colStyle: { ...shareHeadStyle, width: '10%' },
    cellComponent: checkBoxCell,
  },
  {
    key: 'mailing',
    label: 'Рассылка',
    colStyle: { ...shareHeadStyle, width: '10%' },
    cellComponent: checkBoxCell,
  },
  {
    key: 'hands',
    label: 'Ручное упр.',
    colStyle: { ...shareHeadStyle, width: '10%' },
    cellComponent: checkBoxCell,
  },
  {
    key: 'stats',
    label: 'Статистика',
    colStyle: { ...shareHeadStyle, width: '10%' },
    cellComponent: checkBoxCell,
  },
];
