import {
  FC,
  useCallback,
  useEffect,
  useState,
  FormEvent,
  ChangeEvent,
} from 'react';
import { Link } from 'react-router-dom';

import { MuiTelInput } from 'mui-tel-input';

import stylesSignup from './signup.module.scss';

import ConfirmationScreen from '../../components/confirmation-screen/confirmation-screen';
import RegLogResLayout from '../../components/reg-log-res-layout/reg-log-res-layout';

import ButtonAddSocial from '../../ui/buttons/button-add-social/button-add-social';
import Button from '../../ui/buttons/button/button';
import Input from '../../ui/inputs/input/input';

import { useAppDispatch, useAppSelector } from '../../services/hooks/hooks';
import { signupAction } from '../../services/actions/auth/signup';
import useForm from '../../services/hooks/use-form';

import { DEFAULT_PHONE_CODE } from '../../utils/constants';
import { signupSel } from '../../utils/selectorData';
import routesUrl from '../../utils/routesData';

import backgroundImage from '../../images/roboSuccess.png';

const Signup: FC = (): JSX.Element => {
  const titleImageStyle = {
    aspectRatio: '1.06',
    backgroundImage: `url(${backgroundImage})`,
  };

  const [buttonDisabled, setButtonDisabled] = useState<boolean>(false);
  const [phoneCode, setPhoneCode] = useState<string>('');
  const [formValid, setFormValid] = useState<{
    usernameIsValid: boolean;
    emailIsValid: boolean;
    passwordIsValid: boolean;
    phoneNumberMainIsValid: boolean;
  }>({
    usernameIsValid: false,
    emailIsValid: false,
    passwordIsValid: false,
    phoneNumberMainIsValid: false,
  });

  const { values, handleChange, setValues } = useForm({
    username: '',
    email: '',
    password: '',
    phone: '',
  });

  useEffect(() => {
    if (
      formValid.emailIsValid &&
      formValid.passwordIsValid &&
      formValid.phoneNumberMainIsValid &&
      formValid.usernameIsValid
    ) {
      setButtonDisabled(false);
    } else setButtonDisabled(true);
  }, [formValid]);

  const customHandleChange = (input: ChangeEvent<HTMLInputElement>) => {
    setFormValid({
      ...formValid,
      [`${input.target?.name}IsValid`]: input.target.validity?.valid,
    });
    console.log(values);
    handleChange(input);
  };

  const userData = useAppSelector(signupSel);

  const handleChangeCodePhone = (newCode: string) => {
    setPhoneCode(newCode);
    setValues({ ...values, phone: newCode + values.phone });
  };

  useEffect(() => {
    setPhoneCode(DEFAULT_PHONE_CODE.code);
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
          phone: phoneCode + values.phoneNumberMain,
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
          <form
            className={stylesSignup.inputsForm}
            onSubmit={handleSignup}
            noValidate
          >
            <div className={stylesSignup.inputsContainer}>
              <Input
                placeholder="Имя"
                name="username"
                maxLength={30}
                onChange={customHandleChange}
                styled="secondary"
                required
              />
              <Input
                placeholder="E-mail"
                name="email"
                maxLength={30}
                onChange={customHandleChange}
                errorMessage="Введите корректный email"
                styled="secondary"
                pattern="^\S+@\S+\.\S+$"
                required
              />
              <Input
                placeholder="Пароль"
                name="password"
                maxLength={30}
                onChange={customHandleChange}
                styled="secondary"
                password
                type="password"
                required
              />
              <div className={stylesSignup.inputsPhoneContainer}>
                <MuiTelInput
                  defaultCountry={DEFAULT_PHONE_CODE.country}
                  value={phoneCode}
                  className={stylesSignup.phoneCodeSelect}
                  onChange={handleChangeCodePhone}
                  langOfCountryName="ru"
                />
                <Input
                  placeholder="Телефон"
                  name="phoneNumberMain"
                  maxLength={15}
                  styled="secondary"
                  pattern="^\d+$"
                  required
                  onChange={customHandleChange}
                />
              </div>
            </div>
            <div className={stylesSignup.formsButton}>
              <Button
                variant="default"
                size="large"
                color="green"
                buttonHtmlType="submit"
                disabled={buttonDisabled}
              >
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
