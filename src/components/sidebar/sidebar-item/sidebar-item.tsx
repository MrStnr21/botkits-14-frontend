import { FC, useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './sidebar-item.module.scss';
import Icon from '../../../ui/icon/icon';
import { IconName } from '../../../ui/icon/utils';

export type TSidebarItemProps = {
  text: string;
  navLink: string;
  icon?: IconName;
};

const SidebarItem: FC<TSidebarItemProps> = ({ text, navLink, icon }) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <li className={styles.item}>
      <NavLink
        to={navLink}
        className={(navData) => {
          setIsActive(navData.isActive);
          return navData.isActive
            ? `${styles.link} ${styles.active}`
            : styles.link;
        }}
      >
        <div className={styles['icon-wrapper']}>
          {icon && (
            <Icon
              extraClass={`${styles.icon} ${isActive ? styles.active : ''}`}
              icon={icon}
              isColored
            />
          )}
        </div>
        <span className={styles.text}>{text}</span>
      </NavLink>
    </li>
  );
};

export default SidebarItem;
