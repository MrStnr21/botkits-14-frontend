import { FC, useState } from 'react';

import { NavLink } from 'react-router-dom';

import { v4 as uuidv4 } from 'uuid';

import stylesSidebar from './sidebar.module.scss';

import { links, ILink } from './sb-data';

// Элемент заголовка в навигации
const Subheader: FC<ILink> = ({ navLink, icon, text }): JSX.Element => {
  return (
    <NavLink
      to={navLink}
      className={(navData) =>
        navData.isActive
          ? `${stylesSidebar.navigation__link} ${stylesSidebar.navigation__link_active}` // добавим селектор-модификатор
          : stylesSidebar.navigation__link
      }
    >
      {icon}
      <p className={stylesSidebar.navigation__text}>{text}</p>
    </NavLink>
  );
};

const Sidebar: FC = (): JSX.Element => {
  const [isOpenSB, setStateSB] = useState(false);
  const [isOpenNL, setStateNL] = useState(true); // выпадающий список nestedList

  function toggleSidebar() {
    setStateSB(!isOpenSB);
  }

  function expandList() {
    setStateNL(!isOpenNL);
  }

  return (
    <section
      aria-label="НАВИГАЦИЯ"
      className={`${stylesSidebar.wrapper} ${
        isOpenSB ? stylesSidebar.wrapper_open : stylesSidebar.wrapper_close
      }`}
    >
      <div
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

        <div
          className={stylesSidebar.navigation}
          onClick={() => setStateSB(false)} // клик по кнопкам всплывет и закроет сайдбар..к тегу nav не цеплялся onClick
        >
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
                <li
                  key={uuidv4()}
                  className={`${stylesSidebar.nestedList} ${
                    isOpenNL
                      ? stylesSidebar.nestedList_open
                      : stylesSidebar.nestedList_close
                  }`}
                >
                  <Subheader {...item} />
                  <button
                    type="button"
                    onClick={expandList}
                    className={stylesSidebar.navigation__expandButton}
                    aria-label="Развернуть/свернуть подраздел"
                  />
                  <ul className={stylesSidebar.navigation__list_nested}>
                    {item.child.map((child) => (
                      <li key={child.text}>
                        <Subheader {...child} />
                      </li>
                    ))}
                  </ul>
                </li>
              ) : (
                // ЗАГОЛОВОК БЕЗ ВЛОЖЕНИЙ
                <li key={uuidv4()}>
                  <Subheader {...item} />
                </li>
              )
            )}
          </ul>
          {/* для моб.устройств и да, лучше так, чем сделать файл со стилями трудночитаемым */}
          <div className={stylesSidebar.addbutton_mobile}>
            <NavLink to="/add-bot" className={stylesSidebar.addcircle_mobile} />
            <p className={stylesSidebar.addtext_mobile}>Добавить бота</p>
          </div>
        </div>
      </div>
      <div
        aria-label="Cover"
        // className={`${isOpenSB ? stylesSidebar.cover : ''}`}
        className={stylesSidebar.cover}
        onClick={() => setStateSB(false)}
      />
    </section>
  );
};

export default Sidebar;
