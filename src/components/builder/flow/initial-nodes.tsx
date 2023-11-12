import { Node, NodeTypes } from 'reactflow';

import ButtonStart from '../blocks/button-start/button-start';
import InlineButton from '../blocks/message-block/button-inline/button-inline';
import ApiBlockNode from '../blocks/api/api-block';
import 'reactflow/dist/style.css';
import SendingCoordinatesBlock from '../blocks/sending-coordinates/sending-coordinates';
import MessageBlock from '../blocks/message-block/message-block';

export const nodeTypes: NodeTypes = {
  inlineButton: InlineButton,
  message: MessageBlock,
  sendingCoordinatesBlock: SendingCoordinatesBlock,
  buttonStart: ButtonStart,
  apiBlockNode: ApiBlockNode,
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
  {
    id: 'node-3',
    type: 'apiBlockNode',
    data: {
      name: 'API',
    },
    position: { x: 500, y: 0 },
  },
  {
    id: 'node-4',
    type: 'sendingCoordinatesBlock',
    data: {
      name: 'Отправка координат',
      coordinates: [],
    },
    position: { x: 900, y: 0 },
  },
  {
    id: 'node-5',
    type: 'inlineButton',
    data: {
      type: 'button',
    },
    position: { x: 1300, y: 0 },
  },
];
