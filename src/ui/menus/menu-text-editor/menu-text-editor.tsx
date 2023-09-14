// to do: Menu
// https://trello.com/c/n9wbVo8O/12-%D0%B2%D1%81%D0%BF%D0%BB%D1%8B%D0%B2%D0%B0%D1%8E%D1%89%D0%B5%D0%B5-%D0%BC%D0%B5%D0%BD%D1%8E
// https://trello.com/c/gUWxjeoo/17-%D0%BC%D0%B5%D0%BD%D1%8E-%D1%83%D1%81%D0%BB%D0%BE%D0%B2%D0%B8%D0%B9

import { FC } from 'react';
import stylesMenuTextEditor from './menu-text-editor.module.scss';
import boldIcon from '../../../images/icon/24x24/markdown/bold.svg';
import italicIcon from '../../../images/icon/24x24/markdown/italic.svg';
import codeIcon from '../../../images/icon/24x24/markdown/code.svg';
import trashIcon from '../../../images/icon/24x24/constructor/delete.svg';

export interface IMenuTextEditor {
  isActive?: boolean;
  top?: number;
  left?: number;
}

const MenuTextEditor: FC<IMenuTextEditor> = ({
  isActive = false,
  top = 0,
  left = 0,
}) => {
  const boldHandler = () => {
    console.log('bold');
  };
  const italicHandler = () => {
    console.log('italic');
  };
  const codeHandler = () => {
    console.log('code');
  };
  const deleteHandler = () => {
    console.log('delete');
  };

  let boxClassName = stylesMenuTextEditor.box;

  if (isActive) {
    boxClassName += ' ';
    boxClassName += stylesMenuTextEditor.active;
  } else {
    boxClassName = stylesMenuTextEditor.box;
  }

  return (
    <div
      style={{ top: `${top}px`, left: `${left}px` }}
      className={boxClassName}
    >
      <button
        type="button"
        className={stylesMenuTextEditor.button}
        onClick={boldHandler}
      >
        <img src={boldIcon} alt="Жирный шрифт" />
      </button>
      <button
        type="button"
        className={stylesMenuTextEditor.button}
        onClick={italicHandler}
      >
        <img src={italicIcon} alt="Курсивный шрифт" />
      </button>
      <button
        type="button"
        className={stylesMenuTextEditor.button}
        onClick={codeHandler}
      >
        <img src={codeIcon} alt="Участок кода" />
      </button>
      <button
        type="button"
        className={stylesMenuTextEditor.button}
        onClick={deleteHandler}
      >
        <img src={trashIcon} alt="Удалить" />
      </button>
    </div>
  );
};

export default MenuTextEditor;
