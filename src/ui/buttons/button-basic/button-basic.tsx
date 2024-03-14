import { FC, HTMLProps } from 'react';
import styles from './button-basic.module.scss';
import Icon from '../../icon/icon';
import { IconName } from '../../icon/utils';

export interface IButtonBasic extends HTMLProps<HTMLButtonElement> {
  /** Текст на кнопке */
  text?: string;
  /** Имя иконки */
  icon?: IconName;
  iconType?: 'basic' | 'left' | 'right';
  isIconColored?: boolean;
  btnClass?: string;
  onClick?: () => void | ((value: unknown) => void);
  type?: 'button' | 'submit' | 'reset';
}

const ButtonBasic: FC<IButtonBasic> = ({
  text,
  icon,
  iconType = 'basic',
  isIconColored = false,
  btnClass,
  type = 'button',
  ...rest
}) => {
  return (
    <button
      {...rest}
      // eslint-disable-next-line react/button-has-type
      type={type}
      className={`${styles.buttonBasic} ${btnClass}`}
    >
      {icon && iconType === 'left' && (
        <Icon extraClass={styles.icon} icon={icon} isColored={isIconColored} />
      )}
      {text && <span className={styles.text}>{text}</span>}
      {icon && iconType === 'basic' && (
        <Icon extraClass="icon" icon={icon} isColored={isIconColored} />
      )}
      {icon && iconType === 'right' && (
        <Icon extraClass={styles.icon} icon={icon} isColored={isIconColored} />
      )}
    </button>
  );
};

export default ButtonBasic;
