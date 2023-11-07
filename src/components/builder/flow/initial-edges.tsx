import { Edge, MarkerType } from 'reactflow';

export default [
  {
    id: '1-2',
    source: 'node-1',
    target: 'node-2',
    targetHandle: 'l',
    type: 'smoothstep',
    markerEnd: {
      type: MarkerType.Arrow,
    },
  },
] as Edge[];
