import type { Meta, StoryObj } from '@storybook/react';
import { ReactFlowProvider } from 'reactflow';
import ApiBlockNode from './api-block';

const data = {
  name: 'api',
  url: '',
  headers: [],
  params: [],
  variables: [],
};

const meta: Meta<typeof ApiBlockNode> = {
  title: 'COMPONENTS/Builder/other-components/blocks/api-block',
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
