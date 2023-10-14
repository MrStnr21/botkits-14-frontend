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

import stylesTable from './tableComponent.module.scss';
import { TRowData } from '../../utils/types';

interface ITableComponent {
  isReferralsTableVisible?: boolean;
  cols?: string[];
  rows: TRowData[];
}

const TableComponent: FC<ITableComponent> = ({
  isReferralsTableVisible,
  cols,
  rows,
}): JSX.Element => {
  const isMobile = useMediaQuery('(max-width: 860px)');
  const maxTableHeight =
    isReferralsTableVisible && isMobile ? '240px' : '800px';

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
      className={stylesTable.tableContent}
      style={{ maxHeight: maxTableHeight }}
    >
      {isMobile ? (
        <>
          {rows!.map((row: any) => (
            <Table className={stylesTable.tableContent__table}>
              <TableHead>
                <TableRow className={stylesTable.tableContent__row}>
                  {cols?.map((col) => (
                    <TableCell className={stylesTable.tableContent__cell}>
                      {col}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow className={stylesTable.tableContent__row}>
                  {cols?.map((col) => (
                    <TableCell
                      key={col}
                      className={`${stylesTable.tableContent__cell} + ${
                        stylesTable.tableContent__bodyCell
                      }
                      ${
                        col === 'Статус' || col === 'Оплата'
                          ? row.status === true
                            ? stylesTable.tableContent__statusDone
                            : stylesTable.tableContent__statusProcessing
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
        <Table className={stylesTable.tableContent__table}>
          <TableHead>
            <TableRow className={stylesTable.tableContent__row}>
              {cols?.map((col) => (
                <TableCell key={col} className={stylesTable.tableContent__cell}>
                  {col}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows?.map((row: any) => (
              <TableRow className={stylesTable.tableContent__row}>
                {cols?.map((col) => (
                  <TableCell
                    sx={{ width: '169px' }}
                    key={col}
                    className={`${stylesTable.tableContent__cell}
                      ${
                        col === 'Статус' || col === 'Оплата'
                          ? row.status === true
                            ? stylesTable.tableContent__statusDone
                            : stylesTable.tableContent__statusProcessing
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

export default TableComponent;
