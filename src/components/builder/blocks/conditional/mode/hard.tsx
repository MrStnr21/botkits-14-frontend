import { FC } from 'react';
import { useReactFlow, useNodeId } from 'reactflow';
import Input from '../../../../../ui/inputs/input/input';

export type THardBlockProps = {
  id: string;
};

const HardMode: FC<THardBlockProps> = ({ id }) => {
  const { getNodes, setNodes } = useReactFlow();
  const idNode = useNodeId();

  const node = getNodes().find((item) => item.id === idNode);

  const itemVariables = () =>
    node && node.data.variables.find((item: { id: string }) => item.id === id);

  const setItemVariables = (
    keyy: 'id' | 'type' | 'variable' | 'sign' | 'condition' | 'targetBlock',
    value: any
  ) => {
    itemVariables()[keyy] = value;

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

  const setCondition = (value: any) => setItemVariables('condition', value);

  return (
    <Input
      onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
        setCondition(event.target.value)
      }
      styled="bot-builder-default"
      placeholder="Условие"
      value={itemVariables().condition}
    />
  );
};

export default HardMode;
