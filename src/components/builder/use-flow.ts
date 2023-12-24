import { useReactFlow, useNodeId } from 'reactflow';

const useFlow = () => {
  const { getNodes, setNodes, getNode, getEdges, setEdges } = useReactFlow();
  const id = useNodeId()!;

  return { id, getNodes, setNodes, getNode, getEdges, setEdges };
};

export default useFlow;
