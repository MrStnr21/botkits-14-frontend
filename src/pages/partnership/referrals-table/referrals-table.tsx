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

import stylesReferralsTable from './referrals-table.module.scss';

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
} // переделать в интерфейс позже

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
  createData(
    '10 человек',
    10,
    'Оплачено',
    '5000 ₽',
    '1500 ₽',
    '10000 ₽',
    '1500 ₽'
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
  createData(
    '10 человек',
    10,
    'Оплачено',
    '5000 ₽',
    '1500 ₽',
    '10000 ₽',
    '1500 ₽'
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

const ReferralsTable: FC = () => {
  // const [data, setData] = useState([]); // хук для получения данных с сервера
  // const [loading, setLoading] = useState(true); // хук для отображения прелоадера
  const isMobile = useMediaQuery('(max-width: 860px)');

  // useEffect(() => {
  // здесь будет запрос к серверу

  // setData(serverData);
  // setLoading(false);
  // }, []);

  // if (loading) {
  //   return <div>Получение данных...</div>; // вынести логику в общий для таблиц компонент?
  // }

  return (
    <TableContainer
      component={Paper}
      className={stylesReferralsTable.tableContainer}
    >
      {isMobile ? (
        <>
          {rows.map((row) => (
            <Table key={row.linkTaps} className={stylesReferralsTable.table}>
              <TableHead className={stylesReferralsTable.tableHead}>
                <TableRow className={stylesReferralsTable.row}>
                  <TableCell className={stylesReferralsTable.cell}>
                    Перешли по ссылке
                  </TableCell>
                  <TableCell className={stylesReferralsTable.cell} align="left">
                    Регистрация
                  </TableCell>
                  <TableCell className={stylesReferralsTable.cell} align="left">
                    Оплата
                  </TableCell>
                  <TableCell className={stylesReferralsTable.cell} align="left">
                    Сумма
                  </TableCell>
                  <TableCell className={stylesReferralsTable.cell} align="left">
                    Комиссия
                  </TableCell>
                  <TableCell className={stylesReferralsTable.cell} align="left">
                    Выплачено
                  </TableCell>
                  <TableCell className={stylesReferralsTable.cell} align="left">
                    Вывод
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody className={stylesReferralsTable.tableBody}>
                <TableRow className={stylesReferralsTable.row}>
                  <TableCell
                    align="right"
                    className={`${stylesReferralsTable.cell} + ${stylesReferralsTable.bodyCell}`}
                  >
                    {row.linkTaps}
                  </TableCell>
                  <TableCell
                    align="right"
                    className={`${stylesReferralsTable.cell} + ${stylesReferralsTable.bodyCell}`}
                  >
                    {row.regs}
                  </TableCell>
                  <TableCell
                    align="right"
                    className={`${stylesReferralsTable.cell} + ${stylesReferralsTable.bodyCell}`}
                  >
                    {row.status}
                  </TableCell>
                  <TableCell
                    align="right"
                    className={`${stylesReferralsTable.cell} + ${stylesReferralsTable.bodyCell}`}
                  >
                    {row.sum}
                  </TableCell>
                  <TableCell
                    align="right"
                    className={`${stylesReferralsTable.cell} + ${stylesReferralsTable.bodyCell}`}
                  >
                    {row.fee}
                  </TableCell>
                  <TableCell
                    align="right"
                    className={`${stylesReferralsTable.cell} + ${stylesReferralsTable.bodyCell}`}
                  >
                    {row.paid}
                  </TableCell>
                  <TableCell
                    align="right"
                    className={`${stylesReferralsTable.cell} + ${stylesReferralsTable.bodyCell}`}
                  >
                    {row.withdrawal}
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          ))}
        </>
      ) : (
        <Table className={stylesReferralsTable.table}>
          <TableHead className={stylesReferralsTable.tableHead}>
            <TableRow className={stylesReferralsTable.row}>
              <TableCell className={stylesReferralsTable.cell}>
                Перешли по ссылке
              </TableCell>
              <TableCell className={stylesReferralsTable.cell} align="left">
                Регистрация
              </TableCell>
              <TableCell className={stylesReferralsTable.cell} align="left">
                Оплата
              </TableCell>
              <TableCell className={stylesReferralsTable.cell} align="left">
                Сумма
              </TableCell>
              <TableCell className={stylesReferralsTable.cell} align="left">
                Комиссия
              </TableCell>
              <TableCell className={stylesReferralsTable.cell} align="left">
                Выплачено
              </TableCell>
              <TableCell className={stylesReferralsTable.cell} align="right">
                Вывод
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody className={stylesReferralsTable.tableBody}>
            {rows.map((row) => (
              <TableRow key={row.linkTaps} className={stylesReferralsTable.row}>
                <TableCell
                  component="th"
                  scope="row"
                  className={stylesReferralsTable.cell}
                >
                  {row.linkTaps}
                </TableCell>
                <TableCell align="left" className={stylesReferralsTable.cell}>
                  {row.regs}
                </TableCell>
                <TableCell align="left" className={stylesReferralsTable.cell}>
                  {row.status}
                </TableCell>
                <TableCell align="left" className={stylesReferralsTable.cell}>
                  {row.sum}
                </TableCell>
                <TableCell align="left" className={stylesReferralsTable.cell}>
                  {row.fee}
                </TableCell>
                <TableCell align="left" className={stylesReferralsTable.cell}>
                  {row.paid}
                </TableCell>
                <TableCell align="right" className={stylesReferralsTable.cell}>
                  {row.withdrawal}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </TableContainer>
  );
};

export default ReferralsTable;
