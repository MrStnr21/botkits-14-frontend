import { FC } from 'react';
import { ReactSVG } from 'react-svg';

import CopyIcon from '../../../images/icon/24x24/common/copy.svg';

import stylesButtonIconCopy from './button-icon-copy.module.scss';

export interface IButtonIconCopy {
  buttonHtmlType?: 'button' | 'submit' | 'reset';
  onClick?: VoidFunction;
  disabled?: boolean;
}

const ButtonIconCopy: FC<IButtonIconCopy> = ({
  buttonHtmlType = 'button',
  onClick,
  disabled,
}) => {
  return (
    <button
      className={stylesButtonIconCopy.button}
      onClick={onClick}
      // eslint-disable-next-line react/button-has-type
      type={buttonHtmlType}
      disabled={disabled}
    >
      <ReactSVG src={CopyIcon} />
    </button>
  );
};

export default ButtonIconCopy;
