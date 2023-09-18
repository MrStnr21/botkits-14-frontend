import React, { FC } from 'react';

import stylesRegLogResLayout from './reg-log-res-layout.module.scss';

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
        <h1 className={stylesRegLogResLayout.label}>{title}</h1>
        {children}
      </div>
    </section>
  );
};

export default RegLogResLayout;
