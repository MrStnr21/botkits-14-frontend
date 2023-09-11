import { FC } from 'react';

import stylesApp from './app.module.scss';
import MenuSimpleStatic from '../../ui/menus/menu-simple/menu-simple';

const a = ['asd', 'dsd', 'sad', 'klfd', 'sa'];

const App: FC = (): JSX.Element => {
  return (
    <div className={stylesApp.app}>
      <h1>Hi!</h1>
      <button type="button" className={stylesApp.button}>
        Click!
      </button>
      <MenuSimpleStatic buttons={a} isScroll size="large" />
    </div>
  );
};

export default App;
