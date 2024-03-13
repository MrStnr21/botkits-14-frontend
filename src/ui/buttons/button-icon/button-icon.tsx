import { FC } from 'react';
import cn from 'classnames/bind';
import styles from './button-icon.module.scss';
import ButtonBasic, { IButtonBasic } from '../button-basic/button-basic';

type ButtonThemes = 'whiteBlack' | 'whiteGray' | 'whiteBlue';

export interface IButtonIcon extends IButtonBasic {
  btnSize?: 'xsmall' | 'small' | 'medium';
  isIconColored?: boolean;
  btnStyle?: string | ButtonThemes;
  extraClass?: string;
}

const ButtonIcon: FC<IButtonIcon> = ({
  btnSize = '',
  btnStyle = '',
  isIconColored = true,
  extraClass = '',
  ...rest
}) => {
  const cx = cn.bind(styles);
  const buttonCn = cx('button', btnSize, btnStyle, extraClass);

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
