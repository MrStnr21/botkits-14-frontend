import type { Meta, StoryObj } from '@storybook/react';
import { ReactFlowProvider } from 'reactflow';
import ConditionalBlock from './conditional';

const data = {
  name: 'Conditional',
  variables: [],
};

const meta: Meta<typeof ConditionalBlock> = {
  component: ConditionalBlock,
};

export default meta;

type Story = StoryObj<typeof ConditionalBlock>;

export const Block: Story = {
  render: () => (
    <ReactFlowProvider>
      <ConditionalBlock data={data} />
    </ReactFlowProvider>
  ),
};
