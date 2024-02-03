import { FC } from 'react';
import { links } from '../../utils/menuData';
import { ReactComponent as Logo } from '../../images/icon/side bar/full-logo.svg';
import styles from './menu-mobile.module.scss';
import SidebarItemDropdown from '../sidebar/sidebar-item/sidebar-item-dropdown';
import SidebarItem from '../sidebar/sidebar-item/sidebar-item';
import Icon from '../../ui/icon/icon';
import Button from '../sidebar/button/button';

type TMenuMobileProps = {
  isOpened: boolean;
  closeMenu: () => void;
};

const MenuMobile: FC<TMenuMobileProps> = ({ isOpened, closeMenu }) => {
  return (
    <div className={styles.menu}>
      <div className={styles.header}>
        <button onClick={closeMenu} className={styles.close} type="button">
          <Icon extraClass={styles.close__icon} icon="close" isColored />
        </button>
        <Logo />
      </div>
      <ul className={styles.links}>
        {links.map((item) => {
          if (item.child) {
            return (
              <SidebarItemDropdown
                {...item}
                child={item.child}
                sidebarOpened={isOpened}
              />
            );
          }
          return <SidebarItem {...item} />;
        })}
      </ul>
      <div>
        <Button type="compact" isSidebarOpened />
      </div>
    </div>
  );
};

export default MenuMobile;
