import { FC } from 'react';

import stylesApp from './app.module.scss';
import MenuSimple from '../../ui/menus/menu-simple/menu-simple';

const a = ['asd', 'dsd', 'sad', 'klfd', 'sa'];

const App: FC = (): JSX.Element => {
  return (
    <div className={stylesApp.app}>
      <h1>Hi!</h1>
      <button type="button" className={stylesApp.button}>
        Click!
      </button>
      <MenuSimple buttons={a} isActive />
    </div>
  );
};

export default App;
