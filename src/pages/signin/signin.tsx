import { FC, useCallback, FormEvent } from 'react';
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
