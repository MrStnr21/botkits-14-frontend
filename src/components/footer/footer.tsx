import { FC } from 'react';

import Typography from '../../ui/typography/typography';

import stylesFooter from './footer.module.scss';

const Footer: FC = (): JSX.Element => {
  let year = '';
  const todayYear = new Date().getFullYear();
  if (todayYear !== 2023) {
    year = `2023 - ${todayYear}`;
  } else {
    year = '2023';
  }

  return (
    <footer className={stylesFooter.footer}>
      <Typography tag="p" className={stylesFooter.text}>
        &copy; {year} BotKits
      </Typography>
    </footer>
  );
};

export default Footer;
