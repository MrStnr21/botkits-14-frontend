import { FC, useCallback, useState, useEffect } from 'react';
import cn from 'classnames/bind';

import ReactFlow, {
  addEdge,
  Background,
  useNodesState,
  useEdgesState,
  Connection,
  Edge,
} from 'reactflow';

import { useMediaQuery } from '@mui/material';
import ButtonStart from '../blocks/button-start/button-start';
import TriggerButton from '../../../ui/buttons/trigger-block-button/trigger-block-button';
import { initialNodes, nodeTypes } from './initial-nodes';
import { initialEdges, edgeOptions } from './initial-edges';

import styles from './layoutFlow.module.scss';
import 'reactflow/dist/style.css';
import NavigationPanel from '../navigation-panel/navigation-panel';
import TriggerBlock from '../triggerBlock/triggerBlock';
import AddBlockPanel from '../add-block-panel/add-block-panel';
import Button from '../../../ui/buttons/button/button';
import { ButtonSizes, ButtonSizesMobile } from '../utils/data';
import { useAppDispatch } from '../../../services/hooks/hooks';
import { OPEN_MES_POPUP } from '../../../services/actions/popups/messengers-popup';

const cx = cn.bind(styles);

const LayoutFlow: FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const isMobile = useMediaQuery('(max-width: 520px)');
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [triggerOpened, toggleTrigger] = useState(false);
  const [menuOpened, toggleMenu] = useState(false);
  const onConnect = useCallback((connection: Edge | Connection) => {
    setEdges((eds) => addEdge(connection, eds));
  }, []);

  const menuCloseHandler = () => {
    toggleMenu(false);
  };

  useEffect(() => {
    setTimeout(() => document.addEventListener('click', menuCloseHandler), 1);
    return () => {
      document.removeEventListener('click', menuCloseHandler);
    };
  }, [menuOpened]);

  useEffect(() => {
    if (isMobile) {
      setNodes(
        nodes.map((item) => {
          if (item.type === 'button') {
            return {
              ...item,
              position: { x: ButtonSizesMobile.startX, y: item.data.mobY },
            };
          }
          return item;
        })
      );
    } else {
      setNodes(
        nodes.map((item) => {
          if (item.type === 'button') {
            return {
              ...item,
              position: { x: ButtonSizes.startX, y: item.data.deskY },
            };
          }
          return item;
        })
      );
    }
  }, [isMobile]);

  const dispatch = useAppDispatch();

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
        defaultEdgeOptions={edgeOptions}
      >
        <Background />
        <div className={cx('upWrapper')}>
          <div className={cx('wrapper')}>
            <ButtonStart data={{ type: 'stop' }} />
          </div>
          <div className={cx('wrapper')}>
            <ButtonStart
              data={{
                type: 'test',
                onClick: () => dispatch({ type: OPEN_MES_POPUP }),
              }}
            />
          </div>
          <TriggerButton onClick={() => toggleTrigger(true)} />
        </div>
        <NavigationPanel />
        <div className={cx('addBlock')}>
          {menuOpened && <AddBlockPanel />}
          <Button
            size="large"
            variant="circle"
            color="green"
            onClick={() => toggleMenu(true)}
          />
        </div>
      </ReactFlow>
      <TriggerBlock
        isOpened={triggerOpened}
        close={() => {
          toggleTrigger(false);
        }}
      />
    </div>
  );
};

export default LayoutFlow;
