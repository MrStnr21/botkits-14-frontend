import { FC } from 'react';

import stylesApp from './app.module.scss';

import ButtonAddBot from '../../ui/buttons/button-add-bot/button-add-bot';
import Button from '../../ui/buttons/button/button';

const App: FC = (): JSX.Element => {
  return (
    <div className={stylesApp.app}>
      <h1>Hi!</h1>
      <button type="button" className={stylesApp.button}>
        Click!
      </button>
      <br />
      <br />
      <ButtonAddBot>Добавить бота</ButtonAddBot>
      <br />
      <br />
      <Button size="large">Привет</Button>
    </div>
  );
};

export default App;
