import { Node, NodeTypes } from 'reactflow';

import ButtonStart from '../blocks/button-start/button-start';
import InlineButton from '../blocks/message-block/button-inline/button-inline';
import ApiBlockNode from '../blocks/api/api-block';
import 'reactflow/dist/style.css';
import SendingCoordinatesBlock from '../blocks/sending-coordinates/sending-coordinates';
import MessageBlock from '../blocks/message-block/message-block';
import ConditionalBlock from '../blocks/conditional/conditional';
import TelegramPayment from '../blocks/telegram-payment/telegram-payment';
import DeepLink from '../blocks/deep-link/deep-link';
import SavingToCrmBlock from '../blocks/saving-to-crm/saving-to-crm';
import TransferToOperatorBlock from '../blocks/transfer-to-operator/transfer-to-operator';
import VariableBlockNode from '../blocks/variable/variable';
import { baseSlateData } from '../../../utils/constants';

export const nodeTypes: NodeTypes = {
  button: InlineButton,
  message: MessageBlock,
  coordinate: SendingCoordinatesBlock,
  buttonStart: ButtonStart,
  api: ApiBlockNode,
  conditional: ConditionalBlock,
  telegramPay: TelegramPayment,
  deeplink: DeepLink,
  crm: SavingToCrmBlock,
  operator: TransferToOperatorBlock,
  variable: VariableBlockNode,
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
      data: [
        {
          type: 'message',
          value: baseSlateData,
        },
        { type: 'buttons', verButtons: [], horButtons: [] },
        { type: 'answers', verButtons: [], horButtons: [] },
      ],
      showTime: {
        show: true,
        value: 0,
      },
      saveAnswer: {
        show: true,
        value: {
          name: '',
        },
      },
    },
    position: { x: 130, y: 0 },
  },
];
