import { FC, ChangeEvent } from 'react';

import stylesInput from './input.module.scss';

interface IInput {
  isInvalid?: boolean;
  placeholder?: string;
  errorMessage?: string;
  value?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  name?: string;
  minLength?: number;
  maxLength?: number;
  type?: string;
  required?: boolean;
  styled?: 'main' | 'secondary';
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
}): JSX.Element => {
  return (
    <div className={stylesInput.wrapper}>
      <input
        className={`${stylesInput.input} ${
          styled === 'secondary' ? stylesInput.inputSecondary : ''
        } ${isInvalid && stylesInput.incorrect}`}
        type={type || 'text'}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        name={name}
        minLength={minLength}
        maxLength={maxLength}
        required={required}
      />
      {isInvalid && (
        <p className={stylesInput.incorrect_text}>{errorMessage}</p>
      )}
      {required && <span className={stylesInput.required}>*</span>}
    </div>
  );
};

export default Input;
