// eslint-disable-next-line import/no-extraneous-dependencies
import _ from 'lodash';
import { saveVariable } from '../../utils';
import { storeOfVariables } from '../../utils/store';
import {
  TApiBlock,
  TFlowSetterNodes,
} from '../../../../services/types/builder';

export const addFieldFlow =
  ({ getNodes, id, data }: TFlowSetterNodes<TApiBlock>) =>
  (field: 'headers' | 'params' | 'variables', type: 'variable' | 'const') =>
  () => {
    const idVariable = `${id}|||saveResultVariable-${
      data.variables.length + 1
    }`;
    saveVariable(storeOfVariables, '', idVariable);

    const node = getNodes().filter((item) => item.id === id)[0];
    const ChangedElement =
      field === 'variables'
        ? { id: idVariable, name: '', value: '' }
        : { type, name: '', variable: '' };

    _.set(node, ['data', field], [...data[field], ChangedElement]);
  };

export const setVariableFlow =
  ({ getNodes, id, data }: TFlowSetterNodes<TApiBlock>) =>
  (currentTarget: EventTarget & HTMLInputElement) => {
    saveVariable(storeOfVariables, currentTarget.value, currentTarget.id);

    const node = getNodes().filter((item) => item.id === id)[0];

    _.set(
      node,
      ['data', 'variables'],
      data.variables.map((el) => {
        if (el.id === currentTarget.id) {
          return {
            id: currentTarget.id,
            name: currentTarget.value,
            value: '',
          };
        }
        return el;
      })
    );
  };

type TSetValueFlowParams = Omit<TFlowSetterNodes<TApiBlock>, 'data'> & {
  field: string;
  index: number;
};

export const setValueFlow =
  ({ getNodes, id, field, index }: TSetValueFlowParams) =>
  (type: 'name' | 'variable', e: React.ChangeEvent<HTMLInputElement>) => {
    const node = getNodes().filter((item) => item.id === id)[0];

    _.set(node, ['data', field, index], {
      ...node.data[field][index],
      [type]: e.target.value,
    });
  };
