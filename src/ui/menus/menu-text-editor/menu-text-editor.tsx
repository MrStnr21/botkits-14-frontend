import { FC } from 'react';

import stylesMenuTextEditor from './menu-text-editor.module.scss';

import trashIcon from '../../../images/icon/24x24/constructor/delete.svg';
import italicIcon from '../../../images/icon/24x24/markdown/italic.svg';
import boldIcon from '../../../images/icon/24x24/markdown/bold.svg';
import codeIcon from '../../../images/icon/24x24/markdown/code.svg';

export interface IMenuTextEditor {
  isActive?: boolean;
  top?: number;
  left?: number;
}

const MenuTextEditor: FC<IMenuTextEditor> = ({
  isActive = false,
  top = 0,
  left = 0,
}): JSX.Element => {
  const boldHandler = () => {
    console.log('bold');
  };
  const italicHandler = () => {
    // eslint-disable-next-line no-console
    console.log('italic');
  };
  const codeHandler = () => {
    // eslint-disable-next-line no-console
    console.log('code');
  };
  const deleteHandler = () => {
    // eslint-disable-next-line no-console
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
