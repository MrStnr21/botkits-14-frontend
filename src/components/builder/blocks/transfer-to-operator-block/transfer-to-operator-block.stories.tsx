import type { Meta, StoryObj } from '@storybook/react';
import TransferToOperatorBlock from './transfer-to-operator-block';

const meta: Meta<typeof TransferToOperatorBlock> = {
  component: TransferToOperatorBlock,
};

export default meta;

type Story = StoryObj<typeof TransferToOperatorBlock>;

export const TransferToOperatorBlockReady: Story = {
  args: {
    nameSetter: () => {},
  },
};
