import { Meta, StoryObj } from '@storybook/react';
import { ReactFlowProvider } from 'reactflow';
import NavigationPanel from './navigation-panel';

const meta: Meta<typeof NavigationPanel> = {
  component: NavigationPanel,
};

export default meta;

type Story = StoryObj<typeof NavigationPanel>;

export const Panel: Story = {
  render: () => (
    <ReactFlowProvider>
      <NavigationPanel />
    </ReactFlowProvider>
  ),
};
