/* eslint-disable prettier/prettier */
import { FC, ChangeEvent, useState, useEffect } from 'react';

import stylesInput from './input.module.scss';
import Typography from '../../typography/typography';

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
  styled?: 'main' | 'secondary' | 'bot-builder-default' | 'bot-builder-num';
  pattern?: string;
  password?: boolean;
  textColor?: 'default' | 'blue';
}

const classNames = {
  main: stylesInput.inputMain,
  secondary: stylesInput.inputSecondary,
  'bot-builder-default': stylesInput.inputBuilderDefault,
  'bot-builder-num': stylesInput.inputBuilderNum,
};

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
  styled = 'main',
  pattern,
  password,
  textColor = 'default',
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

  const className = classNames[styled];

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
        className={` ${className} ${error.error || isInvalid ? stylesInput.incorrect : ''} ${(error.error || isInvalid) && styled === 'secondary'
          ? stylesInput.inputSecondaryIncorrect
          : ''
          } ${textColor === 'blue' ? stylesInput.colorBlue : ''}`}
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
        <Typography tag="p" className={stylesInput.incorrect_text}>
          {error.textError}
        </Typography>
      )}
      <div
        className={`${styled === 'secondary'
          ? stylesInput.iconContainerSecondary
          : stylesInput.iconContainerMain
          } ${disabled && stylesInput.disabled}`}
      >
        {password && (
          <button
            type="button"
            aria-label="show/hide password"
            onClick={handleShowPassword}
            className={`${styled === 'secondary'
              ? stylesInput.passwordSecondary
              : stylesInput.passwordMain
              } ${showPassword && stylesInput.passwordShow}`}
          />
        )}
        {required && (
<<<<<<< HEAD
          <Typography
            tag="span"
            className={`${stylesInput.required} ${
              (error.error || isInvalid) && stylesInput.requiredIncorrect
            }`}
=======
          <span
            className={`${stylesInput.required} ${(error.error || isInvalid) && stylesInput.requiredIncorrect
              }`}
>>>>>>> 1509a3a (частично реализован компонент header-block)
          >
            *
          </Typography>
        )}
      </div>
    </div>
  );
};

export default Input;
