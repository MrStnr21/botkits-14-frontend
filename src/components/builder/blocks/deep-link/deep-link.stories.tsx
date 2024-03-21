import type { Meta, StoryObj } from '@storybook/react';
import { ReactFlowProvider } from 'reactflow';
import DeepLink from './deep-link';

const data = {
  name: 'Deeplink',
  param: '',
  type: 'random' as const,
  signsAmount: 8,
  additionValue: '',
  additionLink: '',
};

const meta: Meta<typeof DeepLink> = {
  title: 'COMPONENTS/Builder/blocks/deep-link',
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
