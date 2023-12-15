import {
  TDeepLinkBlock,
  TFlowSetter,
} from '../../../../services/types/builder';
import { Option } from '../../../../utils/types';

// eslint-disable-next-line import/prefer-default-export
export const setSelectedFlow =
  ({ getNodes, setNodes, id }: Omit<TFlowSetter<TDeepLinkBlock>, 'data'>) =>
  (fieldName: string) =>
  (option: Option) => {
    setNodes(
      getNodes().map((node) => {
        if (node.id === id) {
          return {
            ...node,
            data: {
              ...node.data,
              [fieldName]: option.value,
            },
          };
        }
        return node;
      })
    );
  };
