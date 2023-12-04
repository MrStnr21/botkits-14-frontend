/* eslint-disable @typescript-eslint/no-unused-vars */
import cn from 'classnames';
import { ChangeEvent, FC, useEffect, useRef, useState } from 'react';
import Typography from '../../ui/typography/typography';
import { convertTimeFormat } from '../../utils/timeFormat';
import style from './table-cells.module.scss';
import Switcher from '../../ui/checkboxes/switcher/switcher';
import MoreIcon from '../icons/More/MoreIcon';
import Input from '../../ui/inputs/input/input';
import InputDialogsues from '../../ui/inputs/input-dialogues/input-dialogues';
import DialogMobilePopup from '../chat/chat-dialogue/dialog-mobile-popup/dialog-mobile-popup';
import Menu from '../../ui/menus/menu/menu';
import MoreCell from '../table-component/moreCell/more-cell';

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
// Общий доступ
export const checkBoxCell = (status: boolean) => <Switcher status={status} />;
// Промокоды
interface IProps {
  value: string;
  onChange?: any;
}
const EditablePromoCell: FC<IProps> = ({ value, onChange }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [inpValue, setValue] = useState('промокод');

  const handleDoubleClick = () => {
    setIsEditing(true);
  };

  const handleBlur = () => {
    setIsEditing(false);
    return null;
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
    setValue(e.target.value);
  };

  return isEditing ? (
    <InputDialogsues onChange={handleChange} value={value} />
  ) : (
    <span onClick={handleDoubleClick}>{value}</span>
  );
};
export default EditablePromoCell;

export const inputCell = (value: string) => {
  return <EditablePromoCell value={value} />;
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
// Ячейка таблицы с кнопкой "три точки"
export const menuCell = () => <MoreCell />;
