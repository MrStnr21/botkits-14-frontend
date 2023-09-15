import { FC } from 'react';
import { ReactSVG } from 'react-svg';

import PlusIcon from '../../../images/icon/24x24/constructor/plus.svg';

import stylesConstructorAddButton from './constructor-add-button.module.scss';

export interface IConstructorAddButton {
  buttonHtmlType?: 'button' | 'submit' | 'reset';
  onClick?: VoidFunction;
  disabled?: boolean;
  children: React.ReactNode;
}

const ConstructorAddButton: FC<IConstructorAddButton> = ({
  buttonHtmlType = 'button',
  onClick,
  disabled,
  children,
}): JSX.Element => {
  return (
    <button
      className={stylesConstructorAddButton.button}
      onClick={onClick}
      // eslint-disable-next-line react/button-has-type
      type={buttonHtmlType}
      disabled={disabled}
    >
      <ReactSVG src={PlusIcon} />
      <p className={stylesConstructorAddButton.text}>{children}</p>
    </button>
  );
};

export default ConstructorAddButton;
