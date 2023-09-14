import { FC, useState } from 'react';

import stylesApp from './app.module.scss';
import MenuUser from '../../ui/menus/menu-user/menu-user';

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
      <MenuUser isActive={active} />
    </div>
  );
};

export default App;
