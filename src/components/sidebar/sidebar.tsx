import { NavLink } from 'react-router-dom';
import React, { useState } from 'react';
import stylesSidebar from './sidebar.module.scss';
import links from './sb-data';

export default function Sidebar() {
  const [isOpenSB, setStateSB] = useState(true);
  const [isOpenNL, setStateNL] = useState(true);

  function toggleSidebar() {
    setStateSB(!isOpenSB);
  }

  function expandList() {
    setStateNL(!isOpenNL);
  }

  return (
    <section
      aria-label="НАВИГАЦИЯ"
      className={`${stylesSidebar.sidebar} ${
        isOpenSB ? stylesSidebar.sidebar_open : stylesSidebar.sidebar_close
      }`}
    >
      <div className={stylesSidebar.header}>
        <button
          type="button"
          onClick={toggleSidebar}
          className={stylesSidebar.header__toggle}
          aria-label="Показать навигацию сайдбара"
        />

        <div className={stylesSidebar.header__logo} />
      </div>

      <nav className={stylesSidebar.navigation}>
        <NavLink
          to="/add-bot"
          className={(navData) =>
            navData.isActive
              ? `${stylesSidebar.addbutton} ${stylesSidebar.addbutton_active}` // добавим селектор-модификатор
              : stylesSidebar.addbutton
          }
        >
          <p className={stylesSidebar.addtext}>Добавить бота</p>
        </NavLink>
        <ul className={stylesSidebar.navigation__list}>
          {links.map((item) =>
            // ЗАГОЛОВОК С ВЛОЖЕННЫМ СПИСКОМ
            item.child ? (
              // хочу uuid здесь
              <li
                key={item.text}
                className={`${stylesSidebar.nestedList} ${
                  isOpenNL
                    ? stylesSidebar.nestedList_open
                    : stylesSidebar.nestedList_close
                }`}
              >
                <NavLink
                  to={item.navLink}
                  className={(navData) =>
                    navData.isActive
                      ? `${stylesSidebar.navigation__link} ${stylesSidebar.navigation__link_active}` // добавим селектор-модификатор
                      : stylesSidebar.navigation__link
                  }
                >
                  {item.icon}
                  <p className={stylesSidebar.navigation__text}>{item.text}</p>
                </NavLink>
                <button
                  type="button"
                  onClick={expandList}
                  className={stylesSidebar.navigation__expandButton}
                  aria-label="Развернуть/свернуть подраздел"
                />
                <ul className={stylesSidebar.navigation__list_nested}>
                  {item.child.map((child) => (
                    <li key={child.text}>
                      <NavLink
                        to={child.navLink}
                        className={(navData) =>
                          navData.isActive
                            ? `${stylesSidebar.navigation__link} ${stylesSidebar.navigation__link_active}` // добавим селектор-модификатор
                            : stylesSidebar.navigation__link
                        }
                      >
                        <p className={stylesSidebar.navigation__text}>
                          {child.text}
                        </p>
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </li>
            ) : (
              // нужен uuid пакет
              // ЗАГОЛОВОК БЕЗ ВЛОЖЕНИЙ
              <li key={item.text}>
                <NavLink
                  to={item.navLink}
                  className={(navData) =>
                    navData.isActive
                      ? `${stylesSidebar.navigation__link} ${stylesSidebar.navigation__link_active}` // добавим селектор-модификатор
                      : stylesSidebar.navigation__link
                  }
                >
                  {item.icon}
                  <p className={stylesSidebar.navigation__text}>{item.text}</p>
                </NavLink>
              </li>
            )
          )}
        </ul>
        {/* для моб.устройств и да, лучше так, чем сделать файл со стилями трудночитаемым */}
        <div className={stylesSidebar.addbutton_mobile}>
          <NavLink to="/add-bot" className={stylesSidebar.addcircle_mobile} />
          <p className={stylesSidebar.addtext_mobile}>Добавить бота</p>
        </div>
      </nav>
    </section>
  );
}
