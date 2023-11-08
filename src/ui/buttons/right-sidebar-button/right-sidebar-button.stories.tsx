import type { Meta, StoryObj } from '@storybook/react';

import RightSidebarButton from './right-sidebar-button';

const meta: Meta<typeof RightSidebarButton> = {
  component: RightSidebarButton,
  argTypes: {
    onClick: {
      action: 'clicked',
      description: 'Callback функция, вызываемая при клике',
    },
    isVisible: {
      type: 'boolean',
      description: 'Вариант активности блока',
      defaultValue: false,
      options: [false, true],
      control: {
        type: 'radio',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof RightSidebarButton>;

export const SidebarButton: Story = {
  render: (args) => <RightSidebarButton {...args} />,
};
