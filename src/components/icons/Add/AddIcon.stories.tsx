import type { Meta, StoryObj } from '@storybook/react';
import AddIcon from './AddIcon';

const meta: Meta<typeof AddIcon> = {
  title: 'Components/Icons/AddIcon',
  component: AddIcon,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const IconAdd: Story = {
  args: {
    width: 36,
    height: 36,
  },
};
