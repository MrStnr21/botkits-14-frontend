import { FC } from 'react';

import { Divider } from '@mui/material';
import styles from './menu-text-editor.module.scss';

import Tooltip from '../../../components/chat/chat-dialogue/tooltip/tooltip';
import ButtonIcon from '../../buttons/button-icon/button-icon';

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
}) => {
  let boxClassName = styles.box;

  if (isActive) {
    boxClassName += ' ';
    boxClassName += styles.active;
  } else {
    boxClassName = styles.box;
  }

  return (
    <div
      style={{ top: `${top}px`, left: `${left}px` }}
      className={boxClassName}
    >
      <Tooltip text="Жирный">
        <ButtonIcon
          icon="bold"
          onClick={boldHandler}
          btnStyle={styles.button}
        />
      </Tooltip>
      <Divider orientation="vertical" flexItem className={styles.divider} />
      <Tooltip text="Курсив">
        <ButtonIcon
          icon="italic"
          onClick={italicHandler}
          btnStyle={styles.button}
        />
      </Tooltip>
      <Divider orientation="vertical" flexItem className={styles.divider} />
      <Tooltip text="Код">
        <ButtonIcon
          icon="code"
          onClick={codeHandler}
          btnStyle={styles.button}
        />
      </Tooltip>
    </div>
  );
};

export default MenuTextEditor;
