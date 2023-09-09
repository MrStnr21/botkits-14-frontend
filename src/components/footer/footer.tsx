import { FC } from 'react';
import stylesFooter from './footer.module.scss';

const Footer: FC = (): JSX.Element => {
  return (
    <footer className={stylesFooter.footer}>
      <p className={stylesFooter.text}>&copy; 2023 BotKits</p>
    </footer>
  );
};

export default Footer;
