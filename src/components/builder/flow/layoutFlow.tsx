import { FC, useCallback, useState, useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
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
// eslint-disable-next-line import/no-cycle
import { initialNodes, nodeTypes } from './initial-nodes';
import { initialEdges, edgeOptions } from './initial-edges';

import styles from './layoutFlow.module.scss';
import 'reactflow/dist/style.css';
import NavigationPanel from '../navigation-panel/navigation-panel';
import TriggerBlock from '../triggerBlock/triggerBlock';
import AddBlockPanel from '../add-block-panel/add-block-panel';
import Button from '../../../ui/buttons/button/button';
import { ButtonSizes, ButtonSizesMobile } from '../utils/data';
import BotName from '../../../ui/bot-name/bot-name';
import ModalPopup from '../../popups/modal-popup/modal-popup';
import { useAppDispatch } from '../../../services/hooks/hooks';
import { OPEN_MES_POPUP } from '../../../services/actions/popups/messengers-popup';
import { getAccessToken } from '../../../auth/authService';
import { filterNodes, getUrlPath } from '../utils';

const cx = cn.bind(styles);

// eslint-disable-next-line import/no-mutable-exports
export let namesOfBlocks: string[] = [];

const LayoutFlow: FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const isMobile = useMediaQuery('(max-width: 620px)');
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [triggerOpened, toggleTrigger] = useState(false);
  const [menuOpened, toggleMenu] = useState(false);
  const [searchParams] = useSearchParams();

  namesOfBlocks = useMemo(() => nodes.map((item) => item.data.name), [nodes]);

  useEffect(() => {
    const token = getAccessToken();
    const id = searchParams.get('id');
    const path = getUrlPath(searchParams.get('type'));
    if (!id || !path) {
      return;
    }
    fetch(`https://botkits.nomoreparties.co/dev/api/${path}/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.features && data.features.nodes) {
          setNodes(data.features.nodes);
        }
        if (data.features && data.features.edges) {
          setEdges(data.features.edges);
        }
      });
  }, []);

  const saveBot = () => {
    const id = searchParams.get('id');
    const path = getUrlPath(searchParams.get('type'));
    if (!id || !path) {
      return;
    }
    const fetchingNodes = filterNodes(nodes);
    const fetchingEdges = edges;

    const builder = {
      features: { nodes: fetchingNodes, edges: fetchingEdges },
    };

    fetch(`https://botkits.nomoreparties.co/dev/api/${path}/${id}`, {
      method: 'PATCH',
      headers: {
        authorization: `Bearer ${getAccessToken()}`,
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(builder),
    });
  };

  const onConnect = useCallback((connection: Edge | Connection) => {
    if (connection.source === connection.target) {
      return; // Предотвращение соединения узла с самим собой
    }
    setEdges((eds) => addEdge(connection, eds));
  }, []);

  const isValidConnection = (connection: Connection) => {
    const { source, target } = connection;
    // Проверяем, что связь между двумя узлами еще не существует
    return !edges.some(
      (edge) => edge.source === source && edge.target === target
    );
  };

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
        isValidConnection={isValidConnection}
      >
        <Background />
        <div className={styles['bot-name']}>
          <BotName isUpdating={false} />
        </div>
        <div className={styles['trigger-button']}>
          <TriggerButton onClick={() => toggleTrigger(true)} />
        </div>
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
        </div>
        <NavigationPanel />
        <div className={cx('saveButton')}>
          <Button color="green" variant="default" onClick={saveBot}>
            Сохранить
          </Button>
        </div>
        <div className={cx('addBlock')}>
          {!isMobile && menuOpened && (
            <div className={cx('addBlock__menu')}>
              <AddBlockPanel />
            </div>
          )}
          <Button
            size="large"
            variant="circle"
            color="green"
            onClick={() => toggleMenu(true)}
          />
        </div>
        {isMobile && menuOpened && (
          <ModalPopup closeIcon={false} onClick={() => toggleMenu(false)}>
            <div className={cx('addBlock__menu')}>
              <AddBlockPanel />
            </div>
          </ModalPopup>
        )}
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
