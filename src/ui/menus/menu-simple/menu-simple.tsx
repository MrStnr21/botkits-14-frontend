import { FC } from 'react';

import cn from 'classnames';

import stylesMenuSimple from './menu-simple.module.scss';

export interface IMenuSimple {
  buttons: string[];
  isScroll?: boolean;
  size?: 'small' | 'medium' | 'default' | 'large';
  isActive?: boolean;
  top?: number;
  left?: number;
  onClick?: VoidFunction;
}

const MenuSimple: FC<IMenuSimple> = ({
  buttons,
  isScroll = false,
  size = 'default',
  isActive = false,
  top = 0,
  left = 0,
  onClick,
}) => {
  let boxClassName = cn(stylesMenuSimple.box, stylesMenuSimple[size]);

  if (isScroll) {
    boxClassName += ' ';
    boxClassName += stylesMenuSimple.scroll;
  }

  if (isActive) {
    boxClassName += ' ';
    boxClassName += stylesMenuSimple.active;
  }

  return (
    <div
      style={{ top: `${top}px`, left: `${left}px` }}
      className={boxClassName}
      onClick={onClick}
    >
      <ul className={stylesMenuSimple.ul}>
        {buttons.map((name) => {
          return (
            <li className={stylesMenuSimple.li}>
              <button type="button" className={stylesMenuSimple.button}>
                {name}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default MenuSimple;
