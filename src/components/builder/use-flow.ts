import { useReactFlow, useNodeId } from 'reactflow';

const useFlow = () => {
  const { getNodes, setNodes, getNode } = useReactFlow();
  const id = useNodeId()!;

  return { id, getNodes, setNodes, getNode };
};

export default useFlow;
