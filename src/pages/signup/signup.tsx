import { FC, useEffect, useState, FormEvent, useRef } from 'react';
import { Link } from 'react-router-dom';

import { MuiTelInput } from 'mui-tel-input';

import ConfirmationScreen from '../../components/confirmation-screen/confirmation-screen';
import RegLogResLayout from '../../components/reg-log-res-layout/reg-log-res-layout';

import ButtonAddSocial from '../../ui/buttons/button-add-social/button-add-social';
import Button from '../../ui/buttons/button/button';
import Input from '../../ui/inputs/input/input';

import { useAppDispatch, useAppSelector } from '../../services/hooks/hooks';
import { signupAction } from '../../services/actions/auth/signup';
import useForm, { TInputValue } from '../../services/hooks/use-form';

import { COUNTRY_COD_LIST, DEFAULT_PHONE_CODE } from '../../utils/constants';
import { signupSel } from '../../utils/selectorData';
import routesUrl from '../../utils/routesData';
import {
  handlerAuthGoogle,
  handlerAuthMailru,
  handlerAuthVkontakte,
  handlerAuthYandex,
} from '../../utils/utils';

import backgroundImage from '../../images/roboSuccess.png';
import useScrollbar from '../../services/hooks/use-scrollbar';

import stylesSignup from './signup.module.scss';
import 'overlayscrollbars/overlayscrollbars.css';
import Typography from '../../ui/typography/typography';

type TSignupFormState = {
  username: TInputValue;
  email: TInputValue;
  password: TInputValue;
  phone: TInputValue;
  phoneNumberMain: TInputValue;
};

const Signup: FC = () => {
  const titleImageStyle = {
    aspectRatio: '1.06',
    backgroundImage: `url(${backgroundImage})`,
  };

  const [phoneCode, setPhoneCode] = useState<string>('');
  const [visible, setVisible] = useState<boolean>(false);
  const [visibleModal, setVisibleModal] = useState<boolean>(false);

  const refI = useRef(null);
  let timeOutOpenModal: NodeJS.Timeout | string = '';

  useScrollbar(refI, visible);

  const { values, handleChange, setValues, isFormValid } =
    useForm<TSignupFormState>({
      username: { value: '', isValid: false },
      email: { value: '', isValid: false },
      password: { value: '', isValid: false },
      phone: { value: '', isValid: false },
      phoneNumberMain: { value: '', isValid: false },
    });

  useEffect(() => {
    return () => {
      clearTimeout(timeOutOpenModal);
    };
  }, []);

  const userData = useAppSelector(signupSel);

  const handleChangeCodePhone = (newCode: string) => {
    setPhoneCode(newCode);
    setValues({
      ...values,
      phone: { ...values.phone, value: newCode + values.phone },
    });
    setVisibleModal(false);
    setVisible(false);
  };

  useEffect(() => {
    setPhoneCode(DEFAULT_PHONE_CODE.code);
  }, []);

  const dispatch = useAppDispatch();

  const handleSignup = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(
      signupAction({
        username: values.username.value,
        email: values.email.value,
        password: values.password.value,
        phone: phoneCode + values.phoneNumberMain.value,
      })
    );
  };

  return userData.signupSuccess ? (
    <ConfirmationScreen
      text="Письмо с подтверждением отправлено тебе на"
      style={titleImageStyle}
    />
  ) : (
    <RegLogResLayout title="Регистрация">
      <div className={stylesSignup.signupFormContainer}>
        <div className={stylesSignup.signupSocialContainer}>
          <Typography
            tag="h2"
            fontFamily="secondary"
            className={stylesSignup.signupTitle}
          >
            Создай аккаунт с помощью
          </Typography>
          <div className={stylesSignup.socialContainer}>
            <div className={stylesSignup.socialMain}>
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
            <div className={stylesSignup.socialMain}>
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
        <div className={stylesSignup.signupInputsContainer}>
          <Typography tag="h2" className={stylesSignup.signupTitleForm}>
            или
          </Typography>
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
                onChange={handleChange}
                value={values.username.value}
                styled="secondary"
                required
              />
              <Input
                placeholder="E-mail"
                name="email"
                maxLength={30}
                onChange={handleChange}
                value={values.email.value}
                errorMessage="Введите корректный email"
                styled="secondary"
                pattern="^\S+@\S+\.\S+$"
                required
              />
              <Input
                placeholder="Пароль"
                name="password"
                maxLength={30}
                onChange={handleChange}
                value={values.password.value}
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
                  InputProps={{
                    onClick: () => {
                      setVisibleModal(true);
                      timeOutOpenModal = setTimeout(() => setVisible(true), 0);
                    },
                  }}
                  MenuProps={{
                    onClose: () => {
                      setVisibleModal(false);
                      setVisible(false);
                      clearTimeout(timeOutOpenModal);
                    },
                    open: visibleModal,
                    slotProps: {
                      paper: {
                        ref: refI,
                      },
                    },
                  }}
                  langOfCountryName="ru"
                  onlyCountries={
                    COUNTRY_COD_LIST.length > 0 ? COUNTRY_COD_LIST : undefined
                  }
                />
                <Input
                  placeholder="Телефон"
                  name="phoneNumberMain"
                  onChange={handleChange}
                  value={values.phoneNumberMain.value}
                  maxLength={15}
                  styled="secondary"
                  pattern="^\d+$"
                  errorMessage="Номер телефона может содержать только цифры"
                  type="text"
                  required
                />
              </div>
            </div>
            <div className={stylesSignup.formsButton}>
              <Button
                variant="default"
                size="large"
                color="green"
                buttonHtmlType="submit"
                disabled={!isFormValid}
              >
                создать аккаунт
              </Button>
              {userData.signupError && (
                <Typography tag="p" className={stylesSignup.incorrect_text}>
                  {userData.signupErrorText}
                </Typography>
              )}
            </div>
          </form>
          <div className={stylesSignup.signupReadyContainer}>
            <Typography tag="span" className={stylesSignup.signupReadyTitle}>
              Уже прошли регистрацию?
            </Typography>
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
