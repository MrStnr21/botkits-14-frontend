import { FC, useCallback, useEffect, useState, FormEvent } from 'react';
import { Link } from 'react-router-dom';

import { MuiTelInput } from 'mui-tel-input';

import stylesSignup from './signup.module.scss';

import RegLogResLayout from '../../components/reg-log-res-layout/reg-log-res-layout';
import ConfirmationScreen from '../../components/confirmation-screen/confirmation-screen';

import ButtonAddSocial from '../../ui/buttons/button-add-social/button-add-social';
import Button from '../../ui/buttons/button/button';
import Input from '../../ui/inputs/input/input';

import { useAppDispatch, useAppSelector } from '../../services/hooks/hooks';
import { signupAction } from '../../services/actions/auth/signup';

import { DEFAULT_PHONE_CODE } from '../../utils/constants';
import routesUrl from '../../utils/routesData';
import backgroundImage from '../../images/roboSuccess.png';
import useForm from '../../services/hooks/use-form';

const Signup: FC = (): JSX.Element => {
  const titleImageStyle = {
    width: '100%',
    maxWidth: '570px',
    height: '100%',
    aspectRatio: '1.06',
    backgroundImage: `url(${backgroundImage})`,
  };

  const [phoneCode, setPhoneCode] = useState<string>('');

  const { values, handleChange, setValues } = useForm({
    username: '',
    email: '',
    password: '',
    phone: '',
  });

  const userData = useAppSelector((store) => store.signup);

  const handleChangeCodePhone = (newCode: string) => {
    setPhoneCode(newCode);
    setValues({ ...values, phone: newCode + values.phone });
  };

  useEffect(() => {
    setPhoneCode(DEFAULT_PHONE_CODE);
  }, []);

  const dispatch = useAppDispatch();

  const handleSignup = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      dispatch(
        signupAction({
          username: values.username,
          email: values.email,
          password: values.password,
          phone: values.phone,
        })
      );
    },
    [values]
  );

  return userData.signupSuccess ? (
    <ConfirmationScreen
      text="Письмо с подтверждением отправлено тебе на"
      style={titleImageStyle}
    />
  ) : (
    <RegLogResLayout title="Регистрация">
      <div className={stylesSignup.signupFormContainer}>
        <div className={stylesSignup.signupSocialContainer}>
          <h2 className={stylesSignup.signupTitle}>Создай аккаунт с помощью</h2>
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
                name="username"
                onChange={handleChange}
                styled="secondary"
                required
              />
              <Input
                placeholder="E-mail"
                name="email"
                onChange={handleChange}
                styled="secondary"
                required
              />
              <Input
                placeholder="Пароль"
                name="password"
                onChange={handleChange}
                styled="secondary"
                required
              />
              <div className={stylesSignup.inputsPhoneContainer}>
                <MuiTelInput
                  value={phoneCode}
                  className={stylesSignup.phoneCodeSelect}
                  onChange={handleChangeCodePhone}
                />
                <Input
                  // добавить максимальную длину номера
                  placeholder="Телефон"
                  name="phoneNumber"
                  maxLength={15}
                  styled="secondary"
                  required
                  onChange={(e) =>
                    setValues({
                      ...values,
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
              to={{ pathname: routesUrl.signin }}
              className={stylesSignup.signinLink}
            >
              Войти
            </Link>
          </div>
          <div className={stylesSignup.signupBackgroundImage} />
        </div>
      </div>
    </RegLogResLayout>
  );
};

export default Signup;
