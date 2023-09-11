// to do: Menu
// https://trello.com/c/n9wbVo8O/12-%D0%B2%D1%81%D0%BF%D0%BB%D1%8B%D0%B2%D0%B0%D1%8E%D1%89%D0%B5%D0%B5-%D0%BC%D0%B5%D0%BD%D1%8E
// https://trello.com/c/gUWxjeoo/17-%D0%BC%D0%B5%D0%BD%D1%8E-%D1%83%D1%81%D0%BB%D0%BE%D0%B2%D0%B8%D0%B9

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
