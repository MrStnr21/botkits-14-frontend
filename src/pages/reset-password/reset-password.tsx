import { FC, useCallback, FormEvent } from 'react';

import stylesResetPassword from './reset-password.module.scss';

import RegLogResLayout from '../../components/reg-log-res-layout/reg-log-res-layout';

import Button from '../../ui/buttons/button/button';
import Input from '../../ui/inputs/input/input';
import backgroundImage from '../../images/roboResetSuccess.png';
import ConfirmationScreen from '../../components/confirmation-screen/confirmation-screen';

// import { signinAction } from '../../services/actions/auth/signin';
import { useAppSelector } from '../../services/hooks/hooks';
import useForm from '../../services/hooks/use-form';

const ResetPassword: FC = (): JSX.Element => {
  const userData = useAppSelector((store) => store.signin);

  const { values, handleChange } = useForm({
    email: '',
  });

  const titleImageStyle = {
    width: '100%',
    maxWidth: '570px',
    height: '100%',
    aspectRatio: '1.06',
    backgroundImage: `url(${backgroundImage})`,
  };

  // const dispatch = useAppDispatch();

  const handleReset = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      /*       dispatch(
        resetAction({
          email: formValue.email,
        })
      ); */
    },
    [values]
  );

  return userData.signinSuccess ? (
    <ConfirmationScreen
      text="Ссылка для сброса пароля отправлена тебе на"
      style={titleImageStyle}
    />
  ) : (
    <RegLogResLayout title="Восстановление пароля">
      <div className={stylesResetPassword.resetFormContainer}>
        <div className={stylesResetPassword.resetInputsContainer}>
          <h2 className={stylesResetPassword.resetTitle}>Введи свой e-mail:</h2>
          <form
            className={stylesResetPassword.inputsForm}
            onSubmit={handleReset}
          >
            <div className={stylesResetPassword.inputsContainer}>
              <Input
                placeholder="E-mail"
                name="email"
                styled="secondary"
                required
                onChange={handleChange}
              />
            </div>
            <div className={stylesResetPassword.formsButton}>
              <Button variant="default" color="green" buttonHtmlType="submit">
                сбросить пароль
              </Button>
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
