/* eslint-disable @typescript-eslint/no-unused-vars */
import cn from 'classnames';
import Typography from '../../ui/typography/typography';
import { convertTimeFormat } from '../../utils/timeFormat';
import style from './table-cells.module.scss';
import Switcher from './switcher/switcher';
import TableInputCell from './table-input-cell/table-input-cell';
import SelectCell from './select-cell/select-cell';

/* Общее */
export const dateCell = (date: string) => (
  <Typography className={style.text} tag="span">
    {convertTimeFormat(date)}
  </Typography>
);

export const baseCell = (data: any) => (
  <Typography className={style.text} tag="span">
    {data ?? '-'}
  </Typography>
);

/* Подписки и платежи */
export const sapHeadCell = (label: string) => (
  <Typography className={style.text} tag="p">
    {label}
  </Typography>
);

export const statusCell = (status: boolean) => (
  <Typography
    tag="p"
    className={cn(
      style.text,
      status ? style.text_succsess : style.text_failure
    )}
  >
    {status ? 'Успешно' : 'Отклонено'}
  </Typography>
);

/* партнерская программа */

export const ppHeadCell = (data: string) => (
  <Typography tag="h5">{data}</Typography>
);

export const moneyCell = (data: string) => (
  <Typography className={style.text} tag="span">
    {`${data} ₽`}
  </Typography>
);

export const refStatusCell = (status: boolean) => (
  <Typography className={cn(style.text, style.text_succsess)} tag="span">
    Оплачено
  </Typography>
);

export const paymentStatusCell = (status: boolean) => (
  <Typography
    className={cn(
      style.text,
      status ? style.text_succsess : style.text_processing
    )}
    tag="span"
  >
    {status ? 'Оплачено' : 'В обработке'}
  </Typography>
);
// Промокоды, общий доступ, пользователи:

export const checkBoxCell = (status: boolean) => <Switcher status={status} />;

export const inputCell = (value: string) => {
  return <TableInputCell value={value} />;
};

export const statusPromoCell = (status: boolean) => (
  <Typography
    tag="p"
    className={cn(
      style.text,
      status ? style.text_succsess : style.text_failure
    )}
  >
    {status ? 'Активен' : 'Неактивен'}
  </Typography>
);

export const selectCell = (start: boolean) => <SelectCell />;
