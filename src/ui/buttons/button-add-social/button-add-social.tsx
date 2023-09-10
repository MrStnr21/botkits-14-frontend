import { FC } from 'react';
import cn from 'classnames';

import stylesButtonAddSocial from './button-add-social.module.scss';

export interface IButtonAddSocial {
  buttonHtmlType?: 'button' | 'submit' | 'reset';
  onClick?: VoidFunction;
  disabled?: boolean;
  children: React.ReactNode;
  social: string;
}

const ButtonAddSocial: FC<IButtonAddSocial> = ({
  buttonHtmlType = 'button',
  onClick,
  disabled,
  children,
  social,
}) => {
  const iconCn = cn(stylesButtonAddSocial.icon, stylesButtonAddSocial[social]);

  return (
    <button
      className={stylesButtonAddSocial.button}
      onClick={onClick}
      // eslint-disable-next-line react/button-has-type
      type={buttonHtmlType}
      disabled={disabled}
    >
      <div className={iconCn} />
      <p className={stylesButtonAddSocial.text}>{children}</p>
    </button>
  );
};

export default ButtonAddSocial;
