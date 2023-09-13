// to do: Button
// https://trello.com/c/Raesb3hx/5-buttons-common-1
// копки в первом ряду с default до disabled

// https://trello.com/c/ZimEto8x/7-buttons-contsructor

import React, { FC } from 'react';
import cn from 'classnames/bind';
import { ReactSVG } from 'react-svg';

import PlusIcon from '../../../images/icon/24x24/screen navigation/plus.svg';

import stylesButton from './button.module.scss';

export interface IButton {
  variant: 'default' | 'circle';
  size?: 'medium' | 'large';
  color?: 'blue' | 'green' | 'grey' | 'light-grey';
  buttonHtmlType?: 'button' | 'submit' | 'reset';
  onClick?: VoidFunction;
  disabled?: boolean;
  children?: React.ReactNode;
  active?: boolean;
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
}) => {
  const mainCn = cx('button', variant, size, color, { button_active: active });

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
