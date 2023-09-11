import { FC } from 'react';

import stylesApp from './app.module.scss';
import DownloadFile from '../../ui/inputs/add-file/add-file';
import { SIZE_INPUT } from '../../utils/constants';

const App: FC = (): JSX.Element => {
  return (
    <div className={stylesApp.app}>
      <h1>Hi!</h1>
      <button type="button" className={stylesApp.button}>
        Click!
      </button>
      <DownloadFile size={SIZE_INPUT.L} />
    </div>
  );
};

export default App;
