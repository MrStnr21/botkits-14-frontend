import type { Meta, StoryObj } from '@storybook/react';
import { ReactFlowProvider } from 'reactflow';
import VariableBlockNode from './variable';

const data = {
  name: 'Название переменной',
  variables: [
    {
      id: '',
      variable: '',
      value: '',
    },
  ],
};

const meta: Meta<typeof VariableBlockNode> = {
  component: VariableBlockNode,
};

export default meta;

type Story = StoryObj<typeof VariableBlockNode>;

export const ApiBlock: Story = {
  render: () => (
    <ReactFlowProvider>
      <VariableBlockNode data={data} />
    </ReactFlowProvider>
  ),
};
