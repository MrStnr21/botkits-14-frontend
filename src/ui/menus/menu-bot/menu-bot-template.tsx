import { FC } from 'react';

import stylesMenuBot from './menu-bot.module.scss';

import trashIcon from '../../../images/icon/24x24/drop down/trash.svg';
import editIcon from '../../../images/icon/24x24/drop down/edit.svg';
import Typography from '../../typography/typography';

export interface IMenuBotTemplate {
  isActive?: boolean;
  builderFunction: () => void;
  removeFunction: () => void;
  top?: number;
  left?: number;
}

const MenuBotTemplate: FC<IMenuBotTemplate> = ({
  isActive = false,
  builderFunction,
  top = 0,
  left = 0,
  removeFunction,
}): JSX.Element => {
  let boxClassName = stylesMenuBot.box;

  if (isActive) {
    boxClassName += ' ';
    boxClassName += stylesMenuBot.active;
  }

  return (
    <div
      className={boxClassName}
      style={{ top: `${top}px`, left: `${left}px`, width: `200px` }}
    >
      <button
        type="button"
        className={stylesMenuBot.button}
        onClick={builderFunction}
      >
        <img src={editIcon} alt="Иконка" className={stylesMenuBot.icon} />
        <Typography tag="span" className={stylesMenuBot.text}>
          Настроить воронку
        </Typography>
      </button>
      <button
        type="button"
        className={stylesMenuBot.button}
        onClick={removeFunction}
      >
        <img
          src={trashIcon}
          alt="Иконка"
          className={`${stylesMenuBot.icon} ${stylesMenuBot.icon__grey}`}
        />
        <Typography tag="span" className={stylesMenuBot.text}>
          Удалить
        </Typography>
      </button>
    </div>
  );
};

export default MenuBotTemplate;
