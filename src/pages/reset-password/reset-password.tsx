import { Navigate } from 'react-router-dom';
import React, { FC, useCallback, useState } from 'react';

import Button from '../../ui/buttons/button/button';
import Input from '../../ui/inputs/input/input';
import RegLogResLayout from '../../components/reg-log-res-layout/reg-log-res-layout';

import stylesResetPassword from './reset-password.module.scss';

import { IUserResetPasswordState } from '../../services/types/user';
import { useAppSelector } from '../../services/hooks/hooks';
// import { signinAction } from '../../services/actions/auth/signin';

const ResetPassword: FC = () => {
  const userData = useAppSelector((store) => store.signin);
  // to do: переписать на хуке useForm
  const [formValue, setFromValue] = useState<IUserResetPasswordState>({
    email: '',
  });

  // const dispatch = useAppDispatch();

  const handleReset = useCallback(
    (e: any) => {
      e.preventDefault();
      /*       dispatch(
        resetAction({
          email: formValue.email,
        })
      ); */
    },
    [formValue]
  );

  return userData.signinSuccess ? (
    <Navigate to="/" /> // Временная заглушка до реализации Protect route
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
                onChange={(e) =>
                  setFromValue({ ...formValue, email: e.target.value })
                }
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
