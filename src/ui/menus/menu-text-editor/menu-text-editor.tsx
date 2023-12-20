import { FC } from 'react';

import stylesMenuTextEditor from './menu-text-editor.module.scss';

import { ReactComponent as ItalicIcon } from '../../../images/icon/24x24/markdown/italic.svg';
import { ReactComponent as BoldIcon } from '../../../images/icon/24x24/markdown/bold.svg';
import { ReactComponent as CodeIcon } from '../../../images/icon/24x24/markdown/code.svg';
import Tooltip from '../../../components/chat/chat-dialogue/tooltip/tooltip';

export interface IMenuTextEditor {
  isActive?: boolean;
  top?: number;
  left?: number;
  boldHandler?: () => void;
  italicHandler?: () => void;
  codeHandler?: () => void;
}

const MenuTextEditor: FC<IMenuTextEditor> = ({
  isActive = false,
  top = 0,
  left = 0,
  boldHandler,
  italicHandler,
  codeHandler,
}): JSX.Element => {
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
    </div>
  );
};

export default MenuTextEditor;
