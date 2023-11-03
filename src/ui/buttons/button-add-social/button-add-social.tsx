import { FC } from 'react';

import cn from 'classnames';

import stylesButtonAddSocial from './button-add-social.module.scss';
import Typography from '../../typography/typography';

export interface IButtonAddSocial {
  buttonHtmlType?: 'button' | 'submit' | 'reset';
  onClick?: VoidFunction;
  disabled?: boolean;
  children?: React.ReactNode;
  social: string;
  extraClass?: string;
  size?: 'small';
}

const ButtonAddSocial: FC<IButtonAddSocial> = ({
  buttonHtmlType = 'button',
  onClick,
  disabled,
  children,
  social,
  extraClass = '',
  size,
}): JSX.Element => {
  const iconCn = cn(stylesButtonAddSocial.icon, stylesButtonAddSocial[social]);

  return (
    <button
      className={`${stylesButtonAddSocial.button} ${
        stylesButtonAddSocial[extraClass]
      } ${size === 'small' ? stylesButtonAddSocial.buttonSmall : ''}`}
      onClick={onClick}
      // eslint-disable-next-line react/button-has-type
      type={buttonHtmlType}
      disabled={disabled}
    >
      <div
        className={`${iconCn} ${
          size === 'small' ? stylesButtonAddSocial.buttonSmall : ''
        }`}
      />
      {size === 'small' ? (
        ''
      ) : (
        <Typography tag="p" className={stylesButtonAddSocial.text}>
          {children}
        </Typography>
      )}
    </button>
  );
};

export default ButtonAddSocial;
