import { FC } from 'react';
import { Link } from 'react-router-dom';

import stylesConfirmationScreen from './confirmation-screen.module.scss';
import routesUrl from '../../utils/routesData';

interface IConfirmationScreen {
  text: string;
  style: {
    aspectRatio: string;
    backgroundImage: string;
  };
}

const ConfirmationScreen: FC<IConfirmationScreen> = ({
  text,
  style,
}): JSX.Element => {
  return (
    <section className={stylesConfirmationScreen.successPage}>
      <div className={stylesConfirmationScreen.contentContainer}>
        <Link
          to={{ pathname: routesUrl.signin }}
          className={stylesConfirmationScreen.successSigninLink}
        />
        <div className={stylesConfirmationScreen.titleContainer}>
          <h1 className={stylesConfirmationScreen.title}>
            {text}{' '}
            <span className={stylesConfirmationScreen.email}>/email</span> !
          </h1>
          <div style={style} className={stylesConfirmationScreen.titleImage} />
        </div>
      </div>
    </section>
  );
};

export default ConfirmationScreen;
