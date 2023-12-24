import { Option } from '../../../../utils/types';
import useFlow from '../../use-flow';
import { saveNode } from '../../utils';

export const setSelectedFlow = () => {
  const { getNodes, setNodes, id, getNode } = useFlow();
  return (fieldName: string) => (option: Option) => {
    const node = getNode(id)!;

    saveNode({
      setNodes,
      getNodes,
      node,
      id,
      path: ['data', fieldName],
      value: option.value,
    });
  };
};

export default {};
