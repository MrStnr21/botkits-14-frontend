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

  if (size === 'big') {
    inputContainerClassName += ' ';
    inputContainerClassName += stylesInput.template__big;
  }

  return (
    <div className={inputContainerClassName}>
      <textarea
        className={stylesInput.template__input}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default InputTemplate;
