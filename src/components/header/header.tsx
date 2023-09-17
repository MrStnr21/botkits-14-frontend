import { FC, useEffect, useState } from 'react';
import styles from './header.module.scss';
import Menu24px from '../icons/Menu24px/Menu24px';
import Help from '../icons/Help/Help';
import Notifications from '../icons/Notifications/Notifications';
import avatar from '../../images/avatar/circled/default.svg';
import ArrowSmall from '../icons/ArrowSmall/ArrowSmall';
import Logo from '../icons/Logo/Logo';
import MenuMobile from '../icons/MenuMobile/MenuMobile';

const Header: FC = (): JSX.Element => {
  const [isActive, setIsActive] = useState(false);
  const toggle = () => {
    setIsActive(!isActive);
  };

  const [matches, setMatches] = useState(
    window.matchMedia('(max-width: 768px)').matches
  );

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
          <Notifications number={2} />
        </div>
        <span className={styles.avatar}>
          <img src={avatar} alt="Avatar" className={styles.image} />
        </span>
        <p className={styles.text}>User Name</p>
        <span
          className={`${styles.button} ${
            !isActive ? styles.button_default : styles.button_active
          }`}
          onClick={toggle}
        >
          <ArrowSmall />
        </span>
      </div>
    </header>
  );
};

export default Header;
