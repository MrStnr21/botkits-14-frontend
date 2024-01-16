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
      phone: '+7(888)888-88-00',
      count: 4,
      date: '14/03/2023',
      account: 20,
      bots: 10,
      tariff: '',
      end: '14/03/2024',
    },
    {
      id: 2,
      name: 'Leslie Genevieve',
      mail: 'leslieG@gmail.com',
      phone: '+7(999)999-99-99',
      count: 2,
      date: '14/03/2023',
      account: 20,
      bots: 10,
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
        shadow={0}
        menuOptions={shareTableModalButtons}
      />
    </div>
  );
};

export default UsersPage;
