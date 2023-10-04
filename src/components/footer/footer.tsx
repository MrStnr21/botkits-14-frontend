import { FC } from 'react';

import stylesFooter from './footer.module.scss';

const Footer: FC = (): JSX.Element => {
  let year = '';
  const todayYear = new Date().getFullYear();
  if (todayYear != 2023) {
    year = `2023 - ${todayYear}`;
  } else {
    year = '2023';
  }

  return (
    <footer className={stylesFooter.footer}>
      <p className={stylesFooter.text}>&copy; {year} BotKits</p>
    </footer>
  );
};

export default Footer;
