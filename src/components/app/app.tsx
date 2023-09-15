import { FC, useState } from 'react';
import stylesApp from './app.module.scss';
import MenuTime from '../../ui/menus/menu-time/menu-time';

const App: FC = (): JSX.Element => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const [value, setValue] = useState<string>('0:0');

  const save = (str: string) => {
    setValue(str);
  };

  const clear = () => {
    setValue('0:0');
  };

  return (
    <div className={stylesApp.app}>
      <h1>Hi!</h1>
      <button
        type="button"
        className={stylesApp.button}
        onClick={() => setIsActive(!isActive)}
      >
        {value}
      </button>
      <MenuTime
        isActive={isActive}
        top={250}
        saveFunction={save}
        clearFunction={clear}
      />
    </div>
  );
};

export default App;
