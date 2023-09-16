import { FC } from 'react';
import stylesApp from './app.module.scss';

import AddBotPage from '../../pages/add-bot-page/add-bot-page';

const App: FC = (): JSX.Element => {
  return (
    <div className={stylesApp.app}>
      <h1>Hi!</h1>
      <button type="button" className={stylesApp.button}>
        click!
      </button>
      <AddBotPage />
    </div>
  );
};

export default App;
