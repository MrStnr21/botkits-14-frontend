import { FC, useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './sidebar-item.module.scss';
import Icon from '../../../ui/icon/icon';
import { IconName } from '../../../ui/icon/utils';

export type TSidebarItemProps = {
  text: string;
  navLink: string;
  icon?: IconName;
  disabled?: boolean | null;
  onClick?: () => void;
};

const SidebarItem: FC<TSidebarItemProps> = ({
  text,
  navLink,
  icon,
  disabled,
  onClick,
}) => {
  const [isActive, setIsActive] = useState(false);

  const onLinkClick = (e: React.MouseEvent) => {
    if (disabled) {
      e.preventDefault();
    } else if (onClick) {
      onClick();
    }
  };
  return (
    <li className={styles.item}>
      <NavLink
        onClick={onLinkClick}
        to={navLink}
        className={(navData) => {
          setIsActive(navData.isActive);
          return `${styles.link}
          ${navData.isActive ? styles.active : ''}
          ${disabled ? styles.disabled : ''}`;
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
