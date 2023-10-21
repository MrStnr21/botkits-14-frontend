import { FC } from 'react';
import { ReactSVG } from 'react-svg';

import PlusIcon from '../../../images/icon/24x24/constructor/plus.svg';
import Horizontal from '../../../images/icon/24x24/constructor/horizontal.svg';
import Vertical from '../../../images/icon/24x24/constructor/vertical.svg';

import stylesConstructorAddButton from './constructor-add-button.module.scss';

export interface IConstructorAddButton {
  buttonHtmlType?: 'button' | 'submit' | 'reset';
  onClick?: VoidFunction;
  disabled?: boolean;
  children: React.ReactNode;
  icon?: 'horizontal inline' | 'vertical inline' | 'add';
}

const ConstructorAddButton: FC<IConstructorAddButton> = ({
  buttonHtmlType = 'button',
  onClick,
  disabled,
  children,
  icon = 'add',
}) => {
  const getIcon = () => {
    switch (icon) {
      case 'add': {
        return PlusIcon;
      }
      case 'horizontal inline': {
        return Horizontal;
      }
      case 'vertical inline': {
        return Vertical;
      }
      default: {
        return PlusIcon;
      }
    }
  };
  return (
    <button
      className={stylesConstructorAddButton.button}
      onClick={onClick}
      // eslint-disable-next-line react/button-has-type
      type={buttonHtmlType}
      disabled={disabled}
    >
      <ReactSVG src={getIcon()} />
      <p className={stylesConstructorAddButton.text}>{children}</p>
    </button>
  );
};

export default ConstructorAddButton;
