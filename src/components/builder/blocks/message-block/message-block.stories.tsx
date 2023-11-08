import type { Meta, StoryObj } from '@storybook/react';
import MessageBlock from './message-block';
import { MessageDataTypes } from '../../../../services/types/builder';

const args = {
  data: {
    name: 'Приветствие',
    data: [
      {
        type: MessageDataTypes.message as const,
      },
      {
        type: MessageDataTypes.answers as const,
      },
      {
        type: MessageDataTypes.buttons as const,
      },
    ],
  },
};

const meta: Meta<typeof MessageBlock> = {
  component: MessageBlock,
};

export default meta;

type Story = StoryObj<typeof MessageBlock>;

export const Block: Story = {
  args,
};
