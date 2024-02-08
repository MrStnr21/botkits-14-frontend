/* eslint-disable react/no-array-index-key */
import { FC, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { links } from '../../../utils/menuData';
import { ReactComponent as Logo } from '../../../images/icon/side bar/full-logo.svg';
import styles from './menu-mobile.module.scss';
import SidebarItemDropdown from '../sidebar/sidebar-item/sidebar-item-dropdown';
import SidebarItem from '../sidebar/sidebar-item/sidebar-item';
import Icon from '../../../ui/icon/icon';
import Button from '../../../ui/buttons/button/button';
import { useAppSelector } from '../../../services/hooks/hooks';
import { botsSel } from '../../../utils/selectorData';
import Select from '../../../ui/select/select';
import { Option } from '../../../utils/types';
import routesUrl from '../../../utils/routesData';

type TMenuMobileProps = {
  isOpened: boolean;
  closeMenu: () => void;
};

const MenuMobile: FC<TMenuMobileProps> = ({ isOpened, closeMenu }) => {
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);
  const { bots } = useAppSelector(botsSel);
  const mappedBots = bots.map((item, index) => {
    return {
      label: item.title,
      value: index.toString(),
    };
  });
  return (
    <div className={styles.menu}>
      <div className={styles.header}>
        <button onClick={closeMenu} className={styles.close} type="button">
          <Icon extraClass={styles.close__icon} icon="close" isColored />
        </button>
        <Logo />
      </div>
      <div className={styles.select}>
        <Select
          options={mappedBots}
          handleSelect={setSelectedOption}
          currentOption={selectedOption}
          layoutClassName={styles.select__layout}
          itemClassName={styles.select__item}
          placeholder="Текущий бот"
        />
      </div>
      <ul className={styles.links}>
        {links.map((item, index) => {
          if (item.child) {
            return (
              <SidebarItemDropdown
                key={index}
                {...item}
                child={item.child}
                sidebarOpened={isOpened}
              />
            );
          }
          return (
            <SidebarItem
              key={index}
              {...item}
              disabled={
                selectedOption &&
                item.permission &&
                bots[Number(selectedOption.value)].permission[
                  item.permission
                ] === false
              }
              onClick={closeMenu}
            />
          );
        })}
      </ul>
      <NavLink
        onClick={closeMenu}
        className={styles.addBot}
        to={routesUrl.addBot}
      >
        <Button size="small" variant="circle" />
        <span className={styles.addBots__text}>Добавить бота</span>
      </NavLink>
    </div>
  );
};

export default MenuMobile;
