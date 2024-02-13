/* eslint-disable no-underscore-dangle */
import { FC, useEffect, useState } from 'react';
import stylesUsers from './users-page.module.scss';
import Typography from '../../ui/typography/typography';
import EnhancedTable, {
  TableData,
} from '../../components/enhanced-table/enhanced-table';

import { ppHeadCell } from '../../components/table-cells/table-cells';
import {
  Cols,
  cellStyle,
  rowStyleRef,
  shareTableModalButtons,
} from './users-config';
import { getUsersInfo, removeUser } from '../../api/user';

const dateFormat = new Intl.DateTimeFormat('ru', {
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
});

const UsersPage: FC = () => {
  const [tableData, setTableData] = useState<TableData[]>([]);
  useEffect(() => {
    getUsersInfo().then((data) => {
      setTableData(
        data.map((row) => {
          return {
            ...row,
            dateRegistration: dateFormat.format(new Date(row.dateRegistration)),
            lastActivityAccount: dateFormat.format(
              new Date(row.lastActivityAccount)
            ),
            lastActivityBot: dateFormat.format(new Date(row.lastActivityBot)),
            debitDate: dateFormat.format(new Date(row.debitDate)),
            tariffName: row.tariff.name,
            _id: row.id,
          };
        })
      );
    });
  }, []);

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
        tableData={tableData}
        rowStyle={rowStyleRef}
        cellStyle={cellStyle}
        shadow={1}
        menuOptions={shareTableModalButtons}
        setTableData={setTableData}
        onDelete={removeUser}
      />
    </div>
  );
};

export default UsersPage;
