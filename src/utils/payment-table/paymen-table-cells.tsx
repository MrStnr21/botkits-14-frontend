import cn from 'classnames';
import Typography from '../../ui/typography/typography';
import { convertTimeFormat } from '../timeFormat';
import style from './paymen-table-cells.module.scss';

export const headComponent = (label: string) => (
  <Typography className={style.text} tag="p">
    {label}
  </Typography>
);

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
