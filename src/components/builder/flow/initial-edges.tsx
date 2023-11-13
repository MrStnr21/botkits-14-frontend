import { Edge, MarkerType } from 'reactflow';

export const edgeOptions = {
  type: 'smoothstep',
  markerEnd: {
    type: MarkerType.Arrow,
  },
};

export const initialEdges: Edge[] = [
  {
    id: '1-2',
    source: 'node-1',
    target: 'node-2',
    targetHandle: 'l',
  },
];
