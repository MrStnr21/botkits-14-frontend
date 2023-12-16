import { v4 as uuidv4 } from 'uuid';
import { Node } from 'reactflow';
import {
  TConditionalBlock,
  TFlowSetter,
} from '../../../../services/types/builder';

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

type TAddBlockParams = Omit<TFlowSetter<TConditionalBlock>, 'data'> & {
  type: 'easy' | 'hard';
};

export const addCompareBlockFlow =
  ({ getNodes, setNodes, id, type }: TAddBlockParams) =>
  () => {
    setNodes(
      getNodes().map((item) => {
        if (item.id === id) {
          return {
            ...item,
            data: {
              ...item.data,
              variables: [...item.data.variables, newBlockData[type]()],
            },
          };
        }
        return item;
      })
    );
  };

type TSetVariablesParams = Omit<TFlowSetter<TConditionalBlock>, 'data'> & {
  node?: Node<any>;
};

export const setItemVariablesFlow =
  ({ getNodes, setNodes, id, node }: TSetVariablesParams) =>
  (
    idItem: string,
    key: 'id' | 'type' | 'variable' | 'sign' | 'condition' | 'targetBlock',
    value: any
  ) => {
    setNodes(
      getNodes().map((item) => {
        if (item.id === id) {
          return {
            ...item,
            data: {
              ...item.data,
              variables:
                node &&
                node.data.variables.map(
                  (elem: { [x: string]: any; id: string }) => {
                    if (elem.id === idItem) {
                      // eslint-disable-next-line no-param-reassign
                      elem[key] = value;
                    }
                    return elem;
                  }
                ),
            },
          };
        }
        return item;
      })
    );
  };
