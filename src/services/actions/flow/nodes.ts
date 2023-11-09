import { Node } from 'reactflow';

const ADD_NODE_FLOW = 'ADD_NODE_FLOW';
const DELETE_NODE_FLOW = 'DELETE_NODE_FLOW';

export interface IAddNodeFlowAction {
  readonly type: typeof ADD_NODE_FLOW;
  payload: Node;
}

export interface IDeleteNodeFlowAction {
  readonly type: typeof DELETE_NODE_FLOW;
  payload: string;
}

export type TFlowNodesAction = IAddNodeFlowAction | IDeleteNodeFlowAction;

export { ADD_NODE_FLOW, DELETE_NODE_FLOW };
