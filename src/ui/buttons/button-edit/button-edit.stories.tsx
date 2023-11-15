import type { Meta, StoryObj } from '@storybook/react';

import EditButton from './button-edit';

const meta: Meta<typeof EditButton> = {
  component: EditButton,
  argTypes: {
    onClick: {
      action: 'clicked',
      description: 'Callback функция, вызываемая при клике',
    },
  },
};

export default meta;
type Story = StoryObj<typeof EditButton>;

export const ButtonEdit: Story = {
  render: (args) => <EditButton {...args} />,
};
