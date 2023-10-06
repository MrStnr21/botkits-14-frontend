import { FC, useCallback, FormEvent, useEffect } from 'react';
import { Link, Navigate } from 'react-router-dom';

import stylesSignin from './signin.module.scss';

import RegLogResLayout from '../../components/reg-log-res-layout/reg-log-res-layout';

import ButtonAddSocial from '../../ui/buttons/button-add-social/button-add-social';
import Button from '../../ui/buttons/button/button';
import Input from '../../ui/inputs/input/input';

import { useAppDispatch, useAppSelector } from '../../services/hooks/hooks';
import { signinAction } from '../../services/actions/auth/signin';

import routesUrl from '../../utils/routesData';
import useForm from '../../services/hooks/use-form';
import { signinSel } from '../../utils/selectorData';
import TelegramWidget from '../../components/telegramWidget/telegramWidget';

const Signin: FC = (): JSX.Element => {
  const { signinSuccess } = useAppSelector(signinSel);

  const { values, handleChange } = useForm({
    email: '',
    password: '',
  });

  const dispatch = useAppDispatch();

  const handleSignin = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      dispatch(
        signinAction({
          email: values.email,
          password: values.password,
        })
      );
    },
    [values]
  );

  const handlerAuthYandex = () => {
    // Замените эти значения на значения, полученные при регистрации вашего приложения на Яндексе
    const CLIENT_ID = 'b6e2d274a2e94c5ea78626531209dee7';

    // Составляем URL для авторизации
    const authUrl = `https://oauth.yandex.ru/authorize?response_type=code&client_id=${CLIENT_ID}`;

    // Перенаправляем пользователя на страницу авторизации Яндекса
    window.location.href = authUrl;
  };

  const handlerAuthMailru = () => {
    // Замените эти значения на значения, полученные при регистрации вашего приложения на Яндексе
    const CLIENT_ID = 'b85b17e5adb44a6e9e1325c97d1b1b83';

    // Составляем URL для авторизации
    const authUrl = `https://oauth.mail.ru/login?client_id=${CLIENT_ID}&response_type=code&scope=userinfo&redirect_uri=http://localhost:3000/signin&state=random_string_123`;

    // Перенаправляем пользователя на страницу авторизации Яндекса
    window.location.href = authUrl;
  };

  // Извлечение текущего URL
  const currentUrl = new URL(window.location.href);

  // Используем URLSearchParams для получения параметра 'code'
  const code = currentUrl.searchParams.get('code');
  const state = currentUrl.searchParams.get('state');

  useEffect(() => {
    if (code && !state) {
      fetch('http://localhost:3001/yandex/exchange', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ codeAuth: code }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log('Response from server:', data);
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    } else if (code && state) {
      fetch('http://localhost:3001/mailru/exchange', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ codeAuth: code }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log('Response from server:', data);
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    }
  }, []);

  return signinSuccess ? (
    <Navigate to={routesUrl.homePage} />
  ) : (
    <RegLogResLayout title="Вход">
      <div className={stylesSignin.signinFormContainer}>
        <div className={stylesSignin.signinInputsContainer}>
          <form className={stylesSignin.inputsForm} onSubmit={handleSignin}>
            <div className={stylesSignin.inputsContainer}>
              <Input
                placeholder="E-mail"
                name="email"
                styled="secondary"
                required
                onChange={handleChange}
              />
              <Input
                placeholder="Пароль"
                name="password"
                styled="secondary"
                required
                onChange={handleChange}
              />
            </div>
            <div className={stylesSignin.signinLinksContainer}>
              <Link
                to={{ pathname: routesUrl.reset }}
                className={stylesSignin.signinLink}
              >
                Забыли пароль?
              </Link>
              <Link
                to={{ pathname: routesUrl.signup }}
                className={stylesSignin.signinLink}
              >
                Регистрация
              </Link>
            </div>
            <div className={stylesSignin.formsButton}>
              <Button variant="default" color="green" buttonHtmlType="submit">
                Войти
              </Button>
            </div>
          </form>
        </div>
        <div className={stylesSignin.signinSocialContainer}>
          <h2 className={stylesSignin.signinSocialTitle}>Быстрый вход</h2>
          <div className={stylesSignin.socialContainer}>
            <div className={stylesSignin.socialMain}>
              <ButtonAddSocial
                social="google"
                size="small"
                buttonHtmlType="button"
              />
              <ButtonAddSocial
                social="yandex"
                size="small"
                buttonHtmlType="button"
                onClick={handlerAuthYandex}
              />
              <ButtonAddSocial
                social="mailru"
                size="small"
                buttonHtmlType="button"
                onClick={handlerAuthMailru}
              />
            </div>
            <div className={stylesSignin.socialSecond}>
              <ButtonAddSocial
                social="vk"
                size="small"
                buttonHtmlType="button"
              />
              <ButtonAddSocial
                social="odnoklassniki"
                size="small"
                buttonHtmlType="button"
              />
              <ButtonAddSocial
                social="facebook"
                size="small"
                buttonHtmlType="button"
              />
              <TelegramWidget />
            </div>
          </div>
        </div>
      </div>
    </RegLogResLayout>
  );
};

export default Signin;
