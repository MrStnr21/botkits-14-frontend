/* eslint-disable @typescript-eslint/no-unused-vars */
import { FC, useState } from 'react';
import { NavLink } from 'react-router-dom';

import stylesSidebar from './sidebar.module.scss';

import { links } from './sb-data';
import Typography from '../../ui/typography/typography';
import SidebarItem from './sidebar-item/sidebar-item';
import SidebarItemDropdown from './sidebar-item/sidebar-item-dropdown';

type TSidebarProps = {
  type: 'default' | 'compact';
  isOpened: boolean;
};

const Sidebar: FC<TSidebarProps> = ({ type, isOpened }) => {
  return (
    <section className={stylesSidebar.wrapper}>
      <NavLink to="/" className={stylesSidebar.header__logo} />
      <NavLink
        to="/add-bot"
        className={(navData) =>
          navData.isActive
            ? `${stylesSidebar.addbutton} ${stylesSidebar.addbutton_active}`
            : stylesSidebar.addbutton
        }
      >
        <Typography
          tag="p"
          fontFamily="secondary"
          className={stylesSidebar.addtext}
        >
          Добавить бота
        </Typography>
      </NavLink>
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
