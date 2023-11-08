import type { Meta, StoryObj } from '@storybook/react';
import TransferToOperatorBlock from './transfer-to-operator';

const meta: Meta<typeof TransferToOperatorBlock> = {
  component: TransferToOperatorBlock,
};

export default meta;

type Story = StoryObj<typeof TransferToOperatorBlock>;

export const BlockOperator: Story = {
  args: {
    data: {
      name: 'test name',
    },
  },
};
