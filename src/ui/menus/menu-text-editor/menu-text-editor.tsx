import { FC } from 'react';

import stylesMenuTextEditor from './menu-text-editor.module.scss';

import { ReactComponent as TrashIcon } from '../../../images/icon/24x24/constructor/delete.svg';
import { ReactComponent as ItalicIcon } from '../../../images/icon/24x24/markdown/italic.svg';
import { ReactComponent as BoldIcon } from '../../../images/icon/24x24/markdown/bold.svg';
import { ReactComponent as CodeIcon } from '../../../images/icon/24x24/markdown/code.svg';
import Tooltip from '../../../components/chat-dialogue/tooltip/tooltip';

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
        <Tooltip text="Жирный">
          <BoldIcon />
        </Tooltip>
      </button>
      <button
        type="button"
        className={stylesMenuTextEditor.button}
        onClick={italicHandler}
      >
        <Tooltip text="Курсив">
          <ItalicIcon />
        </Tooltip>
      </button>
      <button
        type="button"
        className={stylesMenuTextEditor.button}
        onClick={codeHandler}
      >
        <Tooltip text="Код">
          <CodeIcon />
        </Tooltip>
      </button>
      <button
        type="button"
        className={stylesMenuTextEditor.button}
        onClick={deleteHandler}
      >
        <Tooltip text="Удалить текст">
          <TrashIcon className={stylesMenuTextEditor.trash} />
        </Tooltip>
      </button>
    </div>
  );
};

export default MenuTextEditor;
