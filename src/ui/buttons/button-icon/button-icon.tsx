import { FC } from 'react';
import cn from 'classnames/bind';
import styles from './button-icon.module.scss';
import ButtonBasic, { IButtonBasic } from '../button-basic/button-basic';

export interface IButtonIcon extends IButtonBasic {
  /** Можно ли перекрашивать иконку */
  isIconColored?: boolean;
  /** Внешний вид кнопки */
  btnStyle?: string;
  /** Дополнительный класс */
  extraClass?: string;
}

const ButtonIcon: FC<IButtonIcon> = ({
  btnStyle = '',
  isIconColored = true,
  extraClass = '',
  ...rest
}) => {
  const cx = cn.bind(styles);
  const buttonCn = cx('button', btnStyle, extraClass);

  return (
    <ButtonBasic
      iconType="basic"
      btnClass={buttonCn}
      {...rest}
      isIconColored={isIconColored}
    />
  );
};

export default ButtonIcon;
