import { HTMLProps, ReactNode, forwardRef } from 'react';
import styles from './button-basic.module.scss';
import Icon from '../../icon/icon';
import { IconName } from '../../icon/utils';

export interface IButtonBasic
  extends Omit<HTMLProps<HTMLButtonElement>, 'ref'> {
  children?: ReactNode;
  icon?: IconName;
  iconType?: 'basic' | 'left' | 'right';
  isIconColored?: boolean;
  btnStyle?: string;
  onClick?: () => void | ((value: unknown) => void);
  type?: 'button' | 'submit' | 'reset';
  ref?: HTMLButtonElement | null;
}

/**
 * Компонент-основа для кнопки.
 *
 * @param {ReactNode} children - текст кнопки
 * @param {IconName} icon - имя иконки
 * @param {'basic' | 'left' | 'right'} iconType - положение иконки - по центру либо слева, слева или справа от текста
 * @param {boolean} isIconColored - допускает ли иконка изменение цвета через css
 * @param {string} btnStyle - стилизация кнопки
 * @param {() => void | ((value: unknown) => void)} onClick - обработчик клика
 * @param {'button' | 'submit' | 'reset'} type - тип кнопки
 * @default 'button'
 * @param {HTMLButtonElement | null} ref - Ref для элемента кнопки
 */
const ButtonBasic = forwardRef<HTMLButtonElement, IButtonBasic>(
  (
    {
      children,
      icon,
      iconType,
      isIconColored = false,
      btnStyle,
      type = 'button',
      ...rest
    },
    ref
  ) => {
    return (
      <button
        {...rest}
        // eslint-disable-next-line react/button-has-type
        type={type}
        ref={ref}
        className={`${styles.buttonBasic} ${btnStyle}`}
      >
        {icon && iconType === 'left' && (
          <Icon icon={icon} isColored={isIconColored} />
        )}
        {icon && iconType === 'basic' && (
          <Icon icon={icon} isColored={isIconColored} />
        )}
        {children && !(iconType === 'basic') && (
          <span className={styles.text}>{children}</span>
        )}
        {icon && iconType === 'right' && (
          <Icon icon={icon} isColored={isIconColored} />
        )}
      </button>
    );
  }
);

export default ButtonBasic;
