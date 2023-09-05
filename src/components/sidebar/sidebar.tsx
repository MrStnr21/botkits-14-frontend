/* eslint-disable prettier/prettier */
import { NavLink, useLocation } from 'react-router-dom';
// import { useContext, useEffect, useState } from 'react';
import stylesSidebar from './sidebar.module.css';

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

const linkStyle = ({ isActive }: { isActive: boolean }) =>
  isActive
    ? `${stylesSidebar.navlink} ${stylesSidebar['navlink-active']}`
    : `${stylesSidebar.navlink}`;

export default function Sidebar() {
  // const [expanded, setExpanded] = useState(false);
  // const [isBotBuilder, setIsBotBuilder] = useState(false);
  const { pathname } = useLocation();
  // const { sidebarOpen, setSidebarOpen } = useContext(Context);
  useEffect(() => {
    // setSidebarOpen(false);
    // setExpanded(false);
    // setIsBotBuilder(pathname.endsWith('bot-builder'));
  }, [pathname]);

  // function menuExpandHandler() {
  //   setSidebarOpen(!sidebarOpen);
  //   setExpanded((value) => !value);
  // }

  return (
    <div
      className={stylesSidebar.wrapper}
      // className={`${styles.sidebar} ${

      //   expanded ? styles['sidebar-expanded'] : ''
      // } ${isBotBuilder ? styles.sidebar_white : ''}`}
    >
      {/* {!isBotBuilder && (
        <button
          type="button"
          onClick={menuExpandHandler}
          className={styles['expand-button']}
        >
          {expanded ? menuCollapseIcon : menuExpandIcon}
        </button>
      )} */}

      <div className={stylesSidebar.sidebar}>
        <div className={stylesSidebar.title}>
          <FullLogo />
        </div>
        <nav className={stylesSidebar.navigation}>
          <NavLink to="/add-bot" className={stylesSidebar.addbutton}>
            <p className={stylesSidebar.addtext}>Добавить бота</p>
          </NavLink>

          <NavLink to="/" className={linkStyle}>
            <img
              src={dashboardIcon}
              alt="Дашборд."
              className={stylesSidebar.icon}
            />
            <p className={stylesSidebar.navtext}>Дашборд</p>
          </NavLink>

          <NavLink to="/bot-builder" className={linkStyle}>
            <img
              src={constructorIcon}
              alt="Воронки"
              className={stylesSidebar.icon}
            />
            <p className={stylesSidebar.navtext}>Воронки</p>
          </NavLink>

          <NavLink to="/mailing" className={linkStyle}>
            <img
              src={mailingIcon}
              alt="Рассылки"
              className={stylesSidebar.icon}
            />
            <p className={stylesSidebar.navtext}>Рассылки</p>
          </NavLink>

          <NavLink to="/lists" className={linkStyle}>
            <img src={listsIcon} alt="Списки" className={stylesSidebar.icon} />
            <p className={stylesSidebar.navtext}>Списки</p>
          </NavLink>

          <NavLink to="/subscription" className={linkStyle}>
            <img
              src={chartIcon}
              alt="Статистика"
              className={stylesSidebar.icon}
            />
            <p className={stylesSidebar.navtext}>Статистика</p>
          </NavLink>

          <NavLink to="/chat" className={linkStyle}>
            <img
              src={dialogueIcon}
              alt="Диалоги"
              className={stylesSidebar.icon}
            />
            <p className={stylesSidebar.navtext}>Диалоги</p>
          </NavLink>

          <NavLink to="/partnership" className={linkStyle}>
            <img
              src={rocketIcon}
              alt="Партнерская программа"
              className={stylesSidebar.icon}
            />
            <p className={stylesSidebar.navtext}>Партнерская программа</p>
          </NavLink>

          <NavLink to="/share" className={linkStyle}>
            <img
              src={accessIcon}
              alt="Общий доступ"
              className={stylesSidebar.icon}
            />
            <p className={stylesSidebar.navtext}>Общий доступ</p>
          </NavLink>

          <NavLink to="/minilanding" className={linkStyle}>
            <img
              src={minilandingIcon}
              alt="Мини-лендинг"
              className={stylesSidebar.icon}
            />
            <p className={stylesSidebar.navtext}>Мини-лендинг</p>
          </NavLink>

          <NavLink to="/crm" className={linkStyle}>
            <img src={crmIcon} alt="CRM" className={stylesSidebar.icon} />
            <p className={stylesSidebar.navtext}>CRM</p>
          </NavLink>
        </nav>
      </div>
    </div>
  );
}
