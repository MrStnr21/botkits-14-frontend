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

import ButtonStart from '../blocks/button-start/button-start';
import TriggerButton from '../../../ui/buttons/trigger-block-button/trigger-block-button';
import { initialNodes, nodeTypes } from './initial-nodes';

import styles from './layoutFlow.module.scss';
import 'reactflow/dist/style.css';
import NavigationPanel from '../navigation-panel/navigation-panel';

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
        defaultViewport={{
          zoom: 1,
          x: 0,
          y: 0,
        }}
        maxZoom={3}
        minZoom={0.1}
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
            <ButtonStart data={{ type: 'stop' }} />
          </div>
          <div className={cx('wrapper')}>
            <ButtonStart data={{ type: 'test' }} />
          </div>
          <TriggerButton />
        </div>
        <NavigationPanel />
      </ReactFlow>
    </div>
  );
};

export default LayoutFlow;
