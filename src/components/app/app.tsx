import { FC } from 'react';

import stylesApp from './app.module.scss';
import TextField from '../../ui/text-field/text-field';

const App: FC = (): JSX.Element => {
  return (
    <div className={stylesApp.app}>
      <h1>Hi!</h1>
      <button type="button" className={stylesApp.button}>
        Click!
      </button>
      <TextField />
    </div>
  );
};

export default App;
