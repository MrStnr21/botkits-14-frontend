import type { Meta, StoryObj } from '@storybook/react';
import { ReactFlowProvider } from 'reactflow';
import DeepLink from './deep-link';

const data = {
  name: 'Test name',
  type: 'random' as const,
  signsAmount: 8,
};

const meta: Meta<typeof DeepLink> = {
  component: DeepLink,
};

export default meta;

type Story = StoryObj<typeof DeepLink>;

export const Block: Story = {
  render: () => (
    <ReactFlowProvider>
      <DeepLink data={data} />
    </ReactFlowProvider>
  ),
};
