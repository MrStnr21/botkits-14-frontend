import useFlow from '../../use-flow';
import { saveNode } from '../../utils';

export const setDataButtonFlow = () => {
  const { getNodes, setNodes, id, getNode } = useFlow();
  return ({ selector, value }: { selector: string; value: any }) => {
    const node = getNode(id)!;

    saveNode({
      getNodes,
      setNodes,
      id,
      node,
      path: ['data', selector],
      value,
    });
  };
};

export const addFileFlow = () => {
  const { getNodes, setNodes, id, getNode } = useFlow();
  return (e: React.ChangeEvent<HTMLInputElement>) => {
    const node = getNode(id)!;

    saveNode({
      getNodes,
      setNodes,
      id,
      node,
      path: ['data', 'image'],
      value: e.target.files && e.target.files[0],
    });
    e.target.value = '';
  };
};

export const removeFileFlow = () => {
  const { getNodes, setNodes, id, getNode } = useFlow();
  return () => {
    const node = getNode(id)!;

    saveNode({
      getNodes,
      setNodes,
      id,
      node,
      path: ['data', 'image'],
      value: '',
    });
  };
};
