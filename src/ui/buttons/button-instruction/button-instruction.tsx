// to do: Button
// https://trello.com/c/Raesb3hx/5-buttons-common-1
// копки во втором ряду, первый столбец с default до disabled

import { FC } from 'react';
import { ReactSVG } from 'react-svg';
import stylesButtonInstruction from './button-instruction.module.scss';
import FaqIcon from '../../../images/icon/add bot/tutorial.svg';

export interface IButtonInstruction {
  url: string;
  disabled: boolean;
}

const ButtonInstruction: FC<IButtonInstruction> = ({ url, disabled }) => {
  const onClick = () => {
    window.open(url, '_blank');
  };

  const disabledClassnames = {
    button:
      disabled === false
        ? stylesButtonInstruction.button
        : stylesButtonInstruction.button__disabled,
    image: disabled === false ? '1' : '.8',
    text:
      disabled === false
        ? stylesButtonInstruction.text
        : stylesButtonInstruction.text__disabled,
  };

  return (
    <div onClick={onClick} className={disabledClassnames.button}>
      <div className={stylesButtonInstruction.image_box}>
        <ReactSVG
          src={FaqIcon}
          desc="FAQ"
          beforeInjection={(svg) => {
            svg.setAttribute(
              'style',
              `fill-opacity: ${disabledClassnames.image}`
            );
          }}
        />
      </div>
      <p className={disabledClassnames.text}>Пошаговая инструкция</p>
    </div>
  );
};

export default ButtonInstruction;
/* <img
          src={FaqIcon}
          alt="FAQ"
        /> */
