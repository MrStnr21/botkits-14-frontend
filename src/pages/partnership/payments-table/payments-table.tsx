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

import stylesPaymentsTable from './payments-table.module.scss';

function createData(
  reqDate: string,
  payDate: string,
  document: any,
  status: string,
  sum: string
) {
  return { reqDate, payDate, document, status, sum };
} // переделать в интерфейс позже

const rows = [
  createData('05.07.22', '07.07.22', 'Документ', 'Выплачено', '1500 ₽'),
  createData('02.07.22', '-', 'Документ', 'Выплачено', '4500 ₽'),
  createData('27.06.22', '29.07.22', 'Документ', 'В обработке', '4500 ₽'),
  createData('15.08.22', '19.08.22', 'Документ', 'Выплачено', '1500 ₽'),
];

const PaymentsTable: FC = () => {
  const isMobile = useMediaQuery('(max-width: 860px)');

  return (
    <TableContainer component={Paper} className={stylesPaymentsTable.payments}>
      {isMobile ? (
        <>
          {rows.map((row) => (
            <Table
              key={row.reqDate}
              className={stylesPaymentsTable.payments__table}
            >
              <TableHead className={stylesPaymentsTable.payments__tableHead}>
                <TableRow className={stylesPaymentsTable.payments__row}>
                  <TableCell className={stylesPaymentsTable.payments__cell}>
                    Дата запроса
                  </TableCell>
                  <TableCell
                    className={stylesPaymentsTable.payments__cell}
                    align="left"
                  >
                    Дата выплаты
                  </TableCell>
                  <TableCell
                    className={stylesPaymentsTable.payments__cell}
                    align="left"
                  >
                    Акт
                  </TableCell>
                  <TableCell
                    className={stylesPaymentsTable.payments__cell}
                    align="left"
                  >
                    Статус
                  </TableCell>
                  <TableCell
                    className={stylesPaymentsTable.payments__cell}
                    align="left"
                  >
                    Сумма выплаты
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody className={stylesPaymentsTable.payments__tableBody}>
                <TableRow className={stylesPaymentsTable.payments__row}>
                  <TableCell
                    align="right"
                    className={`${stylesPaymentsTable.payments__cell} + ${stylesPaymentsTable.bodyCell}`}
                  >
                    {row.reqDate}
                  </TableCell>
                  <TableCell
                    align="right"
                    className={`${stylesPaymentsTable.payments__cell} + ${stylesPaymentsTable.bodyCell}`}
                  >
                    {row.payDate}
                  </TableCell>
                  <TableCell
                    align="right"
                    className={`${stylesPaymentsTable.payments__cell} + ${stylesPaymentsTable.bodyCell}`}
                  >
                    {row.document}
                  </TableCell>
                  <TableCell
                    align="right"
                    className={`${stylesPaymentsTable.payments__cell} + ${stylesPaymentsTable.bodyCell}`}
                  >
                    {row.status}
                  </TableCell>
                  <TableCell
                    align="right"
                    className={`${stylesPaymentsTable.payments__cell} + ${stylesPaymentsTable.bodyCell}`}
                  >
                    {row.sum}
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          ))}
        </>
      ) : (
        <Table className={stylesPaymentsTable.payments__tableContainer}>
          <TableHead className={stylesPaymentsTable.payments__tableHead}>
            <TableRow className={stylesPaymentsTable.payments__row}>
              <TableCell
                className={stylesPaymentsTable.payments__cell}
                align="left"
              >
                Дата запроса
              </TableCell>
              <TableCell
                className={stylesPaymentsTable.payments__cell}
                align="left"
              >
                Дата выплаты
              </TableCell>
              <TableCell
                className={stylesPaymentsTable.payments__cell}
                align="left"
              >
                Акт
              </TableCell>
              <TableCell
                className={stylesPaymentsTable.payments__cell}
                align="left"
              >
                Статус
              </TableCell>
              <TableCell
                className={stylesPaymentsTable.payments__cell}
                align="right"
              >
                Сумма выплаты
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.reqDate}
                className={stylesPaymentsTable.payments__row}
              >
                <TableCell
                  className={stylesPaymentsTable.payments__cell}
                  align="left"
                >
                  {row.reqDate}
                </TableCell>
                <TableCell
                  className={stylesPaymentsTable.payments__cell}
                  align="left"
                >
                  {row.payDate}
                </TableCell>
                <TableCell
                  className={stylesPaymentsTable.payments__cell}
                  align="left"
                >
                  {row.document}
                </TableCell>
                <TableCell
                  className={stylesPaymentsTable.payments__cell}
                  align="left"
                >
                  {row.status}
                </TableCell>
                <TableCell
                  className={stylesPaymentsTable.payments__cell}
                  align="right"
                >
                  {row.sum}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </TableContainer>
  );
};

export default PaymentsTable;
