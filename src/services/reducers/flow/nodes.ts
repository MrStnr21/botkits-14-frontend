import { Node } from 'reactflow';
import { initialNodes } from '../../../components/builder/flow/initial-nodes';
import {
  ADD_NODE_FLOW,
  DELETE_NODE_FLOW,
  TFlowNodesAction,
} from '../../actions/flow/nodes';

export type TFlowNodesInitialState = {
  blocks: Node[];
};

const FlowNodesInitialState: TFlowNodesInitialState = {
  blocks: initialNodes,
};

export function FlowActionsReducer(
  // eslint-disable-next-line @typescript-eslint/default-param-last
  state = FlowNodesInitialState,
  action: TFlowNodesAction
) {
  switch (action.type) {
    case ADD_NODE_FLOW: {
      return {
        ...state,
        blocks: [...state.blocks, action.payload],
      };
    }
    case DELETE_NODE_FLOW: {
      const newBlocks = state.blocks.filter(
        (block) => block.id !== action.payload
      );
      return {
        ...state,
        blocks: newBlocks,
      };
    }
    default: {
      return state;
    }
  }
}
