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
  status: boolean,
  sum: string,
  fee: string,
  paid: string,
  withdrawal: string
) {
  return { linkTaps, regs, status, sum, fee, paid, withdrawal };
} // переделать в интерфейс позже

const rows = [
  createData('28 человек', 15, true, '5 000 ₽', '1500 ₽', '4500 ₽', '1500 ₽'),
  createData('17 человек', 8, true, '15000 ₽', '4500 ₽', '8200 ₽', '4500 ₽'),
  createData('10 человек', 10, true, '5000 ₽', '1500 ₽', '10000 ₽', '1500 ₽'),
  createData('18 человек', 10, true, '5000 ₽', '1500 ₽', '10000 ₽', '1500 ₽'),
]; // заглушка

interface IReferralsTable {
  isReferralsTableVisible: boolean;
}

const ReferralsTable: FC<IReferralsTable> = ({ isReferralsTableVisible }) => {
  // const [data, setData] = useState([]); // хук для получения данных с сервера
  // const [loading, setLoading] = useState(true); // хук для отображения прелоадера
  const isMobile = useMediaQuery('(max-width: 860px)');
  const maxTableHeight =
    isReferralsTableVisible && isMobile ? '845px' : '240px';

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
      className={stylesReferralsTable.referrals}
      style={{ maxHeight: maxTableHeight }}
    >
      {isMobile ? (
        <>
          {rows.map((row) => (
            <Table className={stylesReferralsTable.referrals__table}>
              <TableHead className={stylesReferralsTable.referrals__tableHead}>
                <TableRow className={stylesReferralsTable.referrals__row}>
                  <TableCell className={stylesReferralsTable.referrals__cell}>
                    Перешли по ссылке
                  </TableCell>
                  <TableCell
                    className={stylesReferralsTable.referrals__cell}
                    align="left"
                  >
                    Регистраций
                  </TableCell>
                  <TableCell
                    className={stylesReferralsTable.referrals__cell}
                    align="left"
                  >
                    Оплата
                  </TableCell>
                  <TableCell
                    className={stylesReferralsTable.referrals__cell}
                    align="left"
                  >
                    Сумма
                  </TableCell>
                  <TableCell
                    className={stylesReferralsTable.referrals__cell}
                    align="left"
                  >
                    Комиссия
                  </TableCell>
                  <TableCell
                    className={stylesReferralsTable.referrals__cell}
                    align="left"
                  >
                    Выплачено
                  </TableCell>
                  <TableCell
                    className={stylesReferralsTable.referrals__cell}
                    align="left"
                  >
                    Вывод
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody className={stylesReferralsTable.referrals__tableBody}>
                <TableRow className={stylesReferralsTable.referrals__row}>
                  <TableCell
                    align="right"
                    className={`${stylesReferralsTable.referrals__cell} + ${stylesReferralsTable.referrals__bodyCell}`}
                  >
                    {row.linkTaps}
                  </TableCell>
                  <TableCell
                    align="right"
                    className={`${stylesReferralsTable.referrals__cell} + ${stylesReferralsTable.referrals__bodyCell}`}
                  >
                    {row.regs}
                  </TableCell>
                  <TableCell
                    align="right"
                    className={`${stylesReferralsTable.referrals__cell} +
                     ${
                       row.status
                         ? stylesReferralsTable.referrals__statusDone
                         : stylesReferralsTable.referrals__statusProcessing
                     } + ${stylesReferralsTable.referrals__bodyCell}`}
                  >
                    {row.status ? 'Оплачено' : 'В обработке'}
                  </TableCell>
                  <TableCell
                    align="right"
                    className={`${stylesReferralsTable.referrals__cell} + ${stylesReferralsTable.referrals__bodyCell}`}
                  >
                    {row.sum}
                  </TableCell>
                  <TableCell
                    align="right"
                    className={`${stylesReferralsTable.referrals__cell} + ${stylesReferralsTable.referrals__bodyCell}`}
                  >
                    {row.fee}
                  </TableCell>
                  <TableCell
                    align="right"
                    className={`${stylesReferralsTable.referrals__cell} + ${stylesReferralsTable.referrals__bodyCell}`}
                  >
                    {row.paid}
                  </TableCell>
                  <TableCell
                    align="right"
                    className={`${stylesReferralsTable.referrals__cell} + ${stylesReferralsTable.referrals__bodyCell}`}
                  >
                    {row.withdrawal}
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          ))}
        </>
      ) : (
        <Table className={stylesReferralsTable.referrals__table}>
          <TableHead className={stylesReferralsTable.referrals__tableHead}>
            <TableRow className={stylesReferralsTable.referrals__row}>
              <TableCell className={stylesReferralsTable.referrals__cell}>
                Перешли по ссылке
              </TableCell>
              <TableCell
                className={stylesReferralsTable.referrals__cell}
                align="left"
              >
                Регистраций
              </TableCell>
              <TableCell
                className={stylesReferralsTable.referrals__cell}
                align="left"
              >
                Оплата
              </TableCell>
              <TableCell
                className={stylesReferralsTable.referrals__cell}
                align="left"
              >
                Сумма
              </TableCell>
              <TableCell
                className={stylesReferralsTable.referrals__cell}
                align="left"
              >
                Комиссия
              </TableCell>
              <TableCell
                className={stylesReferralsTable.referrals__cell}
                align="left"
              >
                Выплачено
              </TableCell>
              <TableCell
                className={stylesReferralsTable.referrals__cell}
                align="right"
              >
                Вывод
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody className={stylesReferralsTable.referrals__tableBody}>
            {rows.map((row) => (
              <TableRow className={stylesReferralsTable.referrals__row}>
                <TableCell
                  component="th"
                  scope="row"
                  className={stylesReferralsTable.referrals__cell}
                >
                  {row.linkTaps}
                </TableCell>
                <TableCell
                  align="left"
                  className={stylesReferralsTable.referrals__cell}
                >
                  {row.regs}
                </TableCell>
                <TableCell
                  align="left"
                  className={`${stylesReferralsTable.referrals__cell} +
                  ${
                    row.status
                      ? stylesReferralsTable.referrals__statusDone
                      : stylesReferralsTable.referrals__statusProcessing
                  }`}
                >
                  {row.status ? 'Оплачено' : 'В обработке'}
                </TableCell>
                <TableCell
                  align="left"
                  className={stylesReferralsTable.referrals__cell}
                >
                  {row.sum}
                </TableCell>
                <TableCell
                  align="left"
                  className={stylesReferralsTable.referrals__cell}
                >
                  {row.fee}
                </TableCell>
                <TableCell
                  align="left"
                  className={stylesReferralsTable.referrals__cell}
                >
                  {row.paid}
                </TableCell>
                <TableCell
                  align="right"
                  className={stylesReferralsTable.referrals__cell}
                >
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
