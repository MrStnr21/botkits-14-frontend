import { FC, MouseEventHandler } from 'react';
import { v4 as uuidv4 } from 'uuid';
import cn from 'classnames';

import stylesMenuSimple from './menu-simple.module.scss';

export interface IMenuSimple {
  buttons: string[];
  isScroll?: boolean;
  size?: 'small' | 'medium' | 'default' | 'large';
  isActive?: boolean;
  top?: number;
  left?: number;
  className?: string;
  onClick?: MouseEventHandler<HTMLDivElement>;
}

const MenuSimple: FC<IMenuSimple> = ({
  buttons,
  isScroll = false,
  size = 'default',
  isActive = false,
  top = 0,
  left = 0,
  className,
  onClick,
}) => {
  let boxClassName = cn(
    stylesMenuSimple.box,
    stylesMenuSimple[size],
    className
  );

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
            <li className={stylesMenuSimple.li} key={uuidv4()}>
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
