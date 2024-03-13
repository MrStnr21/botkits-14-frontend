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
          btnSize="medium"
          onClick={boldHandler}
          btnStyle="whiteBlack"
        />
      </Tooltip>
      <Divider orientation="vertical" flexItem className={styles.divider} />
      <Tooltip text="Курсив">
        <ButtonIcon
          icon="italic"
          btnSize="medium"
          onClick={italicHandler}
          btnStyle="whiteBlack"
        />
      </Tooltip>
      <Divider orientation="vertical" flexItem className={styles.divider} />
      <Tooltip text="Код">
        <ButtonIcon
          icon="code"
          btnSize="medium"
          onClick={codeHandler}
          btnStyle="whiteBlack"
        />
      </Tooltip>
    </div>
  );
};

export default MenuTextEditor;
