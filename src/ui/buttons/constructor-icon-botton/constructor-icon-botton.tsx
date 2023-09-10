import { FC } from 'react';
import { ReactSVG } from 'react-svg';

import stylesConstructorIconBotton from './constructor-icon-botton.module.scss';

export interface IConstructorIconBotton {
  buttonHtmlType?: 'button' | 'submit' | 'reset';
  onClick?: VoidFunction;
  disabled?: boolean;
  icon: string;
}

const ConstructorIconBotton: FC<IConstructorIconBotton> = ({
  buttonHtmlType = 'button',
  onClick,
  disabled,
  icon,
}) => {
  return (
    <button
      className={stylesConstructorIconBotton.button}
      onClick={onClick}
      // eslint-disable-next-line react/button-has-type
      type={buttonHtmlType}
      disabled={disabled}
    >
      <ReactSVG src={icon} />
    </button>
  );
};

export default ConstructorIconBotton;
