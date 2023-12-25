import { FC, useMemo } from 'react';
import { useReactFlow, useNodeId } from 'reactflow';
import Input from '../../../../../ui/inputs/input/input';
import { setFlowDataInit } from '../../../utils';

export type THardBlockProps = {
  id: string;
  index: number;
};

/**
 * компонент-подблок для  взаимодействия с переменной, уникальная для сложного режима часть
 */
const HardMode: FC<THardBlockProps> = ({ id, index }) => {
  const setFlowData = setFlowDataInit();
  const { getNode } = useReactFlow();
  const idNode = useNodeId() || '';
  const node = getNode(idNode);

  const itemFromVariables = useMemo(
    () =>
      node &&
      node.data.variables.filter((item: { id: string }) => item.id === id)[0],
    [node]
  );

  const setCondition = (value: any) => {
    setFlowData({
      path: ['data', 'variables', index.toString(), 'condition'],
      value,
    });
  };

  const content = useMemo(
    () => (
      <Input
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          setCondition(event.target.value)
        }
        styled="bot-builder-default"
        placeholder="Условие"
        value={itemFromVariables.condition}
        minLength={0}
        required={false}
      />
    ),
    [node]
  );

  return content;
};

export default HardMode;
