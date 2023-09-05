// to do: Button
// https://trello.com/c/Raesb3hx/5-buttons-common-1
// копки во втором ряду, первый столбец с default до disabled

import { FC } from 'react';
import stylesButtonInstruction from './button-instruction.module.scss';
import FaqIcon from '../../../images/icon/add bot/tutorial.svg';

interface IButtonInstruction {
  url: string;
}

const ButtonInstruction: FC<IButtonInstruction> = ({ url }) => {
  const onClick = () => {
    window.open(url, '_blank');
  };

  return (
    <div onClick={onClick} className={stylesButtonInstruction.button}>
      <div className={stylesButtonInstruction.image_box}>
        <img
          src={FaqIcon}
          alt="FAQ"
          className={stylesButtonInstruction.image}
        />
      </div>
      <p className={stylesButtonInstruction.text}>Пошаговая инструкция</p>
    </div>
  );
};

export default ButtonInstruction;
