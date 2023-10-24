import { FC } from 'react';
import stylesButtonAddBlock from './button-add-block.module.scss';
import messageIcon from '../../../images/icon/24x24/add block/message-square.svg';
import Typography from '../../typography/typography';

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
      <Typography tag="p" className={stylesButtonAddBlock.name}>
        {name}
      </Typography>
    </button>
  );
};

export default ButtonAddBlock;
