import { FC } from 'react';
import { ReactSVG } from 'react-svg';

import PlusIcon from '../../../images/icon/24x24/add_bot/plus.svg';

import stylesButtonAddBot from './button-add-bot.module.scss';
import Typography from '../../typography/typography';

export interface IButtonAddBot {
  buttonHtmlType?: 'button' | 'submit' | 'reset';
  onClick?: VoidFunction;
  disabled?: boolean;
  children: React.ReactNode;
}

const ButtonAddBot: FC<IButtonAddBot> = ({
  buttonHtmlType = 'button',
  onClick,
  disabled,
  children,
}): JSX.Element => {
  return (
    <button
      className={stylesButtonAddBot.button}
      onClick={onClick}
      // eslint-disable-next-line react/button-has-type
      type={buttonHtmlType}
      disabled={disabled}
    >
      <ReactSVG className={stylesButtonAddBot.icon} src={PlusIcon} />
      <Typography
        tag="p"
        fontFamily="secondary"
        className={stylesButtonAddBot.text}
      >
        {children}
      </Typography>
    </button>
  );
};

export default ButtonAddBot;
