import { FC, useRef } from 'react';
import { useNavigate } from 'react-router';
import { NavLink } from 'react-router-dom';
import stylesMenuUser from './menu-user.module.scss';

import settingsIcon from '../../../images/icon/24x24/drop down/settings.svg';
import paymentsIcon from '../../../images/icon/24x24/drop down/payment.svg';
import exitIcon from '../../../images/icon/24x24/drop down/log out.svg';

import Notifications from '../../../components/icons/Notifications/Notifications';
import Help from '../../../components/icons/Help/Help';

import { logoutAction } from '../../../services/actions/logout/logout';
import { useAppDispatch, useAppSelector } from '../../../services/hooks/hooks';

import routesUrl from '../../../utils/routesData';

import Typography from '../../typography/typography';
import { getUserInfoSel } from '../../../utils/selectorData';
import useOutsideClick from '../../../utils/hooks/useOutsideClick';

export interface IMenuUser {
  isActive?: boolean;
  top?: number;
  left?: number;
  right?: number;
  onClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void; // Пока что слушаем только "Уведомления"
  closeMenu: () => void;
  tariffName?: string;
}

const MenuUser: FC<IMenuUser> = ({
  isActive = false,
  top = 0,
  left = 0,
  right,
  onClick,
  closeMenu,
  tariffName,
}) => {
  const dispatch = useAppDispatch();
  const ref = useRef<HTMLDivElement>(null);

  const { user } = useAppSelector(getUserInfoSel);

  const navigate = useNavigate();

  let boxClassName = stylesMenuUser.box;

  if (isActive) {
    boxClassName += ' ';
    boxClassName += stylesMenuUser.active;
  } else {
    boxClassName = stylesMenuUser.box;
  }

  const onLogout = (): void => {
    dispatch(logoutAction(() => navigate('signup', { replace: true })));
  };

  useOutsideClick(ref, document, closeMenu);

  return (
    <div
      ref={ref}
      style={
        left
          ? { top: `${top}px`, left: `${left}px` }
          : { top: `${top}px`, right: `${right}px` }
      }
      className={boxClassName}
      id="id"
    >
      <div className={stylesMenuUser.userInfo}>
        <Typography tag="p" className={stylesMenuUser.userInfo__name}>
          {user?.username}
        </Typography>
        <div className={stylesMenuUser.tariff_container}>
          <Typography tag="p">Тариф</Typography>
          <Typography tag="p">{tariffName}</Typography>
        </div>
      </div>
      <NavLink to="/user" className={stylesMenuUser.button} onClick={closeMenu}>
        <img src={settingsIcon} alt="Иконка" />
        <Typography tag="p" className={stylesMenuUser.text}>
          Настройки аккаунта
        </Typography>
      </NavLink>
      <NavLink
        to={routesUrl.subscription}
        className={stylesMenuUser.button}
        onClick={closeMenu}
      >
        <img src={paymentsIcon} alt="Иконка" />
        <Typography tag="p" className={stylesMenuUser.text}>
          Подписка и платежи
        </Typography>
      </NavLink>
      <NavLink
        to="/"
        className={stylesMenuUser.button}
        onClick={() => onLogout()}
      >
        <img src={exitIcon} alt="Иконка" />
        <Typography tag="p" className={stylesMenuUser.text}>
          Выйти
        </Typography>
      </NavLink>
      <div className={stylesMenuUser.addition}>
        <div
          className={stylesMenuUser.button}
          onClick={onClick}
          id="notification"
        >
          <Notifications number={2} />
          <Typography
            tag="p"
            className={stylesMenuUser.text} /* id="notification" */
          >
            Уведомления
          </Typography>
        </div>
        <a href="#id" className={stylesMenuUser.button}>
          <Help />
          <Typography tag="p" className={stylesMenuUser.text}>
            Справка
          </Typography>
        </a>
      </div>
    </div>
  );
};

export default MenuUser;
