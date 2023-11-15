import { FC } from 'react';
import { Outlet, useMatch } from 'react-router';

import { useMediaQuery } from '@mui/material';
import stylesLayout from './layout.module.scss';

import Sidebar from '../sidebar/sidebar';
import Footer from '../footer/footer';
import Header from '../header/header';

type TLayoutProps = {
  type?: 'default' | 'compact';
  width?: 'limited' | 'unset';
};

const Layout: FC<TLayoutProps> = ({ type = 'default', width = 'limited' }) => {
  const matches = useMediaQuery('(max-width: 620px)');
  const matchChat = useMatch('/chat/:id');

  return (
    <div className={`${stylesLayout.layout} ${stylesLayout[type] || ''}`}>
      <Sidebar type={type} />
      {(type === 'default' || matches) && <Header />}
      <main className={`${stylesLayout.page} ${stylesLayout[width] || ''}`}>
        <Outlet />
      </main>
      {type === 'default' && !matchChat && <Footer />}
    </div>
  );
};

export default Layout;
