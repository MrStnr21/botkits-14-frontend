import { FC } from 'react';

import stylesConstructorDefaultButton from './constructor-default-button.module.scss';

export interface IConstructorDefaultButton {
  buttonHtmlType?: 'button' | 'submit' | 'reset';
  onClick?: VoidFunction;
  disabled?: boolean;
  children: React.ReactNode;
}

const ConstructorDefaultButton: FC<IConstructorDefaultButton> = ({
  buttonHtmlType = 'button',
  onClick,
  disabled,
  children,
}) => {
  return (
    <button
      className={stylesConstructorDefaultButton.button}
      onClick={onClick}
      // eslint-disable-next-line react/button-has-type
      type={buttonHtmlType}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default ConstructorDefaultButton;
