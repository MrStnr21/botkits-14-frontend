import { Link, Navigate } from 'react-router-dom';
import React, { FC, useCallback, useState } from 'react';

import ButtonAddSocial from '../../ui/buttons/button-add-social/button-add-social';
import Button from '../../ui/buttons/button/button';
import Input from '../../ui/inputs/input/input';
import RegLogResLayout from '../../components/reg-log-res-layout/reg-log-res-layout';

import stylesSignin from './signin.module.scss';

import { IUserSigninState } from '../../services/types/user';
import { useAppDispatch, useAppSelector } from '../../services/hooks/hooks';
import { signinAction } from '../../services/actions/auth/signin';

const Signin: FC = () => {
  const userData = useAppSelector((store) => store.signin);
  // to do: перепеисать на хуке useForm
  const [formValue, setFromValue] = useState<IUserSigninState>({
    email: '',
    password: '',
  });

  const dispatch = useAppDispatch();

  const handleSignin = useCallback(
    (e: any) => {
      e.preventDefault();
      dispatch(
        signinAction({
          email: formValue.email,
          password: formValue.password,
        })
      );
    },
    [formValue]
  );

  return userData.signinSuccess ? (
    <Navigate to="/" /> // Временная заглушка до реализации Protect route
  ) : (
    <RegLogResLayout title="Вход">
      <div className={stylesSignin.signinFormContainer}>
        <div className={stylesSignin.signinInputsContainer}>
          <form className={stylesSignin.inputsForm} onSubmit={handleSignin}>
            <div className={stylesSignin.inputsContainer}>
              <Input
                placeholder="E-mail"
                name="email"
                onChange={(e) =>
                  setFromValue({ ...formValue, email: e.target.value })
                }
              />
              <Input
                placeholder="Пароль"
                name="password"
                onChange={(e) =>
                  setFromValue({ ...formValue, password: e.target.value })
                }
              />
            </div>
            <div className={stylesSignin.signinLinksContainer}>
              <Link
                to={{ pathname: '/reset' }}
                className={stylesSignin.signinLink}
              >
                Забыли пароль?
              </Link>
              <Link
                to={{ pathname: '/signup' }}
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
              />
              <ButtonAddSocial
                social="mailru"
                size="small"
                buttonHtmlType="button"
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
