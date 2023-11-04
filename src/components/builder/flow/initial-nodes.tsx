// import { FC, useCallback, useState } from 'react';
// import { v4 as uuidv4 } from 'uuid';
// import { ReactNode } from 'react';
import {
  Node,
  NodeTypes,
  // applyNodeChanges,
  // OnNodesChange,
  // OnEdgesChange,
  // OnConnect,
} from 'reactflow';

import ButtonStartFlow from '../blocks/button-start/button-start-flow';
// import InlineButton from '../blocks/message-block/button-inline/button-inline';
// import PanelInline from '../blocks/message-block/panel-inline/panel-inline';
// import styles from './layoutFlow.module.scss';
import 'reactflow/dist/style.css';
// import ButtonStart from '../blocks/button-start/button-start';
import MessageBlock from '../blocks/message-block/message-block';

export const nodeTypes: NodeTypes = {
  // inlineButton: InlineButton,
  message: MessageBlock,
  // panelInline: PanelInline,
  buttonStart: ButtonStartFlow,
};

export const initialNodes: Node[] = [
  {
    id: 'node-1',
    type: 'buttonStart',
    data: { type: 'start' },
    position: { x: 0, y: 0 },
  },
  {
    id: 'node-2',
    type: 'message',
    data: {
      name: 'message',
      data: [{ type: 'message' }, { type: 'answers' }, { type: 'buttons' }],
    },
    position: { x: 130, y: 0 },
  },
];