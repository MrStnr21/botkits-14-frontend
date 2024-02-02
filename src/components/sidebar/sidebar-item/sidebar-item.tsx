import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './sidebar-item.module.scss';

export type TSidebarItemProps = {
  text: string;
  navLink: string;
  icon?: JSX.Element;
};

const SidebarItem: FC<TSidebarItemProps> = ({ text, navLink, icon }) => {
  return (
    <li className={styles.item}>
      <NavLink
        to={navLink}
        className={(navData) =>
          navData.isActive ? `${styles.link} ${styles.active}` : styles.link
        }
      >
        <div className={styles.icon}>{icon}</div>
        <span className={styles.text}>{text}</span>
      </NavLink>
    </li>
  );
};

export default SidebarItem;
