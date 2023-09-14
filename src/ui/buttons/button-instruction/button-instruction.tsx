// to do: Button
// https://trello.com/c/Raesb3hx/5-buttons-common-1
// копки во втором ряду, первый столбец с default до disabled

import { FC } from 'react';
import { ReactSVG } from 'react-svg';
import stylesButtonInstruction from './button-instruction.module.scss';

export interface IButtonInstruction {
  buttonHtmlType?: 'button' | 'submit' | 'reset';
  url: string;
  disabled?: boolean;
  children: React.ReactNode;
  icon: string;
}

const ButtonInstruction: FC<IButtonInstruction> = ({
  buttonHtmlType = 'button',
  url,
  disabled,
  children,
  icon,
}) => {
  const onClick = () => {
    window.open(url, '_blank');
  };

  return (
    <button
      // eslint-disable-next-line react/button-has-type
      type={buttonHtmlType}
      onClick={onClick}
      className={stylesButtonInstruction.button}
      disabled={disabled}
    >
      <div className={stylesButtonInstruction.image_box}>
        <ReactSVG src={icon} />
      </div>
      <p className={stylesButtonInstruction.text}>{children}</p>
    </button>
  );
};

export default ButtonInstruction;
