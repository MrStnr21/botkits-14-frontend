import { FC, useState, useEffect, useRef } from 'react';

import { useMediaQuery } from '@mui/material';

import { useNavigate } from 'react-router';
import styles from './header.module.scss';

import Notifications from '../../ui/icons/Notifications/Notifications';
import ArrowSmall from '../../ui/icons/ArrowSmall/ArrowSmall';
import Help from '../../ui/icons/Help/Help';
// import Logo from '../icons/Logo/Logo';
import { ReactComponent as Logo } from '../../images/icon/side bar/full-logo.svg';

import avatar from '../../images/avatar/circled/default.svg';

import NotificationPopup from '../popups/notification-popup/notification-popup';
import Typography from '../../ui/typography/typography';
import Icon from '../../ui/icon/icon';
import { switchingWidth } from '../../stylesheets/scss-variables';
import { useAppDispatch, useAppSelector } from '../../services/hooks/hooks';
import { getUserInfoSel } from '../../utils/selectorData';
import { getSubscriptions } from '../../api/subscriptions';
import { Option } from '../../utils/types';
import Menu from '../../ui/menus/menu/menu';
import { logoutAction } from '../../services/actions/logout/logout';
import routesUrl from '../../utils/routesData';
import useOutsideClickAndEscape from '../../utils/hooks/useOutsideClickAndEscape';
// import MenuMobile from '../icons/MenuMobile/MenuMobile';
// import Menu24px from '../icons/Menu24px/Menu24px';

type THeaderProps = {
  toggleSidebar: () => void;
};

const Header: FC<THeaderProps> = ({ toggleSidebar }) => {
  const [menu, setMenu] = useState(false);
  const [isNotificationOpened, setIsNotificationOpened] = useState(false);
  const [curTariff, setTariff] = useState<string>('');

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const { user } = useAppSelector(getUserInfoSel);

  useEffect(() => {
    getSubscriptions()
      .then((data) => {
        setTariff(data.tariff.name);
      })
      .catch((e) => console.log(e));
  }, []);

  const toggleAccSet = () => {
    setMenu(!menu);
  };
  const toggleNotifPopup = () => {
    setMenu(false);
    setIsNotificationOpened(!isNotificationOpened);
  };

  const isMobile = useMediaQuery(`(max-width: ${switchingWidth})`);

  const logout = () => {
    dispatch(logoutAction(() => navigate('signup', { replace: true })));
  };

  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useOutsideClickAndEscape(
    menuRef,
    document,
    () => {
      setMenu(false);
    },
    buttonRef
  );

  const menuOptions: Option[] = [
    /* страница не готова
    {
      label: 'Настройки аккаунта',
      value: 'setting',
      icon: 'dropdownSettings',
    },
    */
    {
      label: 'Подписка и платежи',
      value: 'subscription',
      icon: 'dropdownPayment',
    },
    {
      label: 'Выйти',
      value: 'logout',
      icon: 'dropdownLogout',
    },
  ];

  const handleMenu = (option: Option) => {
    switch (option.value) {
      /* страница не готова
      case 'settings':
        navigate(routesUrl.subscription);
        break;
      */
      case 'subscription':
        navigate(routesUrl.subscription);
        setMenu(false);
        break;
      case 'logout':
        logout();
        setMenu(false);
        break;
      default:
        setMenu(false);
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.header__left}>
        <button
          className={styles['sidebar-toggle']}
          type="button"
          onClick={toggleSidebar}
        >
          <Icon
            extraClass={styles['sidebar-toggle__icon']}
            icon="menu"
            isColored
          />
        </button>
        {isMobile && <Logo />}
      </div>
      <div className={styles.wrapper}>
        <Typography tag="p" fontFamily="secondary" className={styles.text}>
          Тариф
        </Typography>
        <Typography tag="p" fontFamily="secondary" className={styles.text}>
          {curTariff}
        </Typography>
        <div className={styles.icons}>
          <Help />
          <Notifications number={2} onClick={toggleNotifPopup} />
        </div>
        <div className={styles.userInfo} onClick={toggleAccSet}>
          <span className={styles.userInfo__avatar}>
            <img src={avatar} alt="Avatar" className={styles.userInfo__image} />
          </span>
          <Typography tag="p" fontFamily="secondary" className={styles.text}>
            {user?.username || 'User Name'}
          </Typography>
          <span
            ref={buttonRef}
            className={`${styles.userInfo__button} ${
              !menu ? styles.button_default : styles.button_active
            }`}
          >
            <ArrowSmall />
          </span>
        </div>
        {menu && (
          <Menu
            ref={menuRef}
            options={menuOptions}
            onItemClick={handleMenu}
            layoutClassName={styles.menu}
            itemClassName={styles.menu__item}
            iconClassName={styles.menu__icon}
          />
        )}
      </div>
      <NotificationPopup
        isOpen={isNotificationOpened}
        setIsNotificationOpened={setIsNotificationOpened}
      />
    </header>
  );
};

export default Header;
