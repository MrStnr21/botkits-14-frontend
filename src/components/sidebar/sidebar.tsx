import { FC, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useMediaQuery } from '@mui/material';

import { v4 as uuidv4 } from 'uuid';

import stylesSidebar from './sidebar.module.scss';

import Cover from '../../ui/cover/cover';

import { links, ILink } from './sb-data';
import BASE_URL from '../../utils/config';

// Элемент заголовка в навигации
const Subheader: FC<ILink> = ({ navLink, icon, text }): JSX.Element => {
  return (
    <NavLink
      to={navLink}
      className={(navData) =>
        navData.isActive
          ? `${stylesSidebar.navigation__link} ${stylesSidebar.navigation__link_active}`
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

  const matches = useMediaQuery('(max-width: 620px)');

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

          <div
            onClick={() => {
              window.location.href = `${BASE_URL}`;
            }}
            className={stylesSidebar.header__logo}
          />
        </div>

        <div
          className={stylesSidebar.navigation}
          onClick={() => setStateSB(false)}
        >
          <NavLink
            to="/add-bot"
            className={(navData) =>
              navData.isActive
                ? `${stylesSidebar.addbutton} ${stylesSidebar.addbutton_active}`
                : stylesSidebar.addbutton
            }
          >
            <p className={stylesSidebar.addtext}>Добавить бота</p>
          </NavLink>
          <ul className={stylesSidebar.navigation__list}>
            {links.map((item) =>
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
                <li key={uuidv4()}>
                  <Subheader {...item} />
                </li>
              )
            )}
          </ul>
          <div className={stylesSidebar.addbutton_mobile}>
            <NavLink to="/add-bot" className={stylesSidebar.addcircle_mobile} />
            <p className={stylesSidebar.addtext_mobile}>Добавить бота</p>
          </div>
        </div>
      </div>
      {!matches && (
        <Cover
          top="-16px"
          bottom="-16px"
          left="224px"
          right="0"
          onClick={() => setStateSB(false)}
        />
      )}
    </section>
  );
};

export default Sidebar;
