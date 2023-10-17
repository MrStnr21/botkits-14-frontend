import type { Meta, StoryObj } from '@storybook/react';

import RightSidebarButton from './right-sidebar-button';

const meta: Meta<typeof RightSidebarButton> = {
  component: RightSidebarButton,
};

export default meta;
type Story = StoryObj<typeof RightSidebarButton>;

export const SidebarButton: Story = {
  render: () => <RightSidebarButton />,
};
