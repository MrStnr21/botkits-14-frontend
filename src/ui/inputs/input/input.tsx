// to do: Input
// https://trello.com/c/f5dfbuqo/8-fields-constructor
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
}

const Input: FC<IInput> = ({
  placeholder = 'Введите ключ доступа',
  isInvalid,
  errorMessage = 'Вы ввели неправильное значение',
  value,
  onChange,
  disabled,
  name,
}) => {
  return (
    <div className={stylesInput.wrapper}>
      <input
        className={`${stylesInput.input} ${isInvalid && stylesInput.incorrect}`}
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        name={name}
      />
      {isInvalid && (
        <p className={stylesInput.incorrect_text}>{errorMessage}</p>
      )}
    </div>
  );
};

export default Input;
