import { FC } from 'react';
import { ReactSVG } from 'react-svg';

import PlusIcon from '../../../images/icon/24x24/add_bot/plus.svg';

import stylesButtonAddSampleBot from './button-add-sample-bot.module.scss';
import Typography from '../../../ui/typography/typography';

export interface IButtonAddSampleBot {
  buttonHtmlType?: 'button' | 'submit' | 'reset';
  onClick?: VoidFunction;
  disabled?: boolean;
  children: React.ReactNode;
  icon: string;
}

const ButtonAddSampleBot: FC<IButtonAddSampleBot> = ({
  buttonHtmlType = 'button',
  onClick,
  disabled,
  children,
  icon,
}) => {
  return (
    <button
      className={stylesButtonAddSampleBot.button}
      onClick={onClick}
      // eslint-disable-next-line react/button-has-type
      type={buttonHtmlType}
      disabled={disabled}
    >
      <div className={stylesButtonAddSampleBot.container}>
        <img
          src={icon}
          alt="иконка бота"
          className={stylesButtonAddSampleBot.template_image}
        />
        <ReactSVG
          className={stylesButtonAddSampleBot.plus_icon}
          src={PlusIcon}
        />
      </div>
      <Typography tag="p" className={stylesButtonAddSampleBot.text}>
        {children}
      </Typography>
    </button>
  );
};

export default ButtonAddSampleBot;
