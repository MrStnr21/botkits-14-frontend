import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import stylesConfirmationPage from './confirmation-page.module.scss';
import routesUrl from '../../utils/routesData';

interface IRegLogResLayout {
  text: string;
  style: {
    width: string;
    maxWidth: string;
    height: string;
    aspectRatio: string;
    backgroundImage: string;
  };
}

const ConfirmationPage: FC<IRegLogResLayout> = ({
  text,
  style,
}): JSX.Element => {
  return (
    <section className={stylesConfirmationPage.successPage}>
      <Link
        to={{ pathname: routesUrl.signin }}
        className={stylesConfirmationPage.successSigninLink}
      />
      <div className={stylesConfirmationPage.titleContainer}>
        <h1 className={stylesConfirmationPage.title}>
          {text} <span className={stylesConfirmationPage.email}>/email</span> !
        </h1>
        <div style={style} />
      </div>
    </section>
  );
};

export default ConfirmationPage;
