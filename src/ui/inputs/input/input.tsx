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
  type?: string;
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
  type = 'text',
}): JSX.Element => {
  return (
    <div className={stylesInput.wrapper}>
      <input
        className={`${stylesInput.input} ${isInvalid && stylesInput.incorrect}`}
        type={type || 'text'}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        name={name}
        minLength={minLength}
      />
      {isInvalid && (
        <p className={stylesInput.incorrect_text}>{errorMessage}</p>
      )}
    </div>
  );
};

export default Input;
