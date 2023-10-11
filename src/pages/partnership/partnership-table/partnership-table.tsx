/* eslint-disable @typescript-eslint/no-unused-vars */
import { FC } from 'react';
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  useMediaQuery,
} from '@mui/material';

import stylesTable from './partnership-table.module.scss';

type ReferralsData = {
  taps: string;
  regs: string;
  status: boolean;
  sum: string;
  fee: string;
  paid: string;
  withdrawal: string;
};

type PaymentsData = {
  reqDate: string;
  payDate: string;
  document: any;
  status: boolean;
  paid: string;
};

interface IPartnershipTable {
  isReferralsTableVisible?: boolean;
  cols?: string[];
  rows: any;
}

const PartnershipTable: FC<IPartnershipTable> = ({
  isReferralsTableVisible,
  cols,
  rows,
}): JSX.Element => {
  const isMobile = useMediaQuery('(max-width: 860px)');
  const maxTableHeight =
    isReferralsTableVisible && isMobile ? '240px' : '845px';

  function renderCellContent(colName: string, rowData: any) {
    switch (colName) {
      case 'Перешли по ссылке':
        return rowData.taps;
      case 'Регистраций':
        return rowData.regs;
      case 'Оплата':
        return rowData.status ? 'Оплачено' : 'В обработке';
      case 'Сумма':
        return rowData.sum;
      case 'Комиссия':
        return rowData.fee;
      case 'Выплачено':
        return rowData.paid;
      case 'Вывод':
        return rowData.withdrawal;
      case 'Дата запроса':
        return rowData.reqDate;
      case 'Дата выплаты':
        return rowData.payDate;
      case 'Акт':
        return rowData.document;
      case 'Статус':
        return rowData.status ? 'Выплачено' : 'В обработке';
      case 'Сумма выплаты':
        return rowData.sum;
      default:
        return '';
    }
  }
  return (
    <TableContainer
      component={Paper}
      className={stylesTable.referrals}
      style={{ maxHeight: maxTableHeight }}
    >
      {isMobile ? (
        <>
          {rows!.map((row: any) => (
            <Table className={stylesTable.referrals__table}>
              <TableHead className={stylesTable.referrals__tableHead}>
                <TableRow className={stylesTable.referrals__row}>
                  {cols?.map((col) => (
                    <TableCell className={stylesTable.referrals__cell}>
                      {col}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody className={stylesTable.referrals__tableBody}>
                <TableRow className={stylesTable.referrals__row}>
                  {cols?.map((col) => (
                    <TableCell
                      key={col}
                      className={`${stylesTable.referrals__cell} + ${stylesTable.referrals__bodyCell}`}
                    >
                      {renderCellContent(col, row)}
                    </TableCell>
                  ))}
                </TableRow>
              </TableBody>
            </Table>
          ))}
        </>
      ) : (
        <Table className={stylesTable.referrals__table}>
          <TableHead className={stylesTable.referrals__tableHead}>
            <TableRow className={stylesTable.referrals__row}>
              {cols?.map((col) => (
                <TableCell key={col} className={stylesTable.referrals__cell}>
                  {col}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody className={stylesTable.referrals__tableBody}>
            {rows?.map((row: any) => (
              <TableRow className={stylesTable.referrals__row}>
                {cols?.map((col) => (
                  <TableCell key={col} className={stylesTable.referrals__cell}>
                    {renderCellContent(col, row)}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </TableContainer>
  );
};

export default PartnershipTable;
