import type { Meta, StoryObj } from '@storybook/react';
import AddBlockPanel from './add-block-panel';

const meta: Meta<typeof AddBlockPanel> = {
  component: AddBlockPanel,
  title: 'COMPONENTS/Builder/add-block-panel',
};

export default meta;

type Story = StoryObj<typeof AddBlockPanel>;

export const Panel: Story = {};
