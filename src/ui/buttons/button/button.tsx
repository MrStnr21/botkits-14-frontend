import React, { FC } from 'react';
import { ReactSVG } from 'react-svg';

import cn from 'classnames/bind';

import stylesButton from './button.module.scss';

import PlusIcon from '../../../images/icon/24x24/add_bot/plus.svg';

export interface IButton {
  variant: 'default' | 'circle';
  size?: 'medium' | 'large' | 'small';
  color?: 'blue' | 'green' | 'grey' | 'light-grey' | 'transparent';
  buttonHtmlType?: 'button' | 'submit' | 'reset';
  onClick?: VoidFunction;
  disabled?: boolean;
  children?: React.ReactNode;
  active?: boolean;
  className?: string;
}

const cx = cn.bind(stylesButton);

const Button: FC<IButton> = ({
  variant = 'default',
  size = 'medium',
  color = 'blue',
  buttonHtmlType = 'button',
  onClick,
  disabled,
  children,
  active,
  className,
}) => {
  const mainCn = cx(
    'button',
    variant,
    size,
    color,
    { button_active: active },
    className
  );

  return (
    <button
      className={mainCn}
      onClick={onClick}
      // eslint-disable-next-line react/button-has-type
      type={buttonHtmlType}
      disabled={disabled}
    >
      {children || <ReactSVG src={PlusIcon} />}
    </button>
  );
};

export default Button;
