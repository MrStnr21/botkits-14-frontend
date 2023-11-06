import { FC, useState } from 'react';

import { useMediaQuery } from '@mui/material';

import styles from './header.module.scss';

import Notifications from '../icons/Notifications/Notifications';
import ArrowSmall from '../icons/ArrowSmall/ArrowSmall';
import Help from '../icons/Help/Help';
// import Logo from '../icons/Logo/Logo';

import avatar from '../../images/avatar/circled/default.svg';

import MenuUser from '../../ui/menus/menu-user/menu-user';

import NotificationPopup from '../popups/notification-popup/notification-popup';
import Typography from '../../ui/typography/typography';
// import MenuMobile from '../icons/MenuMobile/MenuMobile';
// import Menu24px from '../icons/Menu24px/Menu24px';

const Header: FC = (): JSX.Element => {
  const [isOpenAccontSettings, setIsAccSet] = useState(false);
  const [isNotificationOpened, setIsNotificationOpened] = useState(false);

  const toggleAccSet = () => {
    setIsAccSet(!isOpenAccontSettings);
  };
  const toggleNotifPopup = () => {
    setIsAccSet(false);
    setIsNotificationOpened(!isNotificationOpened);
  };

  const matches = useMediaQuery('(max-width: 620px)');

  return (
    <header className={styles.header}>
      {/* <div className={styles.container}>
        {matches ? <MenuMobile /> : <Menu24px />}
        <span className={styles.logo}>
          <Logo />
        </span>
      </div> */}
      <div className={styles.wrapper}>
        <Typography tag="p" fontFamily="secondary" className={styles.text}>
          Тариф
        </Typography>
        <Typography tag="p" fontFamily="secondary" className={styles.text}>
          Демо
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
            User Name
          </Typography>
          <span
            className={`${styles.userInfo__button} ${
              !isOpenAccontSettings
                ? styles.button_default
                : styles.button_active
            }`}
          >
            <ArrowSmall />
          </span>
        </div>
        <MenuUser
          isActive={isOpenAccontSettings}
          top={47}
          right={matches ? -15 : 0}
          onClick={(e) => {
            setIsAccSet(false);
            if ((e.target as HTMLInputElement).id === 'notification') {
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
