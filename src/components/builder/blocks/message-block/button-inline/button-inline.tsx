import React, { FC, useState } from 'react';
import { Position, ReactFlowProvider } from 'reactflow';

import styles from './button-inline.module.scss';
// eslint-disable-next-line import/no-cycle
import ConstructorHelperButton from '../../../../../ui/buttons/constructor-helper-botton/constructor-helper-botton';
import askPhoneIcon from '../../../../../images/icon/24x24/constructor/ask-phone.svg';
import urlIcon from '../../../../../images/icon/24x24/constructor/url.svg';
import CustomHandle from '../../../flow/custom-handle/custom-handle';

type TButtonProps = {
  data: {
    type: 'button' | 'answer';
    name?: string;
    color?: string;
    str?: string;
  };
};

export type TBtnColors = 'white' | 'red' | 'green' | 'blue';

const InlineButton: FC<TButtonProps> = ({ data }) => {
  const [name, setName] = useState(data.name);
  const [hidden, setHidden] = useState(true);

  const [btnColor, setBtnColor] = useState(data.color || 'white');
  const [menu, toggleMenu] = useState<boolean>(false);
  const [stringVisible, toggleString] = useState<boolean>(false);
  const [additionalString, setAdditionalString] = useState(data.str);

  const deleteOnClick = () => {}; // заглушка в дальнейшем прописать логику удаления ReactFlow ноды

  const getIcon = () => {
    switch (data.type) {
      case 'answer': {
        return askPhoneIcon;
      }
      case 'button': {
        return urlIcon;
      }
      default: {
        return '';
      }
    }
  };

  const getColor = () => {
    switch (btnColor) {
      case 'white': {
        return styles.buttonWhite;
      }
      case 'red': {
        return styles['button-red'];
      }
      case 'green': {
        return styles['button-green'];
      }
      case 'blue': {
        return styles['button-blue'];
      }
      default: {
        return styles.buttonWhite;
      }
    }
  };

  const flexClass =
    data.type === 'button'
      ? styles['button-flex-center']
      : styles['button-flex-start'];

  const textAlignClass =
    data.type === 'button'
      ? styles['text-align-center']
      : styles['text-align-start'];

  return (
    <ReactFlowProvider>
      <div
        className={`${!hidden && styles.outline}`}
        onMouseEnter={() => setHidden(false)}
        onMouseLeave={() => setHidden(true)}
      >
        <CustomHandle position={Position.Right} hidden={hidden} type="target" />
        <div className={styles.container}>
          <div className={styles['absolute-wrapper']}>
            <ConstructorHelperButton
              isVisible={menu}
              askOnClick={() => toggleString(!stringVisible)}
              deleteOnClick={deleteOnClick}
              askIcon={getIcon()}
              color
              colorOnClick={(col) => setBtnColor(col)}
              hide={() => toggleMenu(false)}
            />
          </div>
          <button
            type="button"
            className={`${styles.button} ${getColor()} ${flexClass}`}
            onClick={() => toggleMenu(!menu)}
          >
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={`${
                styles['button-name']
              } ${textAlignClass} ${getColor()}`}
            />
            {stringVisible && data.type === 'button' && (
              <input
                className={`${styles['button-str']} ${textAlignClass}`}
                value={additionalString}
                onChange={(e) => setAdditionalString(e.target.value)}
              />
            )}
            {stringVisible && data.type === 'answer' && (
              <span
                className={`${styles['button-str']} ${styles['text-align-start']}`}
              >
                Запросить телефон
              </span>
            )}
          </button>
        </div>
      </div>
    </ReactFlowProvider>
  );
};

export default InlineButton;
