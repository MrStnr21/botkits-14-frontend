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
import { setFlowDataInit, newBlockData } from '../../utils';

const ConditionalBlock: FC<TBlockProps<TConditionalBlock>> = ({ data }) => {
  const setFlowData = setFlowDataInit();
  const [mode, setMode] = useState<'easy' | 'hard'>('easy');

  console.log(data);

  const { getNode } = useReactFlow();
  const id = useNodeId() || '';
  const node = getNode(id);

  // добавление условия в сложном режиме
  const addBlock = (type: 'easy' | 'hard') =>
    setFlowData({
      path: ['data', 'variables'],
      value: [...data.variables, newBlockData[type]()],
    });

  // получение набора подблоков по типу ('easy' или 'hard')
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
                  index={index}
                  setTargetBlock={(name: string) =>
                    setFlowData({
                      path: [
                        'data',
                        'variables',
                        index.toString(),
                        'targetBlock',
                      ],
                      value: name,
                    })
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
                  index={index}
                  setTargetBlock={(name: string) =>
                    setFlowData({
                      path: [
                        'data',
                        'variables',
                        index.toString(),
                        'targetBlock',
                      ],
                      value: name,
                    })
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
        <ConstructorAddButton
          onClick={() =>
            mode === 'easy' ? addBlock('easy') : addBlock('hard')
          }
        >
          Добавить условие
        </ConstructorAddButton>
      </div>
    </ControlLayout>
  );
};

export default ConditionalBlock;
