import { FC, useMemo, useState } from 'react';
import { useReactFlow, useNodeId } from 'reactflow';
import Input from '../../../../../ui/inputs/input/input';

export type THardBlockProps = {
  id: string;
};

const HardMode: FC<THardBlockProps> = ({ id }) => {
  const [input, setInput] = useState(false);
  const { getNodes, setNodes } = useReactFlow();
  const idNode = useNodeId();

  const node = getNodes().find((item) => item.id === idNode);

  const itemVariables = () =>
    node && node.data.variables.find((item: { id: string }) => item.id === id);

  const setItemVariables = (
    key: 'id' | 'type' | 'variable' | 'sign' | 'condition' | 'targetBlock',
    value: any
  ) => {
    itemVariables()[key] = value;

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

  const setCondition = (value: any) => {
    setItemVariables('condition', value);
    setInput(!input);
  };

  const content = useMemo(
    () => (
      <Input
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          setCondition(event.target.value)
        }
        styled="bot-builder-default"
        placeholder="Условие"
        value={itemVariables().condition}
        minLength={0}
        required={false}
      />
    ),
    [node, input]
  );

  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{content}</>;
};

export default HardMode;
