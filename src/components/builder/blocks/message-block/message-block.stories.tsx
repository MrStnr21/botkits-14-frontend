import type { Meta, StoryObj } from '@storybook/react';
import { ReactFlowProvider } from 'reactflow';
import MessageBlock from './message-block';
import { MessageDataTypes } from '../../../../services/types/builder';
import { baseSlateData } from '../../../../utils/constants';

const data = {
  name: 'Message',
  data: [
    {
      type: MessageDataTypes.message as const,
      value: baseSlateData,
    },
    {
      type: MessageDataTypes.answers as const,
      horButtons: [],
      verButtons: [],
    },
    {
      type: MessageDataTypes.buttons as const,
      horButtons: [],
      verButtons: [],
    },
  ],
  saveAnswer: {
    value: { id: '1', name: '', value: '' },
    show: false,
  },
  showTime: {
    show: false,
    value: '',
    days: '',
    hours: '',
    minutes: '',
    seconds: '',
  },
};

const meta: Meta<typeof MessageBlock> = {
  component: MessageBlock,
};

export default meta;

type Story = StoryObj<typeof MessageBlock>;

export const Block: Story = {
  render: () => (
    <ReactFlowProvider>
      <MessageBlock data={data} />
    </ReactFlowProvider>
  ),
};
