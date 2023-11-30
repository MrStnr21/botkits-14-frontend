import React, { FC, ChangeEvent } from 'react';
import stylesInput from './input-template.module.scss';

export interface IInputTemplate {
  placeholder?: string;
  value?: string;
  onChange?: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  size: 'small' | 'big';
}

const InputTemplate: FC<IInputTemplate> = ({
  value,
  placeholder = 'Введите сообщение...',
  onChange,
  size,
}) => {
  let inputContainerClassName = stylesInput.template;
  let inputClassName = stylesInput.template__input;

  if (size === 'big') {
    inputContainerClassName += ' ';
    inputContainerClassName += stylesInput.template__big;
    inputClassName += ' ';
    inputClassName += stylesInput.template__input_big;
  }

  return (
    <div className={inputContainerClassName}>
      <textarea
        className={inputClassName}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default InputTemplate;
