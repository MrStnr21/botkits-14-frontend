import { FC } from 'react';
import styles from './button-icon.module.scss';
import ButtonBasic, { IButtonBasic } from '../button-basic/button-basic';

export interface IButtonIcon extends IButtonBasic {
  isIconColored?: boolean;
  btnStyle?: string;
  ref?: HTMLButtonElement | undefined;
}

/**
 * Компонент-основа для кнопки с иконкой.
 *
 * @param {IconName} icon - имя иконки
 * @param {boolean} isIconColored - допускает ли иконка изменение цвета через css
 * @param {string} btnStyle - стилизация кнопки
 * @param {() => void | ((value: unknown) => void)} onClick - обработчик клика
 * @default 'button' - тип кнопки
 * @param {HTMLButtonElement | null} ref - Ref для элемента кнопки
 */
const ButtonIcon: FC<IButtonIcon> = ({
  btnStyle = '',
  isIconColored = true,
  ref,
  ...rest
}) => {
  return (
    <ButtonBasic
      iconType="basic"
      btnStyle={`${styles.button} ${btnStyle}`}
      isIconColored={isIconColored}
      {...rest}
    />
  );
};

export default ButtonIcon;
