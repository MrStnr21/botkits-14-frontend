import React, { FC, useState } from 'react';
import { Position, useReactFlow, useNodeId } from 'reactflow';
import styles from './button-inline.module.scss';
import ConstructorHelperButton from '../../../../../ui/buttons/constructor-helper-botton/constructor-helper-botton';
import askPhoneIcon from '../../../../../images/icon/24x24/constructor/ask-phone.svg';
import urlIcon from '../../../../../images/icon/24x24/constructor/url.svg';
import CustomHandle from '../../../flow/custom-handle/custom-handle';
import {
  TBlockProps,
  TButtonBlock,
} from '../../../../../services/types/builder';
import { setFlowData } from '../../../utils';

export type TBtnColors = 'white' | 'red' | 'green' | 'blue';

const ButtonInline: FC<TBlockProps<TButtonBlock>> = ({ data }) => {
  const [hidden, setHidden] = useState(true);
  const { getNodes, setNodes, getNode } = useReactFlow();
  const id = useNodeId() || '';

  const [menu, toggleMenu] = useState<boolean>(false);

  const setName = setFlowData({ selectors: ['name'] });
  const setAdditionalString = setFlowData({ selectors: ['str'] });
  const toggleString = setFlowData({
    selectors: ['additionalData'],
    value: !data.additionalData,
  });

  const setColor = (color: string) => {
    const nodes = getNodes();
    setNodes(
      nodes.map((item) => {
        if (item.id === id) {
          return { ...item, data: { ...item.data, color } };
        }
        return item;
      })
    );
  };

  const deleteOnClick = () => {
    const node = getNode(id);
    const nodes = getNodes().filter((item) => item.id !== id);
    setNodes(
      nodes.map((item) => {
        if (
          item.position.y > node!.position.y &&
          node?.parentNode === item.parentNode
        ) {
          return {
            ...item,
            position: { ...item.position, y: item.position.y - 52 },
          };
        }
        return item;
      })
    );
  }; // заглушка в дальнейшем прописать логику удаления ReactFlow ноды

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
