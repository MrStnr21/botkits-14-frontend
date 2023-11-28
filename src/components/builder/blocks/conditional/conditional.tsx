import { FC, useState, useMemo } from 'react';
import { useReactFlow, useNodeId } from 'reactflow';

import styles from './conditional.module.scss';
import ControlLayout from '../../control-layout/control-layout';
import ConstructorAddButton from '../../../../ui/buttons/constructor-add-button/constructor-add-button';
import {
  TBlockProps,
  TConditionalBlock,
} from '../../../../services/types/builder';
import Mode from './mode/mode';
import ToggleButton from './toggle-button/toggle-button';

const ConditionalBlock: FC<TBlockProps<TConditionalBlock>> = ({ data }) => {
  const [mode, setMode] = useState<'easy' | 'hard'>('easy');

  const { getNodes, setNodes, getNode } = useReactFlow();
  const idNode = useNodeId() || '';
  const node = getNode(idNode);
  const [amountEasy, setAmountEasy] = useState(0);
  const [amountHard, setAmountHard] = useState(0);

  const addHard = () => {
    setNodes(
      getNodes().map((item) => {
        if (item.id === idNode) {
          return {
            ...item,
            data: {
              ...item.data,
              variables: [
                ...item.data.variables,
                {
                  id: `hard-${amountHard + 1}`,
                  type: 'hard',
                  condition: '',
                  targetBlock: '',
                },
              ],
            },
          };
        }
        return item;
      })
    );
    setAmountHard(amountHard + 1);
  };

  const addEasy = () => {
    setNodes(
      getNodes().map((item) => {
        if (item.id === idNode) {
          return {
            ...item,
            data: {
              ...item.data,
              variables: [
                ...item.data.variables,
                {
                  id: `easy-${amountEasy + 1}`,
                  type: 'easy',
                  variable: { key: '' },
                  sign: '',
                  condition: '',
                  targetBlock: '',
                },
              ],
            },
          };
        }
        return item;
      })
    );
    setAmountEasy(amountEasy + 1);
  };

  const setItemVariables = (
    idItem: string,
    key: 'id' | 'type' | 'variable' | 'sign' | 'condition' | 'targetBlock',
    value: any
  ) => {
    setNodes(
      getNodes().map((item) => {
        if (item.id === idNode) {
          return {
            ...item,
            data: {
              ...item.data,
              variables:
                node &&
                node.data.variables.map(
                  (elem: { [x: string]: any; id: string }) => {
                    if (elem.id === idItem) {
                      // eslint-disable-next-line no-param-reassign
                      elem[key] = value;
                    }
                    return elem;
                  }
                ),
            },
          };
        }
        return item;
      })
    );
  };

  const setTargetBlock = (idItem: string, name: string) =>
    setItemVariables(idItem, 'targetBlock', name);

  const content = useMemo(
    () =>
      data.variables.map((item, index) => {
        switch (mode) {
          case 'easy': {
            return (
              item.type === 'easy' && (
                <Mode
                  id={item.id}
                  // eslint-disable-next-line react/no-array-index-key
                  key={index}
                  setTargetBlock={(name: string) =>
                    setTargetBlock(item.id, name)
                  }
                />
              )
            );
          }
          case 'hard': {
            return (
              item.type === 'hard' && (
                <Mode
                  id={item.id}
                  // eslint-disable-next-line react/no-array-index-key
                  key={index}
                  setTargetBlock={(name: string) =>
                    setTargetBlock(item.id, name)
                  }
                />
              )
            );
          }
          default: {
            return null;
          }
        }
      }),
    [node, mode]
  );

  return (
    <ControlLayout type="Условный блок">
      <div className={styles.controls}>
        <ToggleButton
          text="Простой режим"
          onClick={() => setMode('easy')}
          isActive={mode === 'easy'}
        />
        <ToggleButton
          text="Сложный режим"
          onClick={() => setMode('hard')}
          isActive={mode === 'hard'}
        />
      </div>
      <div className={styles.content}>
        {content}
        <ConstructorAddButton onClick={mode === 'easy' ? addEasy : addHard}>
          Добавить условие
        </ConstructorAddButton>
      </div>
    </ControlLayout>
  );
};

export default ConditionalBlock;
