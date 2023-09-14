import { FC, useState } from 'react';

import stylesApp from './app.module.scss';

const App: FC = (): JSX.Element => {
  const [active, setAcitve] = useState<boolean>(false);

  return (
    <div className={stylesApp.app}>
      <h1>Hi!</h1>
      <button
        type="button"
        className={stylesApp.button}
        onClick={() => setAcitve(!active)}
      >
        Click!
      </button>
    </div>
  );
};

export default App;
