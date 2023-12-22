import React, { FC, ChangeEvent, useState } from 'react';
import stylesInput from './input-template.module.scss';
import Typography from '../../typography/typography';

export interface IInputTemplate {
  placeholder?: string;
  value?: string;
  onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  size: 'small' | 'big';
  name?: string;
  required?: boolean;
  errorMessage?: string;
}

const InputTemplate: FC<IInputTemplate> = ({
  value,
  placeholder = 'Введите сообщение...',
  onChange,
  size,
  name,
  required,
  errorMessage = 'Введите сообщение',
}) => {
  const [error, setError] = useState<{ error: boolean; textError: string }>({
    error: false,
    textError: '',
  });

  let inputContainerClassName = stylesInput.template;
  let inputClassName = stylesInput.template__input;

  if (size === 'big') {
    inputContainerClassName += ' ';
    inputContainerClassName += stylesInput.template__big;
    inputClassName += ' ';
    inputClassName += stylesInput.template__input_big;
  }

  const validate = (input: ChangeEvent<HTMLTextAreaElement>) => {
    const validityState = input.currentTarget.validity;
    if (validityState.valueMissing) {
      setError({ error: true, textError: 'Это поле обязательно' });
    } else if (validityState.patternMismatch) {
      setError({ error: true, textError: errorMessage });
    } else {
      setError({ error: false, textError: '' });
    }

    onChange(input);
  };

  return (
    <div className={inputContainerClassName}>
      <textarea
        className={inputClassName}
        placeholder={placeholder}
        value={value}
        onChange={validate}
        name={name}
        required={required}
      />
      {error.error && (
        <Typography tag="p" className={stylesInput.template__incorrect_text}>
          {error.textError}
        </Typography>
      )}
    </div>
  );
};

export default InputTemplate;
