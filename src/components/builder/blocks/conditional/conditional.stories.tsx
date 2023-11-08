import type { Meta, StoryObj } from '@storybook/react';
import ConditionalBlock from './conditional';

const data = {
  name: 'Тестовое имя',
  variables: [
    {
      type: 'easy' as const,
    },
  ],
};

const meta: Meta<typeof ConditionalBlock> = {
  component: ConditionalBlock,
};

export default meta;

type Story = StoryObj<typeof ConditionalBlock>;

export const Block: Story = {
  args: {
    data,
  },
};
