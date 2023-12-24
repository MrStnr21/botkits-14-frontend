import { saveNode, saveVariable } from '../../utils';
import { storeOfVariables } from '../../utils/store';
import { TVariable } from '../../../../services/types/builder';
import useFlow from '../../use-flow';

export const addFieldFlow = () => {
  const { getNodes, setNodes, id, getNode } = useFlow();
  return (
      field: 'headers' | 'params' | 'variables',
      type: 'variable' | 'const'
    ) =>
    () => {
      const node = getNode(id)!;
      const idVariable = `${id}|||saveResultVariable-${
        node.data.variables.length + 1
      }`;
      saveVariable(storeOfVariables, '', idVariable);

      const value =
        field === 'variables'
          ? { id: idVariable, name: '', value: '' }
          : { type, name: '', variable: '' };

      saveNode({
        getNodes,
        setNodes,
        id,
        value: [...node.data[field], value],
        path: ['data', field],
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
      id,
      node,
      path: ['data', 'variables'],
      value,
    });
  };
};

export const setValueFlow = () => {
  const { getNodes, setNodes, id, getNode } = useFlow();
  return (field: string, index: number, type: 'name' | 'variable') =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const node = getNode(id)!;
      saveNode({
        getNodes,
        setNodes,
        id,
        node,
        path: ['data', field, index.toString(), type],
        value: e.target.value,
      });
    };
};
