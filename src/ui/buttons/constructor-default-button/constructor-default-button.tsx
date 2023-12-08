import { FC } from 'react';

import stylesConstructorDefaultButton from './constructor-default-button.module.scss';

export interface IConstructorDefaultButton {
  buttonHtmlType?: 'button' | 'submit' | 'reset';
  onClick?: VoidFunction;
  disabled?: boolean;
  children: React.ReactNode;
  isActive?: boolean;
  adaptive?: boolean;
}

const ConstructorDefaultButton: FC<IConstructorDefaultButton> = ({
  buttonHtmlType = 'button',
  onClick,
  disabled,
  children,
  isActive,
  adaptive,
}): JSX.Element => {
  return (
    <button
      className={`${
        stylesConstructorDefaultButton[isActive ? 'button_active' : 'button']
      }
        ${stylesConstructorDefaultButton[adaptive ? 'button_adaptive' : '']}`}
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
