import { Edge, MarkerType } from 'reactflow';
import { unicId } from './initial-nodes';

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
    target: unicId,
    targetHandle: 'l',
  },
];
