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

interface IRowData {
  taps?: string;
  regs?: string;
  sum?: string;
  fee?: string;
  paid?: string;
  withdrawal?: string;
  reqDate?: string;
  payDate?: string;
  document?: any;
  status?: boolean;
}

interface IPartnershipTable {
  isReferralsTableVisible?: boolean;
  cols?: string[];
  rows: IRowData[];
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
      className={stylesTable.partnershipTable}
      style={{ maxHeight: maxTableHeight }}
    >
      {isMobile ? (
        <>
          {rows!.map((row: any) => (
            <Table className={stylesTable.partnershipTable__table}>
              <TableHead className={stylesTable.partnershipTable__tableHead}>
                <TableRow className={stylesTable.partnershipTable__row}>
                  {cols?.map((col) => (
                    <TableCell className={stylesTable.partnershipTable__cell}>
                      {col}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody className={stylesTable.partnershipTable__tableBody}>
                <TableRow className={stylesTable.partnershipTable__row}>
                  {cols?.map((col) => (
                    <TableCell
                      key={col}
                      className={`${stylesTable.partnershipTable__cell} + ${
                        stylesTable.partnershipTable__bodyCell
                      }
                      ${
                        col === 'Статус' || col === 'Оплата'
                          ? row.status === true
                            ? stylesTable.partnershipTable__statusDone
                            : stylesTable.partnershipTable__statusProcessing
                          : ''
                      }
                      `}
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
        <Table className={stylesTable.partnershipTable__table}>
          <TableHead className={stylesTable.partnershipTable__tableHead}>
            <TableRow className={stylesTable.referrals__row}>
              {cols?.map((col) => (
                <TableCell
                  key={col}
                  className={stylesTable.partnershipTable__cell}
                >
                  {col}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody className={stylesTable.partnershipTable__tableBody}>
            {rows?.map((row: any) => (
              <TableRow className={stylesTable.partnershipTable__row}>
                {cols?.map((col) => (
                  <TableCell
                    sx={{ width: '169px' }}
                    key={col}
                    className={`${stylesTable.partnershipTable__cell}
                      ${
                        col === 'Статус' || col === 'Оплата'
                          ? row.status === true
                            ? stylesTable.partnershipTable__statusDone
                            : stylesTable.partnershipTable__statusProcessing
                          : ''
                      }
                    `}
                  >
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
