import { FC } from 'react';
import stylesApp from './app.module.scss';

import Templates from '../dashbord/bots-templates/bots-templates';

const App: FC = (): JSX.Element => {
  return (
    <div className={stylesApp.app}>
      <h1>Hi!</h1>
      <button type="button" className={stylesApp.button}>
        click!
      </button>
      <Templates />
    </div>
  );
};

export default App;
