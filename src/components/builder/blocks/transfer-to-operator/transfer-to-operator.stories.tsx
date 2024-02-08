import type { Meta, StoryObj } from '@storybook/react';
import { ReactFlowProvider } from 'reactflow';
import TransferToOperatorBlock from './transfer-to-operator';

const meta: Meta<typeof TransferToOperatorBlock> = {
  title: 'COMPONENTS/Builder/other-components/blocks/transfer-to-operator',
  component: TransferToOperatorBlock,
};

export default meta;

type Story = StoryObj<typeof TransferToOperatorBlock>;

export const Block: Story = {
  render: () => (
    <ReactFlowProvider>
      <TransferToOperatorBlock data={{ name: 'test' }} />
    </ReactFlowProvider>
  ),
};
