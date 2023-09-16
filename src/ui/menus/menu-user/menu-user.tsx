// to do: Menu
// https://trello.com/c/n9wbVo8O/12-%D0%B2%D1%81%D0%BF%D0%BB%D1%8B%D0%B2%D0%B0%D1%8E%D1%89%D0%B5%D0%B5-%D0%BC%D0%B5%D0%BD%D1%8E
// https://trello.com/c/gUWxjeoo/17-%D0%BC%D0%B5%D0%BD%D1%8E-%D1%83%D1%81%D0%BB%D0%BE%D0%B2%D0%B8%D0%B9

import { FC } from 'react';
import stylesMenuUser from './menu-user.module.scss';
import settingsIcon from '../../../images/icon/24x24/drop down/settings.svg';
import paymentsIcon from '../../../images/icon/24x24/drop down/payment.svg';
import exitIcon from '../../../images/icon/24x24/drop down/log out.svg';

export interface IMenuUser {
  isActive?: boolean;
  top?: number;
  left?: number;
}

const MenuUser: FC<IMenuUser> = ({ isActive = false, top = 0, left = 0 }) => {
  let boxClassName = stylesMenuUser.box;

  if (isActive) {
    boxClassName += ' ';
    boxClassName += stylesMenuUser.active;
  } else {
    boxClassName = stylesMenuUser.box;
  }

  return (
    <div
      style={{ top: `${top}px`, left: `${left}px` }}
      className={boxClassName}
      id="id"
    >
      <div className={stylesMenuUser.border_bottom}>
        <a href="#id" className={stylesMenuUser.button}>
          <img src={settingsIcon} alt="Иконка" />
          <p className={stylesMenuUser.text}>Настройки аккаунта</p>
        </a>
        <a href="#id" className={stylesMenuUser.button}>
          <img src={paymentsIcon} alt="Иконка" />
          <p className={stylesMenuUser.text}>Подписка и платежи</p>
        </a>
      </div>
      <a href="#id" className={stylesMenuUser.button}>
        <img src={exitIcon} alt="Иконка" />
        <p className={stylesMenuUser.text}>Выйти</p>
      </a>
    </div>
  );
};

export default MenuUser;
