import { FC, useState, useMemo } from 'react';
import { useReactFlow, useNodeId } from 'reactflow';
import { v4 as uuidv4 } from 'uuid';

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

  const content = useMemo(() => data.variables, [data]);

  const { getNodes, setNodes } = useReactFlow();
  const id = useNodeId();

  const node = getNodes().find((item) => item.id === id);

  const itemVariables = (idItem: string) =>
    node &&
    node.data.variables.find((item: { id: string }) => item.id === idItem);

  // const itemVariables1 = node && node.data.variables[0] && node.data.variables[0].variable.key;

  const [amountEasy, setAmountEasy] = useState(0);
  const [amountHard, setAmountHard] = useState(0);

  const addHard = () => {
    setNodes(
      getNodes().map((item) => {
        if (item.id === id) {
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
        if (item.id === id) {
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

  const setItemVariables = (idItem: string, key: string, value: any) => {
    itemVariables(idItem)[key] = value;

    setNodes(
      getNodes().map((item) => {
        if (item.id === id) {
          return {
            ...item,
            data: {
              ...item.data,
              variables: [
                ...item.data.variables,
                {
                  itemVariables,
                },
              ],
            },
          };
        }
        return item;
      })
    );
  };

  const setCondition = (idItem: string, value: any) =>
    setItemVariables(idItem, 'condition', value);

  const setTargetBlock = (idItem: string, name: string) =>
    setItemVariables(idItem, 'targetBlock', name);

  const setSign = (idItem: string, name: string) =>
    setItemVariables(idItem, 'sign', name);

  const setVariable = (idItem: string, name: string) =>
    setItemVariables(idItem, 'variable', { key: name });

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
        {/* `yuwtwtw ${itemVariables1} ${node && node.data.variables.length}` */}
        {mode === 'easy'
          ? content.map((item) => {
              return (
                item.type === 'easy' && (
                  <Mode
                    type={item.type}
                    targetBlock={item.targetBlock}
                    title="Если"
                    data={{ ...item }}
                    setTargetBlock={(name: string) =>
                      setTargetBlock(item.id, name)
                    }
                    setCondition={(
                      event: React.ChangeEvent<HTMLInputElement>
                    ) => setCondition(item.id, event.target.value)}
                    setVariable={(name: string) => setVariable(item.id, name)}
                    setSign={(name: string) => setSign(item.id, name)}
                    key={`${item.type}-${uuidv4()}`}
                  />
                )
              );
            })
          : content.map((item) => {
              return (
                item.type === 'hard' && (
                  <Mode
                    type={item.type}
                    targetBlock={item.targetBlock}
                    title="Если"
                    data={{ ...item }}
                    setTargetBlock={(name: string) =>
                      setTargetBlock(item.id, name)
                    }
                    setCondition={(
                      event: React.ChangeEvent<HTMLInputElement>
                    ) => setCondition(item.id, event.target.value)}
                    key={`${item.type}-${uuidv4()}`}
                  />
                )
              );
            })}
        <ConstructorAddButton onClick={mode === 'easy' ? addEasy : addHard}>
          Добавить условие
        </ConstructorAddButton>
      </div>
    </ControlLayout>
  );
};

export default ConditionalBlock;
