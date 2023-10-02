// import { StyledEngineProvider } from '@mui/styled-engine-sc';
import { FC } from 'react';
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';

import tableStyles from './payments-table.module.scss';

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
  createData('02.07.22', '-', 'Документ', '15000 ₽', '4500 ₽'),
  createData('27.06.22', '29.07.22', 'Документ', 'В обработке', '4500 ₽'),
  createData('15.08.22', '19.08.22', 'Документ', 'Выплачено', '1500 ₽'),
];

const PaymentsTable: FC = () => {
  return (
    <TableContainer component={Paper} className={tableStyles.table}>
      <Table>
        <TableHead className={tableStyles.tableHead}>
          <TableRow className={tableStyles.row}>
            <TableCell className={tableStyles.cell} align="left">
              Дата запроса
            </TableCell>
            <TableCell className={tableStyles.cell} align="left">
              Дата выплаты
            </TableCell>
            <TableCell className={tableStyles.cell} align="left">
              Акт
            </TableCell>
            <TableCell className={tableStyles.cell} align="left">
              Статус
            </TableCell>
            <TableCell className={tableStyles.cell} align="right">
              Сумма выплаты
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.reqDate} className={tableStyles.tableRow}>
              <TableCell className={tableStyles.cell} align="left">
                {row.reqDate}
              </TableCell>
              <TableCell className={tableStyles.cell} align="left">
                {row.payDate}
              </TableCell>
              <TableCell className={tableStyles.cell} align="left">
                {row.document}
              </TableCell>
              <TableCell className={tableStyles.cell} align="left">
                {row.status}
              </TableCell>
              <TableCell className={tableStyles.cell} align="right">
                {row.sum}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default PaymentsTable;
