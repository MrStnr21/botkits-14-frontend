import { FC } from 'react';
import stylesApp from './app.module.scss';
import { useAppDispatch } from '../../services/hooks/hooks';
import { signupAction } from '../../services/actions/authorization';

const App: FC = (): JSX.Element => {
  const dispatch = useAppDispatch();

  const handleSignup = () => {
    dispatch(signupAction());
  };

  return (
    <div className={stylesApp.app}>
      <h1>Hi!</h1>
      <button onClick={handleSignup} type="button" className={stylesApp.button}>
        click!
      </button>
    </div>
  );
};

export default App;
