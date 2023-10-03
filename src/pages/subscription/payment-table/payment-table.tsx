import { FC } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { v4 as uuidv4 } from 'uuid';

const cols = ['Дата', 'Сумма', 'Операция', 'Примечание', 'Статус'];

export const rows = [
  {
    date: '2023-09-17T14:08:39.904Z',
    amount: 1000,
    successful: 'true',
    operation: 'Списание',
    note: 'Пополнение счета',
  },
  {
    date: '2022-03-09T11:22:33.456Z',
    amount: 523,
    successful: 'false',
    operation: 'Пополнение',
    note: 'Оплата услуг',
  },
  {
    date: '2022-06-15T14:30:45.789Z',
    amount: 275,
    successful: 'true',
    operation: 'Списание',
    note: 'Возврат средств',
  },
  {
    date: '2022-08-20T09:05:12.345Z',
    amount: 789,
    successful: 'true',
    operation: 'Пополнение',
    note: 'Пополнение счета',
  },
  {
    date: '2023-01-05T16:45:30.678Z',
    amount: 432,
    successful: 'false',
    operation: 'Списание',
    note: 'Оплата услуг',
  },
  {
    date: '2022-10-12T12:15:00.123Z',
    amount: 600,
    successful: 'true',
    operation: 'Пополнение',
    note: 'Возврат средств',
  },
];

export type PaymentData = {
  date: string;
  amount: number;
  successful: string;
  operation: string;
  note: string;
};

type Props = {
  tableData: PaymentData[];
};

export const PaymentTable: FC<Props> = ({ tableData }) => {
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            {cols.map((col) => (
              <TableCell key={uuidv4()}>{col}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map((row) => (
            <TableRow key={uuidv4()}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.amount}</TableCell>
              <TableCell>{row.operation}</TableCell>
              <TableCell>{row.note}</TableCell>
              <TableCell>{row.successful}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
