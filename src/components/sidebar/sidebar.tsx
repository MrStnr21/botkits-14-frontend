/* eslint-disable @typescript-eslint/no-unused-vars */
import { FC, useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import stylesSidebar from './sidebar.module.scss';

import { links } from './sb-data';
import Typography from '../../ui/typography/typography';
import SidebarItem from './sidebar-item/sidebar-item';
import SidebarItemDropdown from './sidebar-item/sidebar-item-dropdown';
import Button from './button/button';

type TSidebarProps = {
  type: 'default' | 'compact';
  isOpened: boolean;
};

const Sidebar: FC<TSidebarProps> = ({ type, isOpened }) => {
  return (
    <section
      className={`${stylesSidebar.wrapper} ${
        type === 'compact' ? stylesSidebar.compact : ''
      }`}
    >
      <NavLink to="/" className={stylesSidebar.header__logo} />
      <Button isSidebarOpened={isOpened} type={type} />
      <ul className={stylesSidebar.navigation__list}>
        {links.map((item, index) => {
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
    </section>
  );
};

export default Sidebar;
