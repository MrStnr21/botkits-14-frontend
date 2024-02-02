import { FC, useState } from 'react';
import styles from './sidebar-item.module.scss';
import SidebarItem, { TSidebarItemProps } from './sidebar-item';
import Icon from '../../../ui/icon/icon';

type TProps = TSidebarItemProps & {
  child: TSidebarItemProps[];
  sidebarOpened: boolean;
};

const SidebarItemDropdown: FC<TProps> = ({
  icon,
  text,
  child,
  sidebarOpened,
}) => {
  const [isMenuOpened, setMenuStatus] = useState(false);
  return (
    <li className={styles.item}>
      <button
        className={styles.link}
        type="button"
        onClick={() => setMenuStatus(!isMenuOpened)}
      >
        <div className={styles.icon}>{icon}</div>
        <span className={styles.text}>{text}</span>
        {sidebarOpened && (
          <Icon
            icon="chevronDown"
            extraClass={styles.chevron}
            isColored={false}
          />
        )}
      </button>
      {isMenuOpened && (
        <ul className={styles.list}>
          {child.map((item) => (
            <SidebarItem {...item} />
          ))}
        </ul>
      )}
    </li>
  );
};

export default SidebarItemDropdown;
