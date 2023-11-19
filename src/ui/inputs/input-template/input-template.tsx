import React, { FC, ChangeEvent } from 'react';
import stylesInput from './input-template.module.scss';

export interface IInputTemplate {
  placeholder?: string;
  value?: string;
  onChange?: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  size: 'small' | 'big';
  color: 'grey' | 'black';
}

const InputTemplate: FC<IInputTemplate> = ({
  value,
  placeholder = 'Введите сообщение...',
  onChange,
  size,
  color,
}) => {
  let inputClassName = stylesInput.template__input;
  let inputContainerClassName = stylesInput.template;

  if (size === 'big') {
    inputContainerClassName += ' ';
    inputContainerClassName += stylesInput.template__big;
  }
  if (color === 'black') {
    inputClassName += ' ';
    inputClassName += stylesInput.template__black;
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
