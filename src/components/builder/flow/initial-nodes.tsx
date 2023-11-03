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

import ButtonSFlow from '../blocks/buttons/buttons-flow';
import MessageFlow from '../blocks/message-block/message-flow';
// import InlineButton from '../blocks/message-block/button-inline/button-inline';
// import PanelInline from '../blocks/message-block/panel-inline/panel-inline';

// import styles from './layoutFlow.module.scss';
import 'reactflow/dist/style.css';

export const nodeTypes: NodeTypes = {
  // inlineButton: InlineButton,
  messageFlow: MessageFlow,
  // panelInline: PanelInline,
  buttonSFlow: ButtonSFlow,
};

export const initialNodes: Node[] = [
  {
    id: 'node-1',
    type: 'buttonSFlow',
    data: { type: 'test' },
    position: { x: 0, y: 0 },
  },
  {
    id: 'node-2',
    type: 'messageFlow',
    data: { label: 'input' },
    position: { x: 130, y: 0 },
  },
];
