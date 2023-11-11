import type { Meta, StoryObj } from '@storybook/react';
import { ReactFlowProvider } from 'reactflow';
import ApiBlockNode from './api';

const data = {
  name: 'Api block',
};

const meta: Meta<typeof ApiBlockNode> = {
  component: ApiBlockNode,
};

export default meta;

type Story = StoryObj<typeof ApiBlockNode>;

export const ApiBlock: Story = {
  render: () => (
    <ReactFlowProvider>
      <ApiBlockNode data={data} />
    </ReactFlowProvider>
  ),
};
