import { v4 as uuidv4 } from 'uuid';
import useFlow from '../../use-flow';
import { saveNode } from '../../utils';

const newBlockData = {
  easy: () => ({
    id: `easy-${uuidv4()}`,
    type: 'easy',
    variable: { id: '', name: '', value: '' },
    sign: '',
    condition: '',
    targetBlock: '',
  }),
  hard: () => ({
    id: `hard-${uuidv4()}`,
    type: 'hard',
    condition: '',
    targetBlock: '',
  }),
};

export const addCompareBlockFlow = () => {
  const { getNodes, setNodes, id, getNode } = useFlow();
  return (type: 'easy' | 'hard') => {
    const node = getNode(id)!;
    saveNode({
      setNodes,
      getNodes,
      node,
      id,
      path: ['data', 'variables'],
      value: [...node.data.variables, newBlockData[type]()],
    });
  };
};

export const setItemVariablesFlow = () => {
  const { getNodes, setNodes, id, getNode } = useFlow();
  return (
    idItem: string,
    key: 'id' | 'type' | 'variable' | 'sign' | 'condition' | 'targetBlock',
    val: any
  ) => {
    const node = getNode(id)!;
    const value = node.data.variables.map(
      (elem: { [x: string]: any; id: string }) => {
        if (elem.id === idItem) {
          // eslint-disable-next-line no-param-reassign
          elem[key] = val;
        }
        return elem;
      }
    );
    saveNode({
      setNodes,
      getNodes,
      node,
      id,
      path: ['data', 'variables'],
      value,
    });
  };
};
