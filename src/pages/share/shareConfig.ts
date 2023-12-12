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

export const shareRows = [
  {
    name: 'Leslie Alexander',
    mail: 'leslie@gmail.com',
    adm: true,
    shared: true,
    mailing: true,
    hands: false,
    stats: false,
    dialogs: true,
    crm: false,
    minilanding: true,
  },
  {
    name: 'Leslie Genevieve',
    mail: 'leslieG@gmail.com',
    adm: true,
    shared: true,
    mailing: true,
    hands: false,
    stats: true,
    dialogs: false,
    crm: false,
    minilanding: true,
  },
  {
    name: 'Baumtrok Vyacheslav',
    mail: 'me@vbaumtrok.com',
    adm: true,
    shared: true,
    mailing: true,
    hands: false,
    stats: false,
    dialogs: true,
    crm: true,
    minilanding: true,
  },
  {
    name: 'Anton Antonov',
    mail: 'veryverylongemailvalue@gmail.com',
    adm: true,
    shared: true,
    mailing: true,
    hands: false,
    stats: false,
    dialogs: true,
    crm: false,
    minilanding: true,
  },
  {
    name: 'Robert Kennedy',
    mail: 'leslie@gmail.com',
    adm: false,
    shared: true,
    mailing: true,
    hands: false,
    stats: false,
    dialogs: false,
    crm: false,
    minilanding: false,
  },
  {
    name: 'Ivan Ivanov',
    mail: 'ivan@gmail.com',
    adm: true,
    shared: true,
    mailing: true,
    hands: false,
    stats: false,
    dialogs: false,
    crm: true,
    minilanding: true,
  },
  {
    name: 'John Snow',
    mail: 'traitor@mail.com',
    adm: true,
    shared: true,
    mailing: true,
    hands: false,
    stats: false,
    dialogs: true,
    crm: false,
    minilanding: false,
  },
];

export const shareCols = [
  {
    key: 'name',
    label: 'Имя',
    colStyle: { ...shareHeadStyle, width: '12%' },
    cellComponent: baseCell,
  },
  {
    key: 'mail',
    label: 'Email',
    colStyle: { ...shareHeadStyle, width: '12%' },
    cellComponent: baseCell,
  },
  {
    key: 'adm',
    label: 'Управление',
    colStyle: { ...shareHeadStyle, width: '10%' },
    cellComponent: switcherCell,
  },
  {
    key: 'shared',
    label: 'Общий доступ',
    colStyle: { ...shareHeadStyle, width: '10%' },
    cellComponent: switcherCell,
  },
  {
    key: 'mailing',
    label: 'Рассылка',
    colStyle: { ...shareHeadStyle, width: '10%' },
    cellComponent: switcherCell,
  },
  {
    key: 'hands',
    label: 'Ручное упр.',
    colStyle: { ...shareHeadStyle, width: '10%' },
    cellComponent: switcherCell,
  },
  {
    key: 'stats',
    label: 'Статистика',
    colStyle: { ...shareHeadStyle, width: '10%' },
    cellComponent: switcherCell,
  },
  {
    key: 'dialogs',
    label: 'Диалоги',
    colStyle: { ...shareHeadStyle, width: '10%' },
    cellComponent: switcherCell,
  },
  {
    key: 'crm',
    label: 'CRM',
    colStyle: { ...shareHeadStyle, width: '6%' },
    cellComponent: switcherCell,
  },
  {
    key: 'minilanding',
    label: 'Минилендинг',
    colStyle: { ...shareHeadStyle, width: '10%' },
    cellComponent: switcherCell,
  },
];

export const shareTableModalButtons = [{ label: 'Удалить', value: 'del' }];
