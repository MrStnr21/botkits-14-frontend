import { FC, useCallback, useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import cn from 'classnames/bind';

import ReactFlow, {
  addEdge,
  Background,
  useNodesState,
  useEdgesState,
  Connection,
  Edge,
  getConnectedEdges,
  Node,
} from 'reactflow';

import { useMediaQuery } from '@mui/material';
import ButtonStart from '../buttons/button-start/button-start';
import { initialNodes, nodeTypes } from './initial-nodes';
import { edgeOptions, initialEdges } from './initial-edges';

import styles from './layoutFlow.module.scss';
import 'reactflow/dist/style.css';
import NavigationPanel from '../navigation-panel/navigation-panel';
import TriggerBlock, { triggers } from '../blocks/triggerBlock/triggerBlock';
import AddBlockPanel from '../add-block-panel/add-block-panel';
import Button from '../../../ui/buttons/button/button';
import { ButtonSizes, ButtonSizesMobile } from '../utils/data';
import BotName from '../bot-name/bot-name';
import ModalPopup from '../../popups/modal-popup/modal-popup';
import { useAppDispatch } from '../../../services/hooks/hooks';
import { OPEN_MES_POPUP } from '../../../services/actions/popups/messengers-popup';
import {
  filterNodes,
  getUrlPath,
  iconOfPlatform,
  saveVariable,
  saveName,
  saveTrigger,
} from '../utils';
import { storeOfVariables, namesOfBlocks } from '../utils/store';
import { TVariable, TTrigger } from '../../../services/types/builder';
import { getBuilderApi, saveBuilderApi } from '../../../api';
import { TResponseError } from '../../../services/types/response';
import { createAddErrorAction } from '../../../services/actions/errors/errors';
import ButtonIcon from '../../../ui/buttons/button-icon/button-icon';
import { removeFileApi } from '../../../api/builder';

const cx = cn.bind(styles);

const LayoutFlow: FC = () => {
  const isMobile = useMediaQuery('(max-width: 620px)');
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [triggerOpened, toggleTrigger] = useState(false);
  const [menuOpened, toggleMenu] = useState(false);
  const [searchParams] = useSearchParams();
  const [title, setTitle] = useState('Название бота');
  const [platformIcon, setPlatformIcon] = useState(iconOfPlatform.Facebook);
  const [permission, setPermission] = useState({});
  const dispatch = useAppDispatch();

  useEffect(() => {
    const id = searchParams.get('id') || sessionStorage.getItem('bot_id') || '';
    const path =
      searchParams.get('type') || sessionStorage.getItem('type')
        ? getUrlPath[searchParams.get('type') || ''] ||
          getUrlPath[sessionStorage.getItem('type') || '']
        : '';

    getBuilderApi(path, id)
      .then((data) => {
        if (data.features && data.features.nodes) {
          setNodes(data.features.nodes);
        }
        if (data.features && data.features.edges) {
          setEdges(data.features.edges);
        }
        if (data.features && data.features.variables) {
          data.features.variables.map((el: TVariable) =>
            saveVariable(storeOfVariables, el.name, el.id)
          );
        }
        if (data.features && data.features.nodes) {
          data.features.nodes.map((el) =>
            saveName(namesOfBlocks, el.data.name, el.id, el.type)
          );
        }
        if (data.features && data.features.triggers) {
          data.features.triggers.map((el: TTrigger) =>
            saveTrigger(triggers, el.id, el.tag, el.type, el.name, el.text)
          );
        }

        if (data.title) {
          setTitle(data.title);
        }
        if (data.messengers && data.messengers[0].name) {
          setPlatformIcon(
            data.messengers.map(
              (el: { name: string }) => iconOfPlatform[el.name]
            )[0]
          );
        }
        // eslint-disable-next-line no-console
        setPermission(data.permission);
      })
      .catch((err: TResponseError) => {
        // eslint-disable-next-line no-console
        console.log(err);
      });

    localStorage.setItem('builder-files-to-remove', '');
  }, []);

  const saveBot = () => {
    const id = searchParams.get('id') || sessionStorage.getItem('bot_id') || '';
    const path =
      searchParams.get('type') || sessionStorage.getItem('type')
        ? getUrlPath[searchParams.get('type') || ''] ||
          getUrlPath[sessionStorage.getItem('type') || '']
        : '';

    const fetchingNodes = filterNodes(nodes);
    const builder = {
      features: {
        nodes: fetchingNodes,
        edges,
        variables: storeOfVariables,
        triggers,
      },
    } as any;

    // Добавляем permission если изменяем не шаблон
    if (searchParams.get('type') !== 'template') {
      builder.permission = permission;
    }

    saveBuilderApi(builder, path, id).catch(() => {
      // eslint-disable-next-line no-console
      dispatch(createAddErrorAction('Не получилось сохранить'));
    });
  };

  // Ручная очистка любого массива с отправкой на бэк, например, битого блока с файлом
  /* resetVar(nodes[1].data.data);
  saveBot(); */

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

  const onNodesDelete = useCallback(
    (deleted: Node[]) => {
      setEdges(
        deleted.reduce((acc, node) => {
          const connectedEdges = getConnectedEdges([node], edges);

          const remainingEdges = acc.filter(
            (edge) => !connectedEdges.includes(edge)
          );

          return remainingEdges;
        }, edges)
      );
    },
    [nodes, edges]
  );

  const menuCloseHandler = () => {
    toggleMenu(false);
  };

  useEffect(() => {
    setTimeout(() => document.addEventListener('click', menuCloseHandler), 1);
    return () => {
      document.removeEventListener('click', menuCloseHandler);
    };
  }, [menuOpened]);

  /*
  Хорошо бы избавиться от nodes.length в зависимостях.
   Тут происходит пересчет позиций кнопок при смене разрешения
   Данный компонент успевает загрузиться быстрее, чем подгружаеются все ноды
   Дабы обработать переход на  мобильный - приходится производить пересчет при измнении кол-ва нод
   Закрывал данный баг в спешном порядке, другой вариант в голову не пришел =)
    */

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

    // Сохранение обновленного билдера, если изменилось кол-во нод и объект permission не пустой(загружены данные бота)
    if (Object.keys(permission).length) {
      saveBot();
    }
  }, [isMobile, setNodes, nodes.length]);

  const onButtonSave = () => {
    const filesToRemove = localStorage.getItem('builder-files-to-remove');
    const id = searchParams.get('id') || sessionStorage.getItem('bot_id') || '';
    saveBot();
    if (filesToRemove) {
      const toRemoveArr = filesToRemove.split(' ');
      toRemoveArr.forEach((item: string) => {
        const [fileId, nodeId] = item.split(',');
        removeFileApi(`bots/files/delete/${fileId}/${id}/${nodeId}`).catch(
          () => {
            console.log('file del err');
          }
        );
      });
    }
    localStorage.setItem('builder-files-to-remove', '');
  };

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
        onNodesDelete={onNodesDelete}
      >
        <Background />
        <div className={styles['bot-name']}>
          <BotName
            isUpdating={false}
            platform_icon={platformIcon}
            title={title}
          />
        </div>
        <ButtonIcon
          icon="tag"
          onClick={() => toggleTrigger(true)}
          btnStyle={styles.triggerButton}
        />
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
          <Button color="green" variant="default" onClick={onButtonSave}>
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
