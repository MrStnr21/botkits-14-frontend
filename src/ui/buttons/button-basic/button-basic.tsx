import { FC, HTMLProps, ReactNode } from 'react';
import styles from './button-basic.module.scss';
import Icon from '../../icon/icon';
import { IconName } from '../../icon/utils';

export interface IButtonBasic extends HTMLProps<HTMLButtonElement> {
  /** Текст или контент кнопки */
  children?: ReactNode;
  /** Имя иконки */
  icon?: IconName;
  iconType?: 'basic' | 'left' | 'right';
  isIconColored?: boolean;
  btnStyle?: string;
  onClick?: () => void | ((value: unknown) => void);
  type?: 'button' | 'submit' | 'reset';
}

const ButtonBasic: FC<IButtonBasic> = ({
  children,
  icon,
  iconType = 'basic',
  isIconColored = false,
  btnStyle,
  type = 'button',
  ...rest
}) => {
  return (
    <button
      {...rest}
      // eslint-disable-next-line react/button-has-type
      type={type}
      className={`${styles.buttonBasic} ${btnStyle}`}
    >
      {icon && iconType === 'left' && (
        <Icon icon={icon} isColored={isIconColored} />
      )}
      {children && <span className={styles.text}>{children}</span>}
      {icon && iconType === 'basic' && (
        <Icon icon={icon} isColored={isIconColored} />
      )}
      {icon && iconType === 'right' && (
        <Icon icon={icon} isColored={isIconColored} />
      )}
    </button>
  );
};

export default ButtonBasic;
