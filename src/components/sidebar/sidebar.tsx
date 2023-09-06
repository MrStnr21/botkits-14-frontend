/* eslint-disable prettier/prettier */
import {NavLink
 } from 'react-router-dom';
import React, {  useState } from 'react';
import stylesSidebar from './sidebar.module.scss';

import dashboardIcon from '../../images/icon/side bar/dashboard.svg';
import mailingIcon from '../../images/icon/side bar/mailing.svg';
import constructorIcon from '../../images/icon/side bar/constructor.svg';
import listsIcon from '../../images/icon/side bar/lists.svg';
import chartIcon from '../../images/icon/side bar/charts.svg';
import accessIcon from '../../images/icon/side bar/access.svg';
import FullLogo from '../../ui/icons/full-logo';
import dialogueIcon from '../../images/icon/side bar/dialogue.svg';
import rocketIcon from '../../images/icon/side bar/rocket.svg';
import minilandingIcon from '../../images/icon/side bar/minilanding.svg';
import crmIcon from '../../images/icon/side bar/crm.svg';
import menuIcon from '../../images/icon/24x24/common/menu-grey.svg'
import Logo from '../../ui/icons/logo';

export default function Sidebar() {
  const [open, setState] = useState(true);

  function toggleSidebar() {
    setState(!open);
  }

  return (
    <div
    className={`${stylesSidebar.sidebar} ${
      open ? stylesSidebar.sidebarOpen : stylesSidebar.sidebarClose
    }`}
>
      <button
        type="button"
        onClick={toggleSidebar}
        className={stylesSidebar.toggle}
      >
        <img
            src={menuIcon}
            alt="Меню"
            className={stylesSidebar.icon}
          />
      </button>

      <div className={stylesSidebar.logo}>
        {open ?  <FullLogo /> : <Logo/>}
      </div>

      <nav className={stylesSidebar.navigation}>
        <NavLink to="/add-bot" className={stylesSidebar.addbutton}>
          <p className={stylesSidebar.addtext}>Добавить бота</p>
        </NavLink>

        <NavLink to="/" className={stylesSidebar.link}>
          <img
            src={dashboardIcon}
            alt="Дашборд."
            className={stylesSidebar.icon}
          />
          <p className={stylesSidebar.navtext}>Дашборд</p>
        </NavLink>

        <NavLink to="/bot-builder" className={stylesSidebar.link}>
          <img
            src={constructorIcon}
            alt="Воронки"
            className={stylesSidebar.icon}
          />
          <p className={stylesSidebar.navtext}>Воронки</p>
        </NavLink>

        <NavLink to="/mailing" className={stylesSidebar.link}>
          <img
            src={mailingIcon}
            alt="Рассылки"
            className={stylesSidebar.icon}
          />
          <p className={stylesSidebar.navtext}>Рассылки</p>
        </NavLink>

        <NavLink to="/lists" className={stylesSidebar.link}>
          <img src={listsIcon} alt="Списки" className={stylesSidebar.icon} />
          <p className={stylesSidebar.navtext}>Списки</p>
        </NavLink>

        <NavLink to="/subscription" className={stylesSidebar.link}>
          <img
            src={chartIcon}
            alt="Статистика"
            className={stylesSidebar.icon}
          />
          <p className={stylesSidebar.navtext}>Статистика</p>
        </NavLink>

        <NavLink to="/chat" className={stylesSidebar.link}>
          <img
            src={dialogueIcon}
            alt="Диалоги"
            className={stylesSidebar.icon}
          />
          <p className={stylesSidebar.navtext}>Диалоги</p>
        </NavLink>

        <NavLink to="/partnership" className={stylesSidebar.link}>
          <img
            src={rocketIcon}
            alt="Партнерская программа"
            className={stylesSidebar.icon}
          />
          <p className={stylesSidebar.navtext}>Партнерская программа</p>
        </NavLink>

        <NavLink to="/share" className={stylesSidebar.link}>
          <img
            src={accessIcon}
            alt="Общий доступ"
            className={stylesSidebar.icon}
          />
          <p className={stylesSidebar.navtext}>Общий доступ</p>
        </NavLink>

        <NavLink to="/minilanding" className={stylesSidebar.link}>
          <img
            src={minilandingIcon}
            alt="Мини-лендинг"
            className={stylesSidebar.icon}
          />
          <p className={stylesSidebar.navtext}>Мини-лендинг</p>
        </NavLink>

        <NavLink to="/crm" className={stylesSidebar.link}>
          <img src={crmIcon} alt="CRM" className={stylesSidebar.icon} />
          <p className={stylesSidebar.navtext}>CRM</p>
        </NavLink>
      </nav>
    </div>
  );
}
