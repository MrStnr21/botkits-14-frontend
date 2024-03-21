import { FC } from 'react';

import cn from 'classnames';

import styles from './button-add-social.module.scss';
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
}) => {
  const iconCn = cn(styles.icon, styles[social]);

  return (
    <button
      className={`${styles.button} ${styles[extraClass]} ${
        size === 'small' ? styles.buttonSmall : ''
      }`}
      onClick={onClick}
      // eslint-disable-next-line react/button-has-type
      type={buttonHtmlType}
      disabled={disabled}
    >
      <div
        className={`${iconCn} ${size === 'small' ? styles.buttonSmall : ''}`}
      />
      {size === 'small' ? (
        ''
      ) : (
        <Typography tag="p" className={styles.text}>
          {children}
        </Typography>
      )}
    </button>
  );
};

export default ButtonAddSocial;
