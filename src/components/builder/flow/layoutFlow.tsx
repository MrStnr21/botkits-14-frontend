import { FC, useCallback, useEffect, useState } from 'react';
import cn from 'classnames/bind';

import ReactFlow, {
  OnNodesChange,
  applyNodeChanges,
  OnEdgesChange,
  applyEdgeChanges,
  OnConnect,
  addEdge,
  Background,
  // useNodesState,
  // useEdgesState,
  // Connection,
  // Edge,
} from 'reactflow';

import ButtonStart from '../blocks/button-start/button-start';
import TriggerButton from '../../../ui/buttons/trigger-block-button/trigger-block-button';
import { initialNodes, nodeTypes } from './initial-nodes';
import initialEdges from './initial-edges';

import styles from './layoutFlow.module.scss';
import 'reactflow/dist/style.css';
import NavigationPanel from '../navigation-panel/navigation-panel';
import { useAppSelector } from '../../../services/hooks/hooks';

const cx = cn.bind(styles);

const LayoutFlow: FC = () => {
  const currentNodes = useAppSelector((s) => s.flowActionsReducer);

  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);

  const onNodesChange: OnNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    [setNodes]
  );
  const onEdgesChange: OnEdgesChange = useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    [setEdges]
  );

  const onConnect: OnConnect = useCallback(
    (connection) => setEdges((eds) => addEdge(connection, eds)),
    [setEdges]
  );

  /* // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const onConnect = useCallback(
    (params: Edge | Connection) => setEdges((eds) => addEdge(params, eds)),
    []
  ); */

  useEffect(() => {
    setNodes(currentNodes.blocks);
  }, [currentNodes]);

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
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        fitView
      >
        <Background />
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
