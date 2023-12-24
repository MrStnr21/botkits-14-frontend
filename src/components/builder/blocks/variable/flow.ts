import { v4 as uuidv4 } from 'uuid';
import useFlow from '../../use-flow';
import { saveNode } from '../../utils';

export const addFieldFlow = () => {
  const { getNodes, setNodes, id, getNode } = useFlow();
  return () => {
    const node = getNode(id)!;
    saveNode({
      getNodes,
      setNodes,
      id,
      node,
      path: ['data', 'variables'],
      value: [
        ...node.data.variables,
        {
          id: uuidv4(),
          variable: '',
          value: '',
        },
      ],
    });
  };
};

export const setItemValuesFlow = () => {
  const { getNodes, setNodes, id, getNode } = useFlow();
  return (key: string, value: any, blockId: string) => {
    const node = getNode(id)!;
    saveNode({
      getNodes,
      setNodes,
      id,
      node,
      path: ['data', 'variables', blockId, key],
      value,
    });
  };
};
