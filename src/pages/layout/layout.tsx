import { FC, useEffect, useState } from 'react';
import { Outlet, useLocation, useMatch } from 'react-router';

import stylesLayout from './layout.module.scss';

import Sidebar from '../../components/sidebar/sidebar';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';

import routesUrl from '../../utils/routesData';

const Layout: FC = (): JSX.Element => {
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(true);
  const matchChat = useMatch('/chat/:id');

  useEffect(() => {
    setIsVisible(!location.pathname.endsWith(routesUrl.botBuilder));
  }, [location]);
  return (
    <div className={stylesLayout.layout}>
      <Sidebar />
      {isVisible && <Header />}
      <main className={stylesLayout.page}>
        <Outlet />
      </main>
      {isVisible && !matchChat && <Footer />}
    </div>
  );
};

export default Layout;

