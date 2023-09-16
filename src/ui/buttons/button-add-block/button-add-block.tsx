import { FC } from 'react';

import stylesButtonAddBlock from './button-add-block.module.scss';

import messageIcon from '../../../images/icon/24x24/add block/message-square.svg';

export interface IButtonAddBlock {
  icon: string;
  name: string;
  onClick?: VoidFunction;
  disabled?: boolean;
}

const ButtonAddBlock: FC<IButtonAddBlock> = ({
  icon = messageIcon,
  name = 'Блок сообщений',
  onClick, // Добавляет блок на схему
  disabled,
}): JSX.Element => {
  return (
    <button
      className={stylesButtonAddBlock.button}
      onClick={onClick}
      type="button"
      disabled={disabled}
    >
      <img src={icon} className={stylesButtonAddBlock.icon} alt="иконка" />
      <p className={stylesButtonAddBlock.name}>{name}</p>
    </button>
  );
};

export default ButtonAddBlock;
