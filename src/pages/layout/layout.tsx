import { FC, useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router';
import stylesLayout from './layout.module.scss';
import Sidebar from '../../components/sidebar/sidebar';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';

const Layout: FC = () => {
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    setIsVisible(!location.pathname.endsWith('bot-builder'));
  }, [location]);
  return (
    <div className={stylesLayout.layout}>
      <Sidebar />
      {isVisible && <Header />}
      <main className={stylesLayout.page}>
        <Outlet />
      </main>
      {isVisible && <Footer />}
    </div>
  );
};

export default Layout;
