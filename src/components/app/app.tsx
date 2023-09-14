import { FC } from 'react';

import stylesApp from './app.module.scss';

const App: FC = (): JSX.Element => {
  return (
    <div className={stylesApp.app}>
      <h1>Hi!</h1>
      <button>
        Click!
      </button>
    </div>
  );
};

export default App;
