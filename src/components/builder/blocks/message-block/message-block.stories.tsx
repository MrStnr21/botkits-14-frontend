import type { Meta, StoryObj } from '@storybook/react';
import MessageBlock from './message-block';

const args = {
  data: {
    name: 'Приветствие',
    data: [
      {
        type: 'message' as const,
      },
      {
        type: 'answers' as const,
      },
      {
        type: 'buttons' as const,
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
