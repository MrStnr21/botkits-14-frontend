import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../sidebar.module.scss';
import { ILink } from '../sb-data';

const Subheader: FC<ILink> = ({ navLink, icon, text }) => {
  return (
    <NavLink
      to={navLink}
      className={(navData) =>
        navData.isActive
          ? `${styles.navigation__link} ${styles.navigation__link_active}`
          : styles.navigation__link
      }
    >
      {icon}
      <p className={styles.navigation__text}>{text}</p>
    </NavLink>
  );
};

export default Subheader;
