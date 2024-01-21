import { connectStrings, saveNode, saveVariable } from '../../utils';
import { storeOfVariables } from '../../utils/store';
import { TVariable } from '../../../../services/types/builder';
import useFlow from '../../use-flow';

export const addVariableFlow = () => {
  const { getNodes, setNodes, id, getNode } = useFlow();
  return () => {
    const node = getNode(id)!;
    const idVariable = connectStrings(
      // eslint-disable-next-line no-unsafe-optional-chaining
      [id, `saveResultVariable-${node?.data.variables.length + 1}`],
      '|||'
    );
    saveVariable(storeOfVariables, '', idVariable);

    const value = { id: idVariable, name: '', value: '' };

    saveNode({
      getNodes,
      setNodes,
      // eslint-disable-next-line no-unsafe-optional-chaining
      value: node ? [...node.data.variables, value] : [value],
      path: ['data', 'variables'],
      node,
    });
  };
};

export const setVariableFlow = () => {
  const { getNodes, setNodes, id, getNode } = useFlow();
  return (currentTarget: EventTarget & HTMLInputElement) => {
    saveVariable(storeOfVariables, currentTarget.value, currentTarget.id);
    const node = getNode(id)!;
    const value = node.data.variables.map((el: TVariable) => {
      if (el.id === currentTarget.id) {
        return {
          id: currentTarget.id,
          name: currentTarget.value,
          value: '',
        };
      }
      return el;
    });
    saveNode({
      getNodes,
      setNodes,
      node,
      path: ['data', 'variables'],
      value,
    });
  };
};
