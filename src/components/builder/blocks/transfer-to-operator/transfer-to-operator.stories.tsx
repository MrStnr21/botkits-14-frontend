import type { Meta, StoryObj } from '@storybook/react';
import { ReactFlowProvider } from 'reactflow';
import TransferToOperatorBlock from './transfer-to-operator';

const meta: Meta<typeof TransferToOperatorBlock> = {
  title: 'COMPONENTS/Builder/blocks',
  component: TransferToOperatorBlock,
};

export default meta;

type Story = StoryObj<typeof TransferToOperatorBlock>;

export const BlockOperator: Story = {
  render: () => (
    <ReactFlowProvider>
      <TransferToOperatorBlock data={{ name: 'test' }} />
    </ReactFlowProvider>
  ),
};
