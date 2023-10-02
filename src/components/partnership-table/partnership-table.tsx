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
import tableStyles from './partnership-table.module.scss';

function createData(
  linkTaps: string,
  regs: number,
  status: string,
  sum: string,
  fee: string,
  paid: string,
  withdrawal: string
) {
  return { linkTaps, regs, status, sum, fee, paid, withdrawal };
}

const rows = [
  createData(
    '28 человек',
    15,
    'Оплачено',
    '5 000 ₽',
    '1500 ₽',
    '4500 ₽',
    '1500 ₽'
  ),
  createData(
    '17 человек',
    8,
    'Оплачено',
    '15000 ₽',
    '4500 ₽',
    '8200 ₽',
    '4500 ₽'
  ),
  createData(
    '10 человек',
    10,
    'Оплачено',
    '5000 ₽',
    '1500 ₽',
    '10000 ₽',
    '1500 ₽'
  ),
]; // заглушка

const PartnershipTable: FC = () => {
  // const [data, setData] = useState([]); // хук для получения данных с сервера

  return (
    <TableContainer component={Paper} className={tableStyles.container}>
      <h2 className={tableStyles.heading}>Статистика рефераллов</h2>
      <Table className={tableStyles.table}>
        <TableHead>
          <TableRow className={tableStyles.row}>
            <TableCell className={tableStyles.cell}>
              Перешли по ссылке
            </TableCell>
            <TableCell className={tableStyles.cell} align="left">
              Регистрация
            </TableCell>
            <TableCell className={tableStyles.cell} align="left">
              Оплата
            </TableCell>
            <TableCell className={tableStyles.cell} align="left">
              Сумма
            </TableCell>
            <TableCell className={tableStyles.cell} align="left">
              Комиссия
            </TableCell>
            <TableCell className={tableStyles.cell} align="left">
              Выплачено
            </TableCell>
            <TableCell className={tableStyles.cell} align="left">
              Выход
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.linkTaps} className={tableStyles.row}>
              <TableCell
                component="th"
                scope="row"
                className={tableStyles.cell}
              >
                {row.linkTaps}
              </TableCell>
              <TableCell align="left" className={tableStyles.cell}>
                {row.regs}
              </TableCell>
              <TableCell align="left" className={tableStyles.cell}>
                {row.status}
              </TableCell>
              <TableCell align="left" className={tableStyles.cell}>
                {row.sum}
              </TableCell>
              <TableCell align="left" className={tableStyles.cell}>
                {row.fee}
              </TableCell>
              <TableCell align="left" className={tableStyles.cell}>
                {row.paid}
              </TableCell>
              <TableCell align="left" className={tableStyles.cell}>
                {row.withdrawal}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default PartnershipTable;
