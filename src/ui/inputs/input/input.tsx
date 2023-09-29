import { FC, ChangeEvent, useState, useEffect } from 'react';

import stylesInput from './input.module.scss';

interface IInput {
  isInvalid?: boolean;
  placeholder?: string;
  errorMessage?: string;
  value?: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  name?: string;
  minLength?: number;
  maxLength?: number;
  type?: string;
  required?: boolean;
  styled?: 'main' | 'secondary';
  pattern?: string;
  password?: boolean;
}

const Input: FC<IInput> = ({
  placeholder = 'Введите ключ доступа',
  isInvalid,
  errorMessage = 'Вы ввели неправильное значение',
  value,
  onChange,
  disabled,
  name,
  minLength = 2,
  maxLength,
  type = 'text',
  required,
  styled,
  pattern,
  password,
}): JSX.Element => {
  const [error, setError] = useState<{ error: boolean; textError: string }>({
    error: false,
    textError: '',
  });

  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [typeValues, setTypeValues] = useState<string>('');

  useEffect(() => {
    setTypeValues(type);
  }, [type]);

  const handleShowPassword = () => {
    if (!showPassword) {
      setShowPassword(true);
      setTypeValues('text');
    } else {
      setShowPassword(false);
      setTypeValues('password');
    }
  };

  const validate = (input: ChangeEvent<HTMLInputElement>) => {
    const validityState = input.currentTarget.validity;
    if (validityState.valueMissing) {
      setError({ error: true, textError: 'Это поле обязательно' });
    } else if (validityState.patternMismatch) {
      setError({ error: true, textError: errorMessage });
    } else if (validityState.tooLong) {
      setError({
        error: true,
        textError: `Максимум ${maxLength} символов`,
      });
    } else if (validityState.tooShort) {
      setError({
        error: true,
        textError: `Минимум ${minLength} символа`,
      });
    } else if (validityState.typeMismatch) {
      setError({
        error: true,
        textError: 'Неверный тип данных',
      });
    } else if (isInvalid) {
      setError({
        error: true,
        textError: errorMessage,
      });
    } else {
      setError({ error: false, textError: '' });
    }
    onChange(input);
  };
  return (
    <div className={stylesInput.wrapper}>
      <input
        className={`${stylesInput.input} ${
          styled === 'secondary' ? stylesInput.inputSecondary : ''
        } ${(error.error || isInvalid) && stylesInput.incorrect} ${
          (error.error || isInvalid) && styled === 'secondary'
            ? stylesInput.inputSecondaryIncorrect
            : ''
        }`}
        type={typeValues || 'text'}
        placeholder={placeholder}
        value={value}
        onChange={validate}
        disabled={disabled}
        name={name}
        pattern={pattern}
        minLength={minLength}
        maxLength={maxLength}
        required={required}
      />
      {(error.error || isInvalid) && (
        <p className={stylesInput.incorrect_text}>{error.textError}</p>
      )}
      <div className={stylesInput.iconContainer}>
        {password && (
          <button
            type="button"
            aria-label="show/hide password"
            onClick={handleShowPassword}
            className={`${stylesInput.password} ${
              showPassword && stylesInput.passwordShow
            }`}
          />
        )}
        {required && (
          <span
            className={`${stylesInput.required} ${
              (error.error || isInvalid) && stylesInput.requiredIncorrect
            }`}
          >
            *
          </span>
        )}
      </div>
    </div>
  );
};

export default Input;
