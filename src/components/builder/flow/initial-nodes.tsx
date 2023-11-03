// import { FC, useCallback, useState } from 'react';
// import { v4 as uuidv4 } from 'uuid';
// import { ReactNode } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import {
  Node,
  NodeTypes,
  // applyNodeChanges,
  // OnNodesChange,
  // OnEdgesChange,
  // OnConnect,
} from 'reactflow';

// import ButtonSFlow from '../blocks/buttons/buttons-flow';
// import InlineButton from '../blocks/message-block/button-inline/button-inline';
// import PanelInline from '../blocks/message-block/panel-inline/panel-inline';
// import styles from './layoutFlow.module.scss';
// eslint-disable-next-line import/no-extraneous-dependencies
import 'reactflow/dist/style.css';
import ButtonS from '../blocks/buttons/buttons';
import MessageBlock from '../blocks/message-block/message-block';

export const nodeTypes: NodeTypes = {
  // inlineButton: InlineButton,
  message: MessageBlock,
  // panelInline: PanelInline,
  button: ButtonS,
};

export const initialNodes: Node[] = [
  {
    id: 'node-1',
    type: 'button',
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
