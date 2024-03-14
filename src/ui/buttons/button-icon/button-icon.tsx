import { FC } from 'react';
import cn from 'classnames/bind';
import styles from './button-icon.module.scss';
import ButtonBasic, { IButtonBasic } from '../button-basic/button-basic';

export interface IButtonIcon extends IButtonBasic {
  isIconColored?: boolean;
  btnStyle?: string;
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
