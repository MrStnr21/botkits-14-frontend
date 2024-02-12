import type { Meta, StoryObj } from '@storybook/react';
import { ReactFlowProvider } from 'reactflow';
import AddBlockPanel from './add-block-panel';

const meta: Meta<typeof AddBlockPanel> = {
  component: AddBlockPanel,
  title: 'COMPONENTS/Builder/other-components/add-block-panel',
};

export default meta;

type Story = StoryObj<typeof AddBlockPanel>;

export const Panel: Story = {
  render: () => {
    return (
      <ReactFlowProvider>
        <AddBlockPanel />
      </ReactFlowProvider>
    );
  },
};
