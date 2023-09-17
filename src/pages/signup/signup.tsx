import { Link } from 'react-router-dom';
import React, { FC, useEffect, useState } from 'react';
import { MuiTelInput } from 'mui-tel-input';
import ButtonAddSocial from '../../ui/buttons/button-add-social/button-add-social';
import Button from '../../ui/buttons/button/button';
import Input from '../../ui/inputs/input/input';
import stylesSignup from './signup.module.scss';
import { DEFAULT_PHONE_CODE } from '../../utils/constants';

const Signup: FC = () => {
  const [phoneCode, setPhoneCode] = useState<string>('');

  const handleChangeCodePhone = (newCode: string) => {
    setPhoneCode(newCode);
  };

  useEffect(() => {
    setPhoneCode(DEFAULT_PHONE_CODE);
  }, []);

  return (
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
            <div className={stylesSignup.inputsContainer}>
              <Input placeholder="Имя" name="name" />
              <Input placeholder="E-mail" name="email" />
              <Input placeholder="Пароль" name="password" />
              <div className={stylesSignup.inputsPhoneContainer}>
                <MuiTelInput
                  value={phoneCode}
                  className={stylesSignup.phoneCodeSelect}
                  onChange={handleChangeCodePhone}
                />
                <Input placeholder="Телефон" name="phoneNumber" />
              </div>
            </div>
            <div className={stylesSignup.formsButton}>
              <Button variant="default" color="green">
                создать аккаунт
              </Button>
            </div>
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
