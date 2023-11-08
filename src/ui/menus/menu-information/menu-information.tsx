import { FC, MouseEventHandler } from 'react';
import cn from 'classnames';
import stylesMenuInformation from './menu-information.module.scss';

export interface IMenuInformation {
  isActive?: boolean;
  type: 'isInformation' | 'isNotifications' | 'isBuilder';
  width?: number;
  height?: number;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  valueOne?: string;
  valueTwo?: string;
}

const MenuInformation: FC<IMenuInformation> = ({
  isActive = false,
  type = 'isInformation',
  width = 125,
  height = 40,
  onClick,
  valueOne = 'Информация',
  valueTwo = 'Файлы',
}) => {
  let boxClassName = cn(stylesMenuInformation.button);

  if (type === 'isNotifications') {
    boxClassName = stylesMenuInformation.notifications;
  }

  if (type === 'isBuilder') {
    boxClassName = stylesMenuInformation.builder;
  }

  return (
    <nav className={stylesMenuInformation.nav}>
      <button
        type="button"
        style={{ width: `${width}px`, height: `${height}px` }}
        className={boxClassName}
        disabled={isActive}
        onClick={onClick}
      >
        {valueOne}
      </button>
      <button
        type="button"
        style={{ width: `${width}px`, height: `${height}px` }}
        className={boxClassName}
        disabled={!isActive}
        onClick={onClick}
      >
        {valueTwo}
      </button>
    </nav>
  );
};

export default MenuInformation;
