import { FC } from 'react';
import cn from 'classnames';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow, { tableRowClasses } from '@mui/material/TableRow';
import { v4 as uuidv4 } from 'uuid';
import Typography from '../../../ui/typography/typography';
import { convertTimeFormat } from '../../../utils/timeFormat';
import style from './payment-table.module.scss';

const cols = ['Дата', 'Сумма', 'Операция', 'Примечание', 'Статус'];

export const rows = [
  {
    date: '2023-09-17T14:08:39.904Z',
    amount: 1000,
    successful: true,
    operation: 'Списания',
    note: 'Пополнение счета',
  },
  {
    date: '2022-03-09T11:22:33.456Z',
    amount: 523,
    successful: false,
    operation: 'Поступления',
    note: 'Оплата услуг',
  },
  {
    date: '2022-06-15T14:30:45.789Z',
    amount: 275,
    successful: true,
    operation: 'Поступления',
    note: 'Возврат средств',
  },
  {
    date: '2022-08-20T09:05:12.345Z',
    amount: 789,
    successful: true,
    operation: 'Поступления',
    note: '',
  },
  {
    date: '2023-01-05T16:45:30.678Z',
    amount: 432,
    successful: false,
    operation: 'Списания',
    note: 'Оплата услуг',
  },
  {
    date: '2022-10-12T12:15:00.123Z',
    amount: 600,
    successful: true,
    operation: 'Поступления',
    note: 'Возврат средств',
  },
];

const StyledTableCell = styled(TableCell)(() => ({
  [`&.${tableCellClasses.head}`]: {
    border: 0,
    padding: '0 0 12px',
  },
  [`&.${tableCellClasses.body}`]: {
    border: 0,
    padding: '14px 0',
  },
}));

const StyledTableRow = styled(TableRow)(() => ({
  [`&.${tableRowClasses.hover}:hover`]: {
    backgroundColor: '#F8F9FB',
  },
}));

export type PaymentData = {
  date: string;
  amount: number;
  successful: boolean;
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
              <StyledTableCell key={uuidv4()}>
                <Typography tag="p" className={style.text}>
                  {col}
                </Typography>
              </StyledTableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map((row) => (
            <StyledTableRow key={uuidv4()} hover>
              <StyledTableCell sx={{ width: '136px' }}>
                <Typography tag="span" className={style.text}>
                  {convertTimeFormat(row.date)}
                </Typography>
              </StyledTableCell>
              <StyledTableCell sx={{ width: '88px' }}>
                <Typography tag="span" className={style.text}>
                  {`${row.operation === 'Списания' ? '-' : '+'}${row.amount}₽`}
                </Typography>
              </StyledTableCell>
              <StyledTableCell sx={{ width: '116px' }}>
                <Typography tag="span" className={style.text}>
                  {row.operation}
                </Typography>
              </StyledTableCell>
              <StyledTableCell>
                <Typography tag="span" className={style.text}>
                  {row.note || '-'}
                </Typography>
              </StyledTableCell>
              <StyledTableCell sx={{ width: '76px' }}>
                <Typography
                  tag="p"
                  className={cn(
                    style.text,
                    row.successful ? style.text_succsess : style.text_failure
                  )}
                >
                  {row.successful ? 'Успешно' : 'Отклонено'}
                </Typography>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
