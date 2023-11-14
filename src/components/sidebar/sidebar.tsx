import { FC, useState } from 'react';
import { NavLink } from 'react-router-dom';

import stylesSidebar from './sidebar.module.scss';

import { links } from './sb-data';
import Typography from '../../ui/typography/typography';
import Subheader from './subheader/subheader';

type TSidebarProps = {
  type: 'default' | 'compact';
};

const Sidebar: FC<TSidebarProps> = ({ type }) => {
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
      } ${stylesSidebar[type] || 0}`}
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

          <NavLink to="/" className={stylesSidebar.header__logo} />
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
            <Typography
              tag="p"
              fontFamily="secondary"
              className={stylesSidebar.addtext}
            >
              Добавить бота
            </Typography>
          </NavLink>
          <ul className={stylesSidebar.navigation__list}>
            {links.map((item, index) =>
              item.child ? (
                <li
                  key={item.text + +index}
                  className={`${stylesSidebar.nestedList} ${
                    !isOpenNL && stylesSidebar.nestedList_close
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
                <li key={item.text + index.toString()}>
                  <Subheader {...item} />
                </li>
              )
            )}
          </ul>
          <div className={stylesSidebar.addbutton_mobile}>
            <NavLink to="/add-bot" className={stylesSidebar.addcircle_mobile} />
            <Typography
              tag="p"
              fontFamily="secondary"
              className={stylesSidebar.addtext_mobile}
            >
              Добавить бота
            </Typography>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sidebar;
