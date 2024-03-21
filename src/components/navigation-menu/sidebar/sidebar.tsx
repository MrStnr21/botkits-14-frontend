/* eslint-disable react/no-array-index-key */
/* eslint-disable no-underscore-dangle */
import { FC, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

import stylesSidebar from './sidebar.module.scss';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { links, openedRoutes } from '../../../utils/menuData';
import SidebarItem from './sidebar-item/sidebar-item';
import SidebarItemDropdown from './sidebar-item/sidebar-item-dropdown';
import Button from './button/button';
import { useAppSelector } from '../../../services/hooks/hooks';
import { botsSel } from '../../../utils/selectorData';
import Select from '../../../ui/select/select';
import { Option } from '../../../utils/types';

type TSidebarProps = {
  type: 'default' | 'compact';
  isOpened: boolean;
};

const Sidebar: FC<TSidebarProps> = ({ type, isOpened }) => {
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);
  const { bots } = useAppSelector(botsSel);
  const mappedBots = bots.map((item, index) => {
    return {
      label: item.title,
      value: index.toString(),
    };
  });
  useEffect(() => {
    if (selectedOption) {
      sessionStorage.setItem('bot_id', bots[Number(selectedOption.value)]._id);
      sessionStorage.setItem('type', 'custom');
    }
  }, [selectedOption]);

  return (
    <section
      className={`${stylesSidebar.wrapper} ${
        type === 'compact' ? stylesSidebar.compact : ''
      }`}
    >
      <NavLink to="/" className={stylesSidebar.logo} />
      <Button isSidebarOpened={isOpened} type={type} />
      <div className={stylesSidebar['select-wrapper']}>
        <Select
          options={mappedBots}
          currentOption={selectedOption}
          handleSelect={setSelectedOption}
          layoutClassName={stylesSidebar.select}
          itemClassName={stylesSidebar.select__item}
          placeholder="Текущий бот"
        />
      </div>
      <ul className={stylesSidebar.navigation__list}>
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
                (selectedOption &&
                  item.permission &&
                  bots[Number(selectedOption.value)].permission[
                    item.permission
                  ] === false) ||
                (!selectedOption && !openedRoutes.includes(item.navLink))
              }
            />
          );
        })}
      </ul>
    </section>
  );
};

export default Sidebar;
