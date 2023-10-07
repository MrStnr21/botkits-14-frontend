import { FC, FormEvent, useState, useEffect } from 'react';
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
  const userData = useAppSelector(signinSel);
  const [buttonDisabled, setButtonDisabled] = useState<boolean>(false);

  const { values, handleChange } = useForm({
    email: { value: '', valueValid: false },
    password: { value: '', valueValid: false },
  });

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (values.email.valueValid && values.password.valueValid) {
      setButtonDisabled(false);
    } else setButtonDisabled(true);
  }, [values]);

  const handleSignin = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(
      signinAction({
        email: values.email.value,
        password: values.password.value,
      })
    );
  };

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
                disabled={buttonDisabled}
              >
                Войти
              </Button>
              {userData.signinError && (
                <p className={stylesSignin.incorrect_text}>
                  {userData.signinErrorText}
                </p>
              )}
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
