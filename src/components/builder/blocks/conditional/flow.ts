import { v4 as uuidv4 } from 'uuid';
import { Node } from 'reactflow';
import {
  TConditionalBlock,
  TFlowSetter,
} from '../../../../services/types/builder';

type TAddBlockParams = Omit<TFlowSetter<TConditionalBlock>, 'data'>;

export const addHardFlow =
  ({ getNodes, setNodes, id }: TAddBlockParams) =>
  () => {
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
                  id: `hard-${uuidv4()}`,
                  type: 'hard',
                  condition: '',
                  targetBlock: '',
                },
              ],
            },
          };
        }
        return item;
      })
    );
  };

export const addEasyFlow =
  ({ getNodes, setNodes, id }: TAddBlockParams) =>
  () => {
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
                  id: `easy-${uuidv4()}`,
                  type: 'easy',
                  variable: { id: '', name: '', value: '' },
                  sign: '',
                  condition: '',
                  targetBlock: '',
                },
              ],
            },
          };
        }
        return item;
      })
    );
  };

type TSetVariablesParams = TAddBlockParams & {
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
