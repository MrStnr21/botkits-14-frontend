import { FC, useState } from 'react';

import stylesMenuBot from './menu-bot.module.scss';

import BotMenuPopup from '../../../components/popups/bot-menu-popup/bot-menu-popup';
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
}): JSX.Element => {
  const [open, setOpen] = useState(false);
  const [settings, setSettings] = useState({
    title: '',
    buttonText: '',
    placeholder: '',
    value: '',
  });

  const copyHandler = () => {
    // eslint-disable-next-line no-console
    console.log('Копия');
  };

  const shareHandler = () => {
    setOpen(true);
    // Пример использования
    setSettings({
      ...settings,
      title: 'Поделитесь доступом к боту',
      placeholder: 'Добавьте e-mail пользователя',
      buttonText: 'поделиться',
    });
    // eslint-disable-next-line no-console
    console.log('Доступ');
  };

  const editHandler = () => {
    // eslint-disable-next-line no-console
    console.log('Редактирование');
    setOpen(true);
    // Пример использования
    setSettings({
      ...settings,
      title: 'Переименуйте файл',
      placeholder: 'Переименуйте файл',
      buttonText: 'Переименовать',
    });
    editFunction(true);
  };

  const deleteHandler = () => {
    // eslint-disable-next-line no-console
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
        {open && (
          <BotMenuPopup
            buttonText={settings.buttonText}
            title={settings.title}
            onClose={() => setOpen(false)}
            placeholder={settings.placeholder}
            value={settings.value}
          />
        )}
      </div>
    );
  }

  return buttons;
};

export default MenuBot;
