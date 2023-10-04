import { FC } from 'react';

import stylesFooter from './footer.module.scss';

const Footer: FC = (): JSX.Element => {
  const year = new Date().getFullYear();

  return (
    <footer className={stylesFooter.footer}>
      <p className={stylesFooter.text}>&copy; {year} BotKits</p>
    </footer>
  );
};

export default Footer;
