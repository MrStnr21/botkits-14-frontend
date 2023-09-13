import { FC } from 'react';
import Templates from '../dashbord/bots-templates/bots-templates'; //для проверки компонента "Шаблоны"
import stylesApp from './app.module.scss';

const App: FC = (): JSX.Element => {
  return (
    <div className={stylesApp.app}>
      <h1>Hi!</h1>
      <button type="button" className={stylesApp.button}>
        Click!
      </button>
      <Templates />
    </div>
  );
};

export default App;
