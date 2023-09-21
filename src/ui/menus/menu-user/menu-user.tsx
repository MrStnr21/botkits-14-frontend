import { FC } from 'react';
import stylesMenuUser from './menu-user.module.scss';
import settingsIcon from '../../../images/icon/24x24/drop down/settings.svg';
import paymentsIcon from '../../../images/icon/24x24/drop down/payment.svg';
import exitIcon from '../../../images/icon/24x24/drop down/log out.svg';
import Notifications from '../../../components/icons/Notifications/Notifications';
import Help from '../../../components/icons/Help/Help';
import BASE_URL from '../../../utils/config';
import routesUrl from '../../../utils/routesData';
import { logoutAction } from '../../../services/actions/logout/logout';
import { getAccessToken } from '../../../auth/authService';
import { useAppDispatch } from '../../../services/hooks/hooks';

export interface IMenuUser {
  isActive?: boolean;
  top?: number;
  left?: number;
  right?: number;
  onClick?: (e: any) => void; // Пока что слушаем только "Уведомления"
}

const MenuUser: FC<IMenuUser> = ({
  isActive = false,
  top = 0,
  left = 0,
  right,
  onClick,
}) => {
  const dispatch = useAppDispatch();

  const token = getAccessToken();

  let boxClassName = stylesMenuUser.box;

  if (isActive) {
    boxClassName += ' ';
    boxClassName += stylesMenuUser.active;
  } else {
    boxClassName = stylesMenuUser.box;
  }

  const onlogout = (accessToken: string): void => {
    dispatch(logoutAction(accessToken));
  };

  return (
    <div
      style={
        left
          ? { top: `${top}px`, left: `${left}px` }
          : { top: `${top}px`, right: `${right}px` }
      }
      className={boxClassName}
      id="id"
    >
      <div className={stylesMenuUser.userInfo}>
        <p className={stylesMenuUser.userInfo__name}>Иванов Александр</p>
        <div className={stylesMenuUser.tariff_container}>
          <p className={stylesMenuUser.tariff}>Тариф</p>
          <p className={stylesMenuUser.tariff_name}>Демо</p>
        </div>
      </div>
      <a href="#id" className={stylesMenuUser.button}>
        <img src={settingsIcon} alt="Иконка" />
        <p className={stylesMenuUser.text}>Настройки аккаунта</p>
      </a>
      <a
        href={`${BASE_URL}/${routesUrl.subscription}`}
        className={stylesMenuUser.button}
      >
        <img src={paymentsIcon} alt="Иконка" />
        <p className={stylesMenuUser.text}>Подписка и платежи</p>
      </a>
      <a
        href="#id"
        className={stylesMenuUser.button}
        onClick={() => onlogout(token!)}
      >
        <img src={exitIcon} alt="Иконка" />
        <p className={stylesMenuUser.text}>Выйти</p>
      </a>
      <div className={stylesMenuUser.addition}>
        <div
          className={stylesMenuUser.button}
          onClick={onClick}
          id="notification"
        >
          <Notifications number={2} />
          <p className={stylesMenuUser.text} id="notification">
            Уведомления
          </p>
        </div>
        <a href="#id" className={stylesMenuUser.button}>
          <Help />
          <p className={stylesMenuUser.text}>Справка</p>
        </a>
      </div>
    </div>
  );
};

export default MenuUser;
