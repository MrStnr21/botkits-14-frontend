import { FC } from 'react';
import stylesApp from './app.module.scss';
import { useAppDispatch } from '../../services/hooks/hooks';
import { signupAction } from '../../services/actions/signup';
import { signinAction } from '../../services/actions/signin';

const App: FC = (): JSX.Element => {
  const dispatch = useAppDispatch();

  const reg = {
    accountData: {
      credentials: {
        password: 'string',
        email: 'str@str.str',
      },
    },
    profileData: {
      phone: 'string',
      username: 'string',
    },
  };

  const auth = { email: 'str@str.str', password: 'string' };

  const handleSignup = () => {
    dispatch(signupAction(reg));
  };

  const handleSignin = () => {
    dispatch(signinAction(auth));
  };

  return (
    <div className={stylesApp.app}>
      <h1>Hi!</h1>
      <button onClick={handleSignup} type="button" className={stylesApp.button}>
        signup
      </button>
      <button onClick={handleSignin} type="button" className={stylesApp.button}>
        signin
      </button>
    </div>
  );
};

export default App;
