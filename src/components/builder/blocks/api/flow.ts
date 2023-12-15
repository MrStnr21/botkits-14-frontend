import { saveVariable } from '../../utils';
import { storeOfVariables } from '../../utils/store';
import { TApiBlock, TFlowSetter } from '../../../../services/types/builder';

export const addFieldFlow =
  ({ getNodes, setNodes, id, data }: TFlowSetter<TApiBlock>) =>
  (field: 'headers' | 'params' | 'variables', type: 'variable' | 'const') =>
  () => {
    const idVariable = `${id}|||saveResultVariable-${
      data.variables.length + 1
    }`;
    saveVariable(storeOfVariables, '', idVariable);

    setNodes(
      getNodes().map((item) => {
        if (item.id === id) {
          return {
            ...item,
            data: {
              ...item.data,
              [field]: [
                ...item.data[field],
                field === 'variables'
                  ? { id: idVariable, name: '', value: '' }
                  : { type, name: '', variable: '' },
              ],
            },
          };
        }
        return item;
      })
    );
  };

export const setVariableFlow =
  ({ getNodes, setNodes, id, data }: TFlowSetter<TApiBlock>) =>
  (currentTarget: EventTarget & HTMLInputElement) => {
    saveVariable(storeOfVariables, currentTarget.value, currentTarget.id);
    return setNodes(
      getNodes().map((item) => {
        if (item.id === id) {
          return {
            ...item,
            data: {
              ...item.data,
              variables: data.variables.map((el) => {
                if (el.id === currentTarget.id) {
                  return {
                    id: currentTarget.id,
                    name: currentTarget.value,
                    value: '',
                  };
                }
                return el;
              }),
            },
          };
        }
        return item;
      })
    );
  };

type TSetValueFlowParams = Omit<TFlowSetter<TApiBlock>, 'data'> & {
  field: string;
  index: number;
};

export const setValueFlow =
  ({ getNodes, setNodes, id, field, index }: TSetValueFlowParams) =>
  (type: 'name' | 'variable') =>
  (e: React.ChangeEvent<HTMLInputElement>) => {
    setNodes(
      getNodes().map((item) => {
        if (item.id === id) {
          return {
            ...item,
            data: {
              ...item.data,
              [field]: [
                ...item.data[field].slice(0, index),
                { ...item.data[field][index], [type]: e.target.value },
                ...item.data[field].slice(index + 1),
              ],
            },
          };
        }
        return item;
      })
    );
  };
