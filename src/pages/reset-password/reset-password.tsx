import { FC, FormEvent } from 'react';

import stylesResetPassword from './reset-password.module.scss';

import backgroundImage from '../../images/roboResetSuccess.png';

import ConfirmationScreen from '../../components/confirmation-screen/confirmation-screen';
import RegLogResLayout from '../../components/reg-log-res-layout/reg-log-res-layout';

import Button from '../../ui/buttons/button/button';
import Input from '../../ui/inputs/input/input';

import { useAppDispatch, useAppSelector } from '../../services/hooks/hooks';
import useForm, { TInputValue } from '../../services/hooks/use-form';

import { resetPasswordSel } from '../../utils/selectorData';
import { resetPasswordAction } from '../../services/actions/auth/reset-password';
import Typography from '../../ui/typography/typography';

const ResetPassword: FC = () => {
  const userData = useAppSelector(resetPasswordSel);

  const { values, handleChange, isFormValid } = useForm<{ email: TInputValue }>(
    {
      email: { value: '', isValid: false },
    }
  );

  const titleImageStyle = {
    width: '100%',
    maxWidth: '570px',
    height: '100%',
    aspectRatio: '1.06',
    backgroundImage: `url(${backgroundImage})`,
  };

  const dispatch = useAppDispatch();

  const handleReset = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(
      resetPasswordAction({
        email: values.email.value,
      })
    );
  };

  return userData.resetPasswordSuccess ? (
    <ConfirmationScreen
      text="Ссылка для сброса пароля отправлена тебе на"
      style={titleImageStyle}
    />
  ) : (
    <RegLogResLayout title="Восстановление пароля">
      <div className={stylesResetPassword.resetFormContainer}>
        <div className={stylesResetPassword.resetInputsContainer}>
          <Typography
            tag="h2"
            fontFamily="secondary"
            className={stylesResetPassword.resetTitle}
          >
            Введи свой e-mail:
          </Typography>
          <form
            className={stylesResetPassword.inputsForm}
            onSubmit={handleReset}
          >
            <div className={stylesResetPassword.inputsContainer}>
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
            </div>
            <div className={stylesResetPassword.formsButton}>
              <Button
                variant="default"
                color="green"
                buttonHtmlType="submit"
                disabled={!isFormValid}
              >
                сбросить пароль
              </Button>
              {userData.resetPasswordError && (
                <Typography
                  tag="p"
                  className={stylesResetPassword.incorrect_text}
                >
                  {userData.resetPasswordErrorText}
                </Typography>
              )}
            </div>
          </form>
        </div>
        <div className={stylesResetPassword.resetSocialContainer}>
          <div className={stylesResetPassword.resetBackgroundImage} />
        </div>
      </div>
    </RegLogResLayout>
  );
};

export default ResetPassword;
