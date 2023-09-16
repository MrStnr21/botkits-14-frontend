// to do: Menu
// https://trello.com/c/n9wbVo8O/12-%D0%B2%D1%81%D0%BF%D0%BB%D1%8B%D0%B2%D0%B0%D1%8E%D1%89%D0%B5%D0%B5-%D0%BC%D0%B5%D0%BD%D1%8E
// https://trello.com/c/gUWxjeoo/17-%D0%BC%D0%B5%D0%BD%D1%8E-%D1%83%D1%81%D0%BB%D0%BE%D0%B2%D0%B8%D0%B9

import { FC } from 'react';
import stylesMenuBot from './menu-bot.module.scss';
import copyIcon from '../../../images/icon/24x24/drop down/copy bot.svg';
import trashIcon from '../../../images/icon/24x24/drop down/trash.svg';
import shareIcon from '../../../images/icon/24x24/drop down/share.svg';
import editIcon from '../../../images/icon/24x24/drop down/edit.svg';

export interface IMenuBot {
  size?: 'medium' | 'large';
  isActive?: boolean;
  editFunction: Function;
  top?: number;
  left?: number;
}

const MenuBot: FC<IMenuBot> = ({
  size,
  isActive = false,
  editFunction,
  top = 0,
  left = 0,
}) => {
  const copyHandler = () => {
    console.log('Копия');
  };

  const shareHandler = () => {
    console.log('Доступ');
  };

  const editHandler = () => {
    console.log('Редактирование');
    editFunction(true);
  };

  const deleteHandler = () => {
    console.log('Удалить');
  };

  let boxClassName = stylesMenuBot.box;

  if (isActive) {
    boxClassName += ' ';
    boxClassName += stylesMenuBot.active;
  }

  let buttons = (
    <div
      className={boxClassName}
      style={{ top: `${top}px`, left: `${left}px` }}
    >
      <button
        type="button"
        className={stylesMenuBot.button}
        onClick={copyHandler}
      >
        <img src={copyIcon} alt="Иконка" className={stylesMenuBot.icon} />
        <p className={stylesMenuBot.text}>Копировать</p>
      </button>
    </div>
  );

  if (size === 'medium') {
    buttons = (
      <div
        className={boxClassName}
        style={{ top: `${top}px`, left: `${left}px` }}
      >
        <button
          type="button"
          className={stylesMenuBot.button}
          onClick={copyHandler}
        >
          <img src={copyIcon} alt="Иконка" className={stylesMenuBot.icon} />
          <p className={stylesMenuBot.text}>Копировать</p>
        </button>
        <button
          type="button"
          className={stylesMenuBot.button}
          onClick={deleteHandler}
        >
          <img
            src={trashIcon}
            alt="Иконка"
            className={`${stylesMenuBot.icon} ${stylesMenuBot.icon__grey}`}
          />
          <p className={stylesMenuBot.text}>Удалить</p>
        </button>
      </div>
    );
  } else if (size === 'large') {
    buttons = (
      <div
        className={boxClassName}
        style={{ top: `${top}px`, left: `${left}px` }}
      >
        <button
          type="button"
          className={stylesMenuBot.button}
          onClick={copyHandler}
        >
          <img src={copyIcon} alt="Иконка" className={stylesMenuBot.icon} />
          <p className={stylesMenuBot.text}>Копировать</p>
        </button>
        <button
          type="button"
          className={stylesMenuBot.button}
          onClick={shareHandler}
        >
          <img src={shareIcon} alt="Иконка" className={stylesMenuBot.icon} />
          <p className={stylesMenuBot.text}>Общий доступ</p>
        </button>
        <button
          type="button"
          className={stylesMenuBot.button}
          onClick={editHandler}
        >
          <img
            src={editIcon}
            alt="Иконка"
            className={`${stylesMenuBot.icon} ${stylesMenuBot.icon__grey}`}
          />
          <p className={stylesMenuBot.text}>Редактировать</p>
        </button>
        <button
          type="button"
          className={stylesMenuBot.button}
          onClick={deleteHandler}
        >
          <img
            src={trashIcon}
            alt="Иконка"
            className={`${stylesMenuBot.icon} ${stylesMenuBot.icon__grey}`}
          />
          <p className={stylesMenuBot.text}>Удалить</p>
        </button>
      </div>
    );
  }

  return buttons;
};

export default MenuBot;
