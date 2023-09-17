import { Link } from 'react-router-dom';
import React, { FC, useCallback, useEffect, useState } from 'react';
import { MuiTelInput } from 'mui-tel-input';
import ButtonAddSocial from '../../ui/buttons/button-add-social/button-add-social';
import Button from '../../ui/buttons/button/button';
import Input from '../../ui/inputs/input/input';
import stylesSignup from './signup.module.scss';
import { DEFAULT_PHONE_CODE } from '../../utils/constants';
import { IUserSignupState } from '../../services/types/user';
import { useAppDispatch, useAppSelector } from '../../services/hooks/hooks';
import { signupAction } from '../../services/actions/auth/signup';

const Signup: FC = () => {
  const [phoneCode, setPhoneCode] = useState<string>('');
  const userData = useAppSelector((store) => store.signup);
  const [formValue, setFromValue] = useState<IUserSignupState>({
    username: '',
    email: '',
    password: '',
    phone: '',
  });

  const handleChangeCodePhone = (newCode: string) => {
    setPhoneCode(newCode);
    setFromValue({ ...formValue, phone: newCode + formValue.phone });
  };

  useEffect(() => {
    setPhoneCode(DEFAULT_PHONE_CODE);
  }, []);

  const dispatch = useAppDispatch();

  const handleSignup = useCallback(
    (e: any) => {
      e.preventDefault();
      dispatch(
        signupAction({
          username: formValue.username,
          email: formValue.email,
          password: formValue.password,
          phone: formValue.phone,
        })
      );
    },
    [formValue]
  );

  return userData.signupSuccess ? (
    <section className={stylesSignup.successPage}>
      <Link
        to={{ pathname: '/signin' }}
        className={stylesSignup.successSigninLink}
      />
      <div className={stylesSignup.titleContainer}>
        <h1 className={stylesSignup.title}>
          Письмо с подтверждением отправлено тебе на{' '}
          <span className={stylesSignup.email}>/email</span> !
        </h1>
        <div className={stylesSignup.titleImage} />
      </div>
    </section>
  ) : (
    <section className={stylesSignup.signupPage}>
      <div className={stylesSignup.contentContainer}>
        <div className={stylesSignup.logo} />
        <h1 className={stylesSignup.label}>Регистрация</h1>
        <div className={stylesSignup.signupFormContainer}>
          <div className={stylesSignup.signupSocialContainer}>
            <h2 className={stylesSignup.signupTitle}>
              Создай аккаунт с помощью
            </h2>
            <div className={stylesSignup.socialContainer}>
              <div className={stylesSignup.socialMain}>
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
              <div className={stylesSignup.socialSecond}>
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
          <div className={stylesSignup.signupInputsContainer}>
            <h2 className={stylesSignup.signupTitleForm}>или</h2>
            <form className={stylesSignup.inputsForm} onSubmit={handleSignup}>
              <div className={stylesSignup.inputsContainer}>
                <Input
                  placeholder="Имя"
                  name="name"
                  onChange={(e) =>
                    setFromValue({ ...formValue, username: e.target.value })
                  }
                />
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
                <div className={stylesSignup.inputsPhoneContainer}>
                  <MuiTelInput
                    value={phoneCode}
                    className={stylesSignup.phoneCodeSelect}
                    onChange={handleChangeCodePhone}
                  />
                  <Input
                    placeholder="Телефон"
                    name="phoneNumber"
                    onChange={(e) =>
                      setFromValue({
                        ...formValue,
                        phone: phoneCode + e.target.value,
                      })
                    }
                  />
                </div>
              </div>
              <div className={stylesSignup.formsButton}>
                <Button variant="default" color="green" buttonHtmlType="submit">
                  создать аккаунт
                </Button>
              </div>
            </form>
            <div className={stylesSignup.signupReadyContainer}>
              <span className={stylesSignup.signupReadyTitle}>
                Уже прошли регистрацию?
              </span>
              <Link
                to={{ pathname: '/login' }}
                className={stylesSignup.signinLink}
              >
                Войти
              </Link>
            </div>
            <div className={stylesSignup.signupBackgroundImage} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
