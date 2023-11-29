import { FC } from 'react';

import stylesButtonBotTemplate from './button-bot-template.module.scss';

export interface IButtonBotTemplate {
  buttonHtmlType?: 'button' | 'submit' | 'reset';
  onClick?: VoidFunction;
  disabled?: boolean;
  children: React.ReactNode;
  color: 'blue' | 'white';
}

const ButtonBotTemplate: FC<IButtonBotTemplate> = ({
  buttonHtmlType = 'button',
  onClick,
  disabled,
  children = 'Сохренить изменения',
  color,
}): JSX.Element => {
  let boxClassName = stylesButtonBotTemplate.button;

  if (color === 'blue') {
    boxClassName += ' ';
    boxClassName += stylesButtonBotTemplate.blue;
  }
  if (color === 'white') {
    boxClassName += ' ';
    boxClassName += stylesButtonBotTemplate.white;
  }

  return (
    <button
      className={boxClassName}
      onClick={onClick}
      // eslint-disable-next-line react/button-has-type
      type={buttonHtmlType}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default ButtonBotTemplate;
