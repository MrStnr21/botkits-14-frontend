import { FC } from 'react';

import stylesApp from './app.module.scss';

const App: FC = (): JSX.Element => {
  return <div className={stylesApp.app} />;
};

export default App;
