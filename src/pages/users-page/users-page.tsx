import { FC } from 'react';
import stylesUsers from './users-page.module.scss';
import Typography from '../../ui/typography/typography';
import EnhancedTable from '../../components/enhanced-table/enhanced-table';

import { baseCell, ppHeadCell } from '../../components/table-cells/table-cells';

const UsersPage: FC = () => {
  const shareHeadStyle = {
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

  const Cols = [
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
      key: 'count',
      label: 'Кол-во ботов',
      colStyle: { ...shareHeadStyle, width: '8%' },
      cellComponent: baseCell,
    },
    {
      id: 5,
      key: 'date',
      label: 'Дата регистрации',
      colStyle: { ...shareHeadStyle, width: '12%' },
      cellComponent: baseCell,
    },
    {
      id: 6,
      key: 'account',
      label: 'Активность аккаунта',
      colStyle: { ...shareHeadStyle, width: '12%' },
      cellComponent: baseCell,
    },
    {
      id: 7,
      key: 'bots',
      label: 'Активность бота',
      colStyle: { ...shareHeadStyle, width: '10%' },
      cellComponent: baseCell,
    },
    {
      id: 8,
      key: 'tariff',
      label: 'Тариф',
      colStyle: { ...shareHeadStyle, width: '10%' },
      cellComponent: baseCell,
    },
    {
      id: 9,
      key: 'end',
      label: 'Окончание тарифа',
      colStyle: { ...shareHeadStyle, width: '12%' },
      cellComponent: baseCell,
    },
  ];

  const Row = [
    {
      id: 1,
      name: 'Leslie Alexander',
      mail: 'leslie@gmail.com',
      phone: '+78888888800',
      count: 4,
      date: '14/03/2023',
      account: '04/05/2023',
      bots: '09/05/2023',
      tariff: '',
      end: '14/03/2024',
    },
    {
      id: 2,
      name: 'Leslie Genevieve',
      mail: 'leslieG@gmail.com',
      phone: '+375295012955',
      count: 2,
      date: '14/03/2023',
      account: '02/04/2023',
      bots: '14/04/2023',
      tariff: '',
      end: '14/03/2024',
    },
    {
      id: 3,
      name: 'Wade Warren',
      mail: 'leslieG@gmail.com',
      phone: '+79160012540',
      count: 20,
      date: '14/03/2023',
      account: '06/07/2023',
      bots: '18/07/2023',
      tariff: '',
      end: '14/03/2024',
    },
    {
      id: 4,
      name: 'Jenny Wilson',
      mail: 'leslieG@gmail.com',
      phone: '+375178001234',
      count: 14,
      date: '14/03/2023',
      account: '21/03/2023',
      bots: '21/03/2023',
      tariff: '',
      end: '14/03/2024',
    },
    {
      id: 5,
      name: 'Bessie Cooper',
      mail: 'leslieG@gmail.com',
      phone: '+79160012540',
      count: 47,
      date: '14/03/2023',
      account: '31/03/2023',
      bots: '1/04/2023',
      tariff: '',
      end: '14/03/2024',
    },
  ];

  const cellStyle = {
    border: 'none',
    padding: '0',
    boxSizing: 'border-box',
    maxWidth: '168px',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
  };

  const rowStyleRef = {
    height: '72px',
    borderBottom: '.5px #CCD4E0 solid',
    ':hover': {
      backgroundColor: '#F8F9FB',
    },
    cursor: 'pointer',
  };

  const shareTableModalButtons = [{ label: 'Удалить', value: 'del' }];

  return (
    <div className={stylesUsers.layout}>
      <div className={stylesUsers.header}>
        <Typography tag="h2" fontFamily="secondary">
          Администраторы
        </Typography>
      </div>
      <EnhancedTable
        // при переполнении таблицы колонками задаём минимальную ширину таблицы больше минимальной
        // ширины box и получаем горизонтальный скролл внутри box
        minTableWidth="1660px"
        check
        dropdown
        pagination
        toolbar
        toolbarFilters
        columns={Cols}
        headComponent={ppHeadCell}
        tableData={Row}
        rowStyle={rowStyleRef}
        cellStyle={cellStyle}
        shadow={1}
        menuOptions={shareTableModalButtons}
      />
    </div>
  );
};

export default UsersPage;
