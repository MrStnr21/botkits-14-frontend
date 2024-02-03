import { FC, useState } from 'react';
import { Outlet, useMatch } from 'react-router';

import { useMediaQuery } from '@mui/material';
import stylesLayout from './layout.module.scss';

import Sidebar from '../sidebar/sidebar';
import Footer from '../footer/footer';
import Header from '../header/header';
import MenuMobile from '../menu-mobile/menu-mobile';
import { switchingWidth } from '../../stylesheets/scss-variables';

type TLayoutProps = {
  type?: 'default' | 'compact';
  width?: 'limited' | 'unset';
};

const Layout: FC<TLayoutProps> = ({ type = 'default', width = 'limited' }) => {
  const [sidebarOpened, setSidebar] = useState(false);
  const isMobile = useMediaQuery(`(max-width: ${switchingWidth})`);
  const matchChat = useMatch('/chat/:id');

  const toggleSidebar = () => setSidebar(!sidebarOpened);

  const closeSidebar = () => setSidebar(false);

  return (
    <div
      className={`${stylesLayout.layout} ${stylesLayout[type] || ''} ${
        sidebarOpened ? stylesLayout.sidebar_opened : ''
      }`}
    >
      {!isMobile && <Sidebar isOpened={sidebarOpened} type={type} />}
      {isMobile && sidebarOpened && (
        <MenuMobile isOpened={sidebarOpened} closeMenu={closeSidebar} />
      )}
      {(type === 'default' || isMobile) && (
        <Header toggleSidebar={toggleSidebar} />
      )}
      <main className={`${stylesLayout.page} ${stylesLayout[width] || ''}`}>
        <Outlet />
      </main>
      {type === 'default' && !matchChat && <Footer />}
    </div>
  );
};

export default Layout;
