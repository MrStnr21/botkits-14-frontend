import React, { FC, useState } from 'react';
import { Position } from 'reactflow';
import styles from './button-inline.module.scss';
import ConstructorHelperButton from '../../../../../ui/buttons/constructor-helper-botton/constructor-helper-botton';
import CustomHandle from '../../../flow/custom-handle/custom-handle';
import {
  TBlockProps,
  TButtonBlock,
} from '../../../../../services/types/builder';
import { setFlowDataInit } from '../../../utils';
import { deleteOnClickFlow, toggleStringFlow } from '../flow';
import { IconName } from '../../../../../ui/icon/utils';

export type TBtnColors = 'white' | 'red' | 'green' | 'blue';

/**
 * компонент-нода. кнопка/ответ, добавляем(ый/ая) в MessageBlock
 */
const ButtonInline: FC<TBlockProps<TButtonBlock>> = ({ data }) => {
  const setFlowData = setFlowDataInit();
  const [hidden, setHidden] = useState(true);

  const [menu, toggleMenu] = useState<boolean>(false);

  const setName = (e: React.ChangeEvent<HTMLInputElement>) =>
    setFlowData({ path: ['data', 'name'], value: e.target.value });
  const setAdditionalString = (e: React.ChangeEvent<HTMLInputElement>) =>
    setFlowData({ path: ['data', 'str'], value: e.target.value });

  // ReactFlow стандартно поддерживает удаление nodes по клику на заданную кнопку. Данная функция для отмены такого поведения
  const preventButtonRemove = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Backspace') {
      e.stopPropagation();
    }
  };

  // Добавление/удаление 2-ой строки в кнопке/ответе. При добавлении/удалении нужно пересчитывать положение прочих элементов
  const toggleString = toggleStringFlow();

  const setColor = (color: string) =>
    setFlowData({ path: ['data', 'color'], value: color });

  // функция удаления кнопки/ответа. При удалении требуется пересчитывать расположение прочих кнопок/ответов
  const deleteOnClick = deleteOnClickFlow();

  const getIcon = (): IconName => {
    switch (data.type) {
      case 'answer': {
        return 'askPhone';
      }
      case 'button': {
        return 'constructorUrl';
      }
      default: {
        return 'askPhone';
      }
    }
  };

  const getColor = () => {
    switch (data.color) {
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
    <div
      onKeyDown={preventButtonRemove}
      className={`${!hidden && styles.outline}`}
      onMouseEnter={() => setHidden(false)}
      onMouseLeave={() => setHidden(true)}
    >
      <CustomHandle position={Position.Right} hidden={hidden} type="source" />
      <div className={styles.container}>
        <div className={styles['absolute-wrapper']}>
          <ConstructorHelperButton
            isVisible={menu}
            askOnClick={toggleString}
            deleteOnClick={deleteOnClick}
            askIcon={getIcon()}
            color
            colorOnClick={(col) => setColor(col)}
            hide={() => toggleMenu(false)}
          />
        </div>
        <button
          type="button"
          className={`${styles.button} ${getColor()} ${flexClass}`}
          onClick={() => toggleMenu(!menu)}
        >
          <input
            value={data.name}
            onChange={setName}
            className={`${
              styles['button-name']
            } ${textAlignClass} ${getColor()}`}
          />
          {data.additionalData && data.type === 'button' && (
            <input
              className={`${styles['button-str']} ${textAlignClass}`}
              value={data.str}
              onChange={setAdditionalString}
            />
          )}
          {data.additionalData && data.type === 'answer' && (
            <span
              className={`${styles['button-str']} ${styles['text-align-start']}`}
            >
              Запросить телефон
            </span>
          )}
        </button>
      </div>
    </div>
  );
};

export default ButtonInline;
