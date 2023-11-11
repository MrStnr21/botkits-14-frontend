import { FC } from 'react';
import { Outlet } from 'react-router';

import { useMediaQuery } from '@mui/material';
import stylesLayout from './layout.module.scss';

import Sidebar from '../../components/sidebar/sidebar';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';

type TLayoutProps = {
  type?: 'default' | 'compact';
  width?: 'limited' | 'unset';
};

const Layout: FC<TLayoutProps> = ({ type = 'default', width = 'limited' }) => {
  const matches = useMediaQuery('(max-width: 620px)');
  return (
    <div className={`${stylesLayout.layout} ${stylesLayout[type]}`}>
      <Sidebar type={type} />
      {(type === 'default' || matches) && <Header />}
      <main className={`${stylesLayout.page} ${stylesLayout[width]}`}>
        <Outlet />
      </main>
      {type === 'default' && <Footer />}
    </div>
  );
};

export default Layout;
