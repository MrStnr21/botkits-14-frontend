import { FC, useState, useEffect } from 'react';

import { useMediaQuery } from '@mui/material';

import styles from './header.module.scss';

import Notifications from '../icons/Notifications/Notifications';
import ArrowSmall from '../icons/ArrowSmall/ArrowSmall';
import Help from '../icons/Help/Help';
// import Logo from '../icons/Logo/Logo';
import { ReactComponent as Logo } from '../../images/icon/side bar/full-logo.svg';

import avatar from '../../images/avatar/circled/default.svg';

import MenuUser from '../../ui/menus/menu-user/menu-user';

import NotificationPopup from '../popups/notification-popup/notification-popup';
import Typography from '../../ui/typography/typography';
import Icon from '../../ui/icon/icon';
import { switchingWidth } from '../../stylesheets/scss-variables';
import { useAppSelector } from '../../services/hooks/hooks';
import { getUserInfoSel } from '../../utils/selectorData';
import { getSubscriptions } from '../../api/subscriptions';
// import MenuMobile from '../icons/MenuMobile/MenuMobile';
// import Menu24px from '../icons/Menu24px/Menu24px';

type THeaderProps = {
  toggleSidebar: () => void;
};

const Header: FC<THeaderProps> = ({ toggleSidebar }) => {
  const [isOpenAccontSettings, setIsAccSet] = useState(false);
  const [isNotificationOpened, setIsNotificationOpened] = useState(false);
  const [curTariff, setTariff] = useState<string>('');

  const { user } = useAppSelector(getUserInfoSel);

  useEffect(() => {
    getSubscriptions().then((data) => {
      setTariff(data.tariff);
    });
  }, []);

  const toggleAccSet = () => {
    setIsAccSet(!isOpenAccontSettings);
  };
  const toggleNotifPopup = () => {
    setIsAccSet(false);
    setIsNotificationOpened(!isNotificationOpened);
  };

  const isMobile = useMediaQuery(`(max-width: ${switchingWidth})`);

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
          right={isMobile ? -15 : 0}
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
