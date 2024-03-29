import { FC, FormEvent, useEffect } from 'react';
import { Link, Navigate } from 'react-router-dom';
import Cookies from 'js-cookie';

import stylesSignin from './signin.module.scss';

import RegLogResLayout from '../../components/reg-log-res-layout/reg-log-res-layout';

import ButtonAddSocial from '../../ui/buttons/button-add-social/button-add-social';
import Button from '../../ui/buttons/button/button';
import Input from '../../ui/inputs/input/input';

import { useAppDispatch, useAppSelector } from '../../services/hooks/hooks';
import {
  signinAction,
  socialAuthAction,
} from '../../services/actions/auth/signin';

import routesUrl from '../../utils/routesData';
import useForm, { TInputValue } from '../../services/hooks/use-form';
import { signinSel } from '../../utils/selectorData';
import { getSocial, removeSocial } from '../../auth/authService';
import {
  handlerAuthGoogle,
  handlerAuthMailru,
  handlerAuthVkontakte,
  handlerAuthYandex,
} from '../../utils/utils';
import Typography from '../../ui/typography/typography';

type TSiginFormState = {
  email: TInputValue;
  password: TInputValue;
};

const Signin: FC = () => {
  const userData = useAppSelector(signinSel);
  // Извлечение текущего URL
  const currentUrl = new URL(window.location.href);
  // Используем URLSearchParams для получения параметра 'code'
  const code = currentUrl.searchParams.get('code');
  const cookieData = Cookies.get('auth');
  const { values, handleChange, isFormValid } = useForm<TSiginFormState>({
    email: { value: '', isValid: false },
    password: { value: '', isValid: false },
  });

  const dispatch = useAppDispatch();

  const handleSignin = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(
      signinAction({
        email: values.email.value,
        password: values.password.value,
      })
    );
  };
  // Авторизация через соцсети
  useEffect(() => {
    if (code) {
      dispatch(socialAuthAction(code, getSocial()));
      removeSocial();
    }
    if (cookieData) {
      dispatch(socialAuthAction(code, 'cookie', cookieData));
      Cookies.remove('auth');
    }
  }, []);

  return userData.signinSuccess ? (
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
                onChange={handleChange}
                value={values.email.value}
                pattern="^\S+@\S+\.\S+$"
                maxLength={30}
                errorMessage="Введите корректный email"
                required
              />
              <Input
                placeholder="Пароль"
                name="password"
                styled="secondary"
                onChange={handleChange}
                value={values.password.value}
                password
                type="password"
                maxLength={30}
                required
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
              <Button
                variant="default"
                color="green"
                buttonHtmlType="submit"
                disabled={!isFormValid}
              >
                Войти
              </Button>
              {userData.signinError && (
                <Typography tag="p" className={stylesSignin.incorrect_text}>
                  {userData.signinErrorText}
                </Typography>
              )}
            </div>
          </form>
        </div>
        <div className={stylesSignin.signinSocialContainer}>
          <Typography tag="h2" className={stylesSignin.signinSocialTitle}>
            Быстрый вход
          </Typography>
          <div className={stylesSignin.socialContainer}>
            <div className={stylesSignin.socialMain}>
              <ButtonAddSocial
                social="google"
                size="small"
                buttonHtmlType="button"
                onClick={handlerAuthGoogle}
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
            <div className={stylesSignin.socialMain}>
              <ButtonAddSocial
                social="vk"
                size="small"
                buttonHtmlType="button"
                onClick={handlerAuthVkontakte}
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
              <ButtonAddSocial
                social="telegram"
                size="small"
                buttonHtmlType="button"
              />
            </div>
          </div>
        </div>
      </div>
    </RegLogResLayout>
  );
};

export default Signin;
