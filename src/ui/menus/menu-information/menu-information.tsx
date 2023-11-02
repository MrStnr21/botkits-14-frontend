import { FC, MouseEventHandler } from 'react';

import stylesMenuInformation from './menu-information.module.scss';

export interface IMenuInformation {
  isActive?: boolean;
  width?: number;
  height?: number;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  valueOne?: string;
  valueTwo?: string;
}

const MenuInformation: FC<IMenuInformation> = ({
  isActive = false,
  width = 125,
  height = 40,
  onClick,
  valueOne = 'Информация',
  valueTwo = 'Файлы',
}) => {
  return (
    <nav className={stylesMenuInformation.nav}>
      <button
        type="button"
        className={stylesMenuInformation.button}
        style={{ width: `${width}px`, height: `${height}px` }}
        disabled={isActive}
        onClick={onClick}
      >
        {valueOne}
      </button>
      <button
        type="button"
        className={stylesMenuInformation.button}
        style={{ width: `${width}px`, height: `${height}px` }}
        disabled={!isActive}
        onClick={onClick}
      >
        {valueTwo}
      </button>
    </nav>
  );
};

export default MenuInformation;
