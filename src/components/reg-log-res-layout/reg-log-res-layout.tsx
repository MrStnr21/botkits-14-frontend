import React, { FC } from 'react';

import stylesRegLogResLayout from './reg-log-res-layout.module.scss';
import Typography from '../../ui/typography/typography';

interface IRegLogResLayout {
  title: string;
  children?: React.ReactNode;
}

const RegLogResLayout: FC<IRegLogResLayout> = ({
  title,
  children,
}): JSX.Element => {
  return (
    <section className={stylesRegLogResLayout.signupPage}>
      <div className={stylesRegLogResLayout.contentContainer}>
        <div className={stylesRegLogResLayout.logo} />
        <Typography
          tag="h1"
          fontFamily="secondary"
          className={stylesRegLogResLayout.label}
        >
          {title}
        </Typography>
        {children}
      </div>
    </section>
  );
};

export default RegLogResLayout;
