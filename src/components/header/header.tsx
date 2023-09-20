import { FC, useState, useEffect } from 'react';

import styles from './header.module.scss';

import Notifications from '../icons/Notifications/Notifications';
import ArrowSmall from '../icons/ArrowSmall/ArrowSmall';
import MenuMobile from '../icons/MenuMobile/MenuMobile';
import Menu24px from '../icons/Menu24px/Menu24px';
import Help from '../icons/Help/Help';
import Logo from '../icons/Logo/Logo';

import avatar from '../../images/avatar/circled/default.svg';
import MenuUser from '../../ui/menus/menu-user/menu-user';
import NotificationPopup from '../popups/notification-popup/notification-popup';

const Header: FC = (): JSX.Element => {
  const [isOpenAccontSettings, setIsAccSet] = useState(false);
  const [isNotificationOpened, setIsNotificationOpened] = useState(false);
  const [matches, setMatches] = useState(
    window.matchMedia('(max-width: 768px)').matches
  );

  const toggleAccSet = () => {
    setIsAccSet(!isOpenAccontSettings);
  };
  const toggleNotifPopup = () => {
    setIsNotificationOpened(!isNotificationOpened);
  };

  useEffect(() => {
    window
      .matchMedia('(max-width: 768px)')
      .addEventListener('change', (e) => setMatches(e.matches));
  }, []);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {matches ? <MenuMobile /> : <Menu24px />}
        <span className={styles.logo}>
          <Logo />
        </span>
      </div>
      <div className={styles.wrapper}>
        <p className={styles.text}>Тариф</p>
        <p className={styles.text}>Демо</p>
        <div className={styles.icons}>
          <Help />
          <Notifications number={2} onClick={toggleNotifPopup} />
        </div>
        <div className={styles.userInfo} onClick={toggleAccSet}>
          <span className={styles.userInfo__avatar}>
            <img src={avatar} alt="Avatar" className={styles.userInfo__image} />
          </span>
          <p className={styles.text}>User Name</p>
          <span
            className={`${styles.userInfo__button} ${
              !isOpenAccontSettings
                ? styles.button_default
                : styles.button_active
            }`}
          >
            <ArrowSmall />
          </span>
          {/* <MenuUser isActive={isOpenAccontSettings} top={47} right={0} /> */}
        </div>
        <MenuUser
          isActive={isOpenAccontSettings}
          top={47}
          right={0}
          onClick={(e) => {
            console.log(e);
            setIsAccSet(false);
            if (e.target.id === 'notification') {
              setIsNotificationOpened(true);
            }
          }}
        />
      </div>
      <NotificationPopup
        isOpen={isNotificationOpened}
        setIsNotificationOpened={setIsNotificationOpened}
      />
    </header>
  );
};

export default Header;
