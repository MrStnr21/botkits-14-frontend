import { FC } from 'react';

import stylesButtonNotBackground from './button-not-background.module.scss';

export interface IButtonNotBackground {
  buttonHtmlType?: 'button' | 'submit' | 'reset';
  onClick?: VoidFunction;
  disabled?: boolean;
  children: React.ReactNode;
}

const ButtonNotBackground: FC<IButtonNotBackground> = ({
  buttonHtmlType = 'button',
  onClick,
  disabled,
  children = 'Все',
}): JSX.Element => {
  return (
    <button
      className={stylesButtonNotBackground.button}
      onClick={onClick}
      // eslint-disable-next-line react/button-has-type
      type={buttonHtmlType}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default ButtonNotBackground;
