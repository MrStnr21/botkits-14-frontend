import { FC, useCallback, useState } from 'react';
// import { v4 as uuidv4 } from 'uuid';
import cn from 'classnames/bind';

import ReactFlow, {
  // Node,
  // NodeTypes,
  applyNodeChanges,
  OnNodesChange,
  // OnEdgesChange,
  // OnConnect,
} from 'reactflow';

import ButtonS from '../blocks/buttons/buttons';
import TriggerButton from '../../../ui/buttons/trigger-block-button/trigger-block-button';
import { initialNodes, nodeTypes } from './initial-nodes';

import styles from './layoutFlow.module.scss';
import 'reactflow/dist/style.css';

const cx = cn.bind(styles);

/* const rfStyle = {
  backgroundColor: '#B8CEFF',
}; */

const LayoutFlow: FC = () => {
  const [nodes, setNodes] = useState(initialNodes);
  // const [edges, setEdges] = useState([]);

  const onNodesChange: OnNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    [setNodes]
  );
  /* const onEdgesChange: OnEdgesChange = useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    [setEdges]
  );

  const onConnect: OnConnect = useCallback(
    (connection) => setEdges((eds) => addEdge(connection, eds)),
    [setEdges]
  ); */

  return (
    <div className={cx('flow')}>
      <ReactFlow
        nodes={nodes}
        // edges={edges}
        onNodesChange={onNodesChange}
        // onEdgesChange={onEdgesChange}
        // onConnect={onConnect}
        nodeTypes={nodeTypes}
        fitView
        // style={rfStyle}
      >
        <div className={cx('upWrapper')}>
          <div className={cx('wrapper')}>
            <ButtonS type="stop" />
          </div>
          <div className={cx('wrapper')}>
            <ButtonS type="test" />
          </div>
          <TriggerButton />
        </div>
      </ReactFlow>
    </div>
  );
};

export default LayoutFlow;
