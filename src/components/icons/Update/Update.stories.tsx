import type { Meta, StoryObj } from '@storybook/react';
import Update from './Update';

const meta: Meta<typeof Update> = {
  title: 'Components/Icons/Update',
  component: Update,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const UpdateDefault: Story = {
  args: {
    color: '#A6B3C9',
    width: 16,
    height: 16,
  },
};
