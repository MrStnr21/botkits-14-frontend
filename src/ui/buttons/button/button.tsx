// to do: Button
// https://trello.com/c/Raesb3hx/5-buttons-common-1
// копки в первом ряду с default до disabled

// https://trello.com/c/ZimEto8x/7-buttons-contsructor

import React, { FC } from 'react';
import cn from 'classnames';
import { ReactSVG } from 'react-svg';

import PlusIcon from '../../../images/icon/24x24/screen navigation/plus.svg';

import stylesButton from './button.module.scss';

interface IButton {
  size?: 'medium' | 'large';
  color?: 'blue' | 'green' | 'grey';
  buttonHtmlType?: 'button' | 'submit' | 'reset';
  onClick?: VoidFunction;
  disabled?: boolean;
  children?: React.ReactNode;
}

const Button: FC<IButton> = ({
  size = 'medium',
  color = 'green',
  buttonHtmlType = 'button',
  onClick,
  disabled,
  children,
}) => {
  const mainCn = cn(
    stylesButton.button,
    stylesButton[size],
    stylesButton[color],
    children ? stylesButton.default : stylesButton.circle
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
